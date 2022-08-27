import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const placeToImport = document.querySelector(".gallery");
placeToImport.addEventListener("click", onGalleryClick);
const createCards = createPreviewCards(galleryItems);

function createPreviewCards(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}
placeToImport.insertAdjacentHTML("beforeend", createCards);

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);
  const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

  instance.show();
}
