const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnailsLightbox = document.querySelectorAll('.thumbnail-lightbox');
const mainImage = document.querySelector('.show-product img');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelectorAll('.prev-btn');
const nextBtn = document.querySelectorAll('.next-btn');
const cartBtn = document.querySelectorAll('.cart-items');

let currentIndex = 0;
var isthumbails = false;

// Function to open the lightbox
function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxContent.src = thumbnails[0].querySelector('img').src;
    thumbnailLightbox();
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    currentIndex = 0
    lightboxContent.src = thumbnails[currentIndex].querySelector('img').src;
    document.querySelectorAll('.thumbnail-lightbox img')[currentIndex].classList.remove("selected");
}

function thumbnailLightbox() {
    currentIndex;
    thumbnailsLightbox.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index
            lightboxContent.src = thumbnailsLightbox[currentIndex].querySelector('img').src
            let lastImg = document.querySelectorAll(".selected");
            if (lastImg) {
                lastImg[1].classList.remove("selected");
            }
            thumbnail.classList.add("selected");
        });
    });
}

// Function to navigate to the previous image
function prevImage() {
    console.log('click')
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    lightboxContent.src = thumbnails[currentIndex].querySelector('img').src;
    // mainImage.src = lightboxContent.src;
    let lastImg = document.querySelectorAll(".selected");
    if (lastImg) {
        lastImg[1].classList.remove("selected");
    }
    document.querySelectorAll('.thumbnail-lightbox img')[currentIndex].classList.add("selected");
}

// Function to navigate to the next image
function nextImage() {
    console.log('click')
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxContent.src = thumbnails[currentIndex].querySelector('img').src;
    let lastImg = document.querySelectorAll(".selected");
    if (lastImg) {
        lastImg[1].classList.remove("selected");
    }
    document.querySelectorAll('.thumbnail-lightbox img')[currentIndex].classList.add("selected");
}

// Function next prev on mobile
function next_mobile(){
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxContent.src = thumbnails[currentIndex].querySelector('img').src;
    mainImage.src = lightboxContent.src;
}
function prev_mobile(){
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxContent.src = thumbnails[currentIndex].querySelector('img').src;
    mainImage.src = lightboxContent.src;
}

// Event listeners for thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index
        mainImage.src = thumbnail.querySelector('img').src;
        lightboxContent.src = thumbnails[currentIndex].querySelector('img').src
        let lastImg = document.querySelectorAll(".selected");
        if (lastImg) {
            lastImg[0].classList.remove("selected");
        }
        thumbnail.classList.add("selected");
    });
});


// Event listeners for lightbox navigation
prevBtn[1].addEventListener('click', prevImage);
nextBtn[1].addEventListener('click', nextImage);
nextBtn[0].addEventListener('click', next_mobile);
prevBtn[0].addEventListener('click', prev_mobile);
closeBtn.addEventListener('click', closeLightbox);

// Event listener for opening lightbox
mainImage.addEventListener('click', () => {
    if (isthumbails == true) {
        openLightbox(currentIndex);
    }
});

// when window size screen >=430 can click mainImage and take action
window.onload = function () {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 540) {
        isthumbails = false;
        lightbox.classList.add('hidden');
    }
    else if (windowWidth >= 540) {
        isthumbails = true;
    }
}
