function openLightbox(imageSrc, captionText) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var caption = document.getElementById("caption");

    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
    caption.innerText = captionText;
  }

  function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }