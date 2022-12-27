import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createImageMarkUp(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>
        `
    }).join('');
}
function renderImageMarkUp(items) {
    galleryEl.innerHTML = createImageMarkUp(items);
}
renderImageMarkUp(galleryItems);

galleryEl.addEventListener('click', onGalleryItemClickModalOpen);


function onGalleryItemClickModalOpen(evt) {
    evt.preventDefault();
    let originalImg = evt.target.dataset.source;
    let description = evt.target.alt;
    console.log(description);

    const instance = basicLightbox.create(`
        <img src="${originalImg}" alt="${description}" width="800">
    `).show()

    document.addEventListener('keydown', evt => {
        if (evt.code === 'Escape') {
        instance.close()
    }
    });
}

