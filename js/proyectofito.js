// script.js
const animatedImage = document.getElementById('animated-image');

animatedImage.addEventListener('mouseover', () => {
    anime({
        targets: animatedImage,
        scale: 1.2,
        duration: 500
    });
});

animatedImage.addEventListener('mouseout', () => {
    anime({
        targets: animatedImage,
        scale: 1,
        duration: 500
    });
});
