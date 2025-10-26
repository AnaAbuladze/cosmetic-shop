const sectionBelive = document.querySelector('.we-belive');
const moveAmountX = 10;
const startPointX = 10;
let isScrollingX = false;

function updateBeliveBackgroundX() {
    if (!sectionBelive) return;
    const sectionRect = sectionBelive.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    let scrollProgress = (viewportHeight - sectionRect.top) / (viewportHeight + sectionRect.height);
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));
    const newPosX = startPointX + scrollProgress * moveAmountX;
    sectionBelive.style.backgroundPosition = `${newPosX}% center`;
}

window.addEventListener('scroll', () => {
    if (!isScrollingX) {
        window.requestAnimationFrame(() => {
            updateBeliveBackgroundX();
            isScrollingX = false;
        });
        isScrollingX = true;
    }
});
