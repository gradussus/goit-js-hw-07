import { galleryItems } from "./gallery-items.js";
// Change code below this line

const placeToImport = document.querySelector(".gallery");
placeToImport.addEventListener("click", onGalleryClick);
const createCards = createPreviewCards(galleryItems);
let instance = null;

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

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", onEscClick);
}

function onEscClick(event) {
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onEscClick);
  }
}
