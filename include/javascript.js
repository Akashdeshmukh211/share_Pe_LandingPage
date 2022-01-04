let slide = 0;
let left = document.getElementsByClassName("letf");
let right = document.getElementsByClassName("right");

function slidecontroller(x) {
  slide = slide + x;
  slideshow(slide);
}
slideshow(slide);
function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  console.log(slides);
  if (num == slides.length) {
    slide = 0;
    num = 0;
  }
  if (num < 0) {
    slide = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}
