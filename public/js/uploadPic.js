const mediaContainer = document.getElementById("media-container");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("./weights"),
  faceapi.nets.faceLandmark68Net.loadFromUri("./weights"),
  faceapi.nets.faceRecognitionNet.loadFromUri("./weights"),
  faceapi.nets.faceExpressionNet.loadFromUri("./weights"),
  faceapi.nets.ageGenderNet.loadFromUri("./weights"),
]).then(startVideo);

document.getElementById("imageUpload").addEventListener("change", async () => {
  if (document.getElementById("imageUpload").files.length == 0) return;
  const image = await faceapi.bufferToImage(
    document.getElementById("imageUpload").files[0]
  );
  mediaContainer.innerHTML = "";
  const img = document.createElement("img");
  img.src = image.src;
  img.style.height = "400px"
  img.style.width = "400px"
  img.style.border = "5px solid green"
  img.style.padding = "1rem"
  mediaContainer.appendChild(img);
  startVideo(image);
});

function startVideo(img) {
  const canvas = faceapi.createCanvasFromMedia(img || video);
  mediaContainer.appendChild(canvas);
  const displaySize = {
    width: 400,
    height: 400,
  };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(img || video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withAgeAndGender();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    resizedDetections.forEach((detection) => {
      const box = detection.detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label:
          Math.round(detection.age) +
          " year old " +
          detection.gender
      });
      drawBox.draw(canvas);
    });
  }, 100);
}
