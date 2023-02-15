const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  document.body.classList.toggle("light");
  container.classList.toggle("active");
});
