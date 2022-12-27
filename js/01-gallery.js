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

let instance = basicLightbox.create(`
        <img src="" alt="" width="800">
    `);

function onGalleryItemClickModalOpen(evt) {
    evt.preventDefault();
    
    instance.src = evt.target.dataset.source;
    console.log(instance.src);
    
    instance.alt = evt.target.alt;
    console.log(instance.alt);
    console.log(instance);
    instance.show()

    document.addEventListener('keydown', onEscKeyBtnPress);
}

function onEscKeyBtnPress(evt) {
    if (evt.code === 'Escape') {
        closeModal()
    }
    
}

function closeModal() {
    instance.close()
    document.removeEventListener('keydown', onEscKeyBtnPress);
}
