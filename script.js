alert("JS connected");

let images = document.querySelectorAll(".gallery img");
let current = 0;

function openLightbox(img){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = img.src;
  current = [...images].indexOf(img);
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

function nextImg(){
  current = (current + 1) % images.length;
  document.getElementById("lightboxImg").src = images[current].src;
}

function prevImg(){
  current = (current - 1 + images.length) % images.length;
  document.getElementById("lightboxImg").src = images[current].src;
}

function filterImages(type) {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {

    if (type === "all") {
      img.style.display = "block";
    } 
    else if (img.classList.contains(type)) {
      img.style.display = "block";
    } 
    else {
      img.style.display = "none";
    }

  });
}

document.getElementById("lightbox").onclick = function(e){
  if(e.target.id === "lightbox") closeLightbox();
}

const buttons = document.querySelectorAll('.filter-btn');
const image = document.querySelectorAll('.image');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    images.forEach(img => {
      if(filter === 'all' || img.classList.contains(filter)){
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

/* Lightbox */

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img=>{
  img.addEventListener('click', ()=>{
    lightbox.style.display="flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', ()=>{
  lightbox.style.display="none";
});
