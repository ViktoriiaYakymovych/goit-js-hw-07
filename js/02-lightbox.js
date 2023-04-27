import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

const listItems = makeMarkup(galleryItems);
fullList(listItems);

const galleryLightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

function makeMarkup(elements) {
    return elements.map((el) => {
        return `<li class="gallery__item">
        <a href="${el.original}" class="gallery__link"><img class="gallery__image" src="${el.preview}" alt="${el.description}"></a></li>`;
    }).join("");
}

function fullList(markup) {
    galleryList.innerHTML = markup;
}


console.log(galleryItems);
