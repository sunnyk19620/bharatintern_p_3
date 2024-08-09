// Scroll effect for movies container (for example)
const moviesContainer = document.querySelector('.movies-container');

moviesContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    moviesContainer.scrollLeft += evt.deltaY;
});
