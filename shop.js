//get the image element
const img = document.querySelector("image");
//create customMadeEventHandler
function enlargeImageHandler(event){
    //make the image big
    img.style.transform= "scale(1.4)";
}
//call the addEventListener
img.addEventListener("mouseenter", enlargeImageHandler);
img.addEventListener("mouseleave", function(event){
    img.style.transform ="scale(1.0)";
})