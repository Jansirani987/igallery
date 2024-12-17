// Select elements
const imgWrapper = document.getElementById('wrapper');
const fullImg = document.getElementById('fullImg');
const closeBtn = document.getElementById('close');
const images = document.querySelectorAll('.img-gallery img');

// Function to open the modal
images.forEach(img => {
    img.addEventListener('click', () => {
        fullImg.src = img.src;
        imgWrapper.style.display = 'flex';
        closeBtn.style.display = 'block';
    });
});

// Function to close the modal
closeBtn.addEventListener('click', () => {
    imgWrapper.style.display = 'none';
    closeBtn.style.display = 'none';
    fullImg.src = '';
});
