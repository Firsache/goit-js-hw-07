import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createImageMarkUp(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                loading="lazy"
                class="gallery__image lazyload"
                data-src="${preview}"
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

let instance;

function onGalleryItemClickModalOpen(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" alt="${evt.target.alt}" width="800">
    `);

    // instance.src = evt.target.dataset.source;
    // instance.alt = evt.target.alt;
    
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

const addSrcAttributeToIm = () => {
    const galleryImgEls = document.querySelectorAll('.gallery__image');

    galleryImgEls.forEach(elem => {
        elem.src = elem.dataset.src;
    })
}

const createLazySizesScript = () => {
    const script = document.createElement('.script');

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    return script;

}

if ('loading' in HTMLImageElement.prototype) {
    addSrcAttributeToIm();
} else {
    document.body.append(createLazySizesScript())
}
    