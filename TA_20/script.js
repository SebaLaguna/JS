const hoverImage = document.getElementById("hoverImage");

const originalImageSrc = "img.jpg";  
const hoverImageSrc = "cambiada.jpg"; 


hoverImage.addEventListener("mouseover", function() {
    hoverImage.src = hoverImageSrc;
});

hoverImage.addEventListener("mouseout", function() {
    hoverImage.src = originalImageSrc;
});
