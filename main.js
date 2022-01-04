const slideImage = document.querySelector("#image");
// const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// const navigationDots = document.querySelector(".navigation-dots");

// function init(){
//   slideImage.forEach((img,i) => {
//     img.style.left= i*100 + "%";
//   });
// }
var i = 0;
var images = [];
var time = 5000;

images[0] = "https://p4.wallpaperbetter.com/wallpaper/506/862/433/leaves-green-plant-wallpaper-preview.jpg";
images[1] = "https://p4.wallpaperbetter.com/wallpaper/222/149/309/nature-plants-ferns-macro-wallpaper-preview.jpg";
images[2] = "https://p4.wallpaperbetter.com/wallpaper/13/701/219/fern-leaves-carved-plant-wallpaper-preview.jpg";
console.log(images[0]);

function prev(){
  if(i <= 0) i= images.length;
  i--;
  return setImg();
}

function next(){
  if( i >= images.length-1) i=-1;
  i++;
  return setImg();
}

function setImg(){
  return slideImage.setAttribute('src',images[i])
}

function changeImage(){
  document.getElementById("image").src = images[i];
  console.log(document.getElementById("image").src);
  if(i < images.length-1){
    i++;
  }else{
    i=0;
  }
  setActiveClass()
  setTimeout("changeImage()",time);
}

changeImage()

function setActiveClass(){
  let current = document.querySelector("#image active");
  current.classList.remove("active");
  images[i].classList.add("active");
}