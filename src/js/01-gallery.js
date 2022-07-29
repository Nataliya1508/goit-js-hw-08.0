// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import Simplelightbox from 'simpleLightbox';

import "simplelightbox/dist/simple-lightbox.min.css";

const imageGallery = document.querySelector('.gallery');

function createImageCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
}
const imageMarkup = createImageCardMarkup(galleryItems);
imageGallery.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  
});
