import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryEl);

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: "250",
});
