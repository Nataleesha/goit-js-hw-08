// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

createGallery();

function createGallery() {
  let galleryElements = '';

  galleryItems.forEach(image => {
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = image.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = image.preview;
    galleryImg.dataset.source = image.original;
    galleryImg.alt = image.description;
    galleryLink.append(galleryImg);

    galleryElements += galleryLink.outerHTML;
  });

  gallery.insertAdjacentHTML('beforeend', galleryElements);
}

let lightbox = new SimpleLightbox('.gallery__link', {
  captionSelector: element => element.firstChild,
  captionsData: 'alt',
  captionDelay: 250,
});
