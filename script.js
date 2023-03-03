
// web cam js

const video = document.getElementById('video')
let icon = document.getElementById("icon");
navigator.getUserMedia = ( navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia);

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

const camera=document.getElementsByClassName("button-85")[0];
camera.addEventListener('click',function(e){
  if(camera.innerHTML=="Camera on"){
    cameraoff();
    camera.innerHTML="Camera off";
  }
  else{
    startVideo();
    camera.innerHTML="Camera on";
  }
})
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

function cameraoff() {
  const stream = video.srcObject;
  if (stream) {
    const tracks = stream.getTracks();

    tracks.forEach(function (track) {
      track.stop();
    });

    video.srcObject = null;
 }
}
video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: widthcanvas, height: heightcanvas }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender()

    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    resizedDetections.forEach(detection => {
      const box = detection.detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: Math.round(detection.age) + " year old " + detection.gender })
      drawBox.draw(canvas)
    })


  }, 100)
})