
// web cam js

const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./weights'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./weights'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./weights'),
  faceapi.nets.faceExpressionNet.loadFromUri('./weights'),
  faceapi.nets.ageGenderNet.loadFromUri('./weights')
]).then(startVideo)


startVideo()

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    // Detect faces in the video frame
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors()
  
    // Resize the bounding boxes to match the display size
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
  
    // Clear the canvas
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  
    // Draw bounding boxes around the detected faces
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
  
    // Calculate the face similarity between the first two detected faces
    if (resizedDetections.length >= 2) {
      const face1 = resizedDetections[0].descriptor
      const face2 = resizedDetections[1].descriptor
      const distance = faceapi.euclideanDistance(face1, face2)
      console.log(`Face similarity: ${distance}`)
      const sim=document.getElementById("face-similarity")
      if(distance<0.6){
        sim.innerText='two faces are similar with distance'+parseFloat(distance.toFixed(2))
      }
      else{
        sim.innerText='two faces are not similar! '
      }
      
    }
  }, 100)
  
})