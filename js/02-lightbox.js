import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createImageMarkUp(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `
    }).join('');
}
function renderImageMarkUp(items) {
    galleryEl.innerHTML = createImageMarkUp(items);
}
renderImageMarkUp(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});

galleryEl.addEventListener('click', onGalleryItemClickModalOpen);


function onGalleryItemClickModalOpen(evt) {
    evt.preventDefault();

    
    lightbox.on(show.simplelightbox)
    
    document.addEventListener('keydown', evt => {
        if (evt.code === 'Escape') {
        close.simplelightbox
    }
    });
}
