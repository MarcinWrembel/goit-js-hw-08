// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector("div.gallery");

const imgGalleryMarkup = galleryItems
.map(
    (img) =>
    `<div class="gallery__item"> 
    <a class="gallery__link" href="${img.original}">
    <img class="gallery__image"
    src="${img.preview}"
    alt="${img.description}"
    />
    </a>
    </div>`
    )
    .join("");
    
    gallery.insertAdjacentHTML("afterbegin", imgGalleryMarkup);
    
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    
const largeImage = (e) => {
    lightbox.open(e)
  e.preventDefault();
};


gallery.addEventListener("click", largeImage);