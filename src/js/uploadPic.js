const mediaContainer = document.getElementById("media-container");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("../src/weights"),
  faceapi.nets.faceLandmark68Net.loadFromUri("../src/weights"),
  faceapi.nets.faceRecognitionNet.loadFromUri("../src/weights"),
  faceapi.nets.faceExpressionNet.loadFromUri("../src/weights"),
  faceapi.nets.ageGenderNet.loadFromUri("../src/weights"),
]).then(startVideo);

document.getElementById("imageUpload").addEventListener("change", async () => {
  if (document.getElementById("imageUpload").files.length == 0) return;
  const image = await faceapi.bufferToImage(
    document.getElementById("imageUpload").files[0]
  );
  mediaContainer.innerHTML = "";
  const img = document.createElement("img");
  img.src = image.src;
  mediaContainer.appendChild(img);
  startVideo(image);
});

function startVideo(img) {
  const canvas = faceapi.createCanvasFromMedia(img || video);
  mediaContainer.appendChild(canvas);
  const displaySize = {
    width: img ? img.width : video.width,
    height: img ? img.height : video.height,
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
