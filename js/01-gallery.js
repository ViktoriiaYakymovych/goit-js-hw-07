import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

const listItems = makeMarkup(galleryItems);
fullList(listItems);

galleryList.addEventListener("click", onImgClick);

function makeMarkup(elements) {
    return elements.map((el) => {
        return `<li class="gallery__item">
                <a href="${el.original}" class="gallery__link">
                    <img class="gallery__image" src="${el.preview}" alt="${el.description}" data-source="${el.original}">
                </a>
                </li>`;
    }).join("");
}

function fullList(markup) {
    galleryList.innerHTML = markup;
}

function onImgClick(e) {
    e.preventDefault();
    const img = e.target;

    if (img.nodeName !== "IMG") {
        return;
    }

    const basicImg = basicLightbox.create(`    <img src="${img.dataset.source}" width="600" height="400">`);

    basicImg.show();
    window.addEventListener("keydown", onEscapeClick);
    function onEscapeClick(e) {
        if (e.code === "Escape") {
            basicImg.close();
            window.removeEventListener("keydown", onEscapeClick);
        }
    }
}

// console.log(galleryItems);
// console.log(galleryList);