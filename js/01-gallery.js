import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const placeToImport = document.querySelector('.gallery')
const createCards = createPreviewCards(galleryItems)

function createPreviewCards(img) {
    return img.map(({ preview, description }) => { return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
    src="${preview}"
        data-source="large-image.jpg"
        alt="${description}"
      />
    </a>
  </div>` }
 
    ).join('')
}
placeToImport.insertAdjacentHTML('beforeend', createCards)