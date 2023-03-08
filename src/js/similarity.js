
// web cam js

const video = document.getElementById('video')

function toggleCam() {
  video.classList.toggle("switch");
  (video.classList.contains("switch")) ? icon.style.backgroundColor = "green" : icon.style.backgroundColor = "red";
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./weights'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./weights'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./weights'),
  faceapi.nets.faceExpressionNet.loadFromUri('./weights'),
  faceapi.nets.ageGenderNet.loadFromUri('./weights')
]).then(startVideo)

function setDimensions(sreenSize) {
  if (sreenSize.matches) { // If media query matches
    heightcanvas = 200
    widthcanvas = 300
  }else{
     heightcanvas = Number((video.style.height).slice(0, 3))
 widthcanvas = Number((video.style.width).slice(0, 3))
  }

}

//checking if the device is mobile or PC
var screenSize = window.matchMedia("(max-width: 700px)")

var heightcanvas = 0
var widthcanvas = 0

//based on results setting new dimensions of the canvas
setDimensions(screenSize)

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
  const displaySize = { width: widthcanvas, height: heightcanvas }
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
      
      // Display Value in to DOM
      faceValue.innerHTML = `Face similarity: ${(distance * 100).toFixed(2)}%`
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