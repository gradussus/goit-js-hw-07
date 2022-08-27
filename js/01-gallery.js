import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onGalleryClick);
let instance = null;

const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                
            />
        </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryEl);

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
