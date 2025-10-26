const elBg = document.querySelector('.for-bg');
const movementPercentX = 80;
const startPercentX = 10;
let tickingX = false;

function updateBgX() {
    if (!elBg) return;
    const rect = elBg.getBoundingClientRect();
    const winH = window.innerHeight;
    let progress = (winH - rect.top) / (winH + rect.height);
    progress = Math.max(0, Math.min(1, progress));
    const x = startPercentX + progress * movementPercentX;
    elBg.style.backgroundPosition = `${x}% center`;
}

window.addEventListener('scroll', () => {
    if (!tickingX) {
        window.requestAnimationFrame(() => {
            updateBgX();
            tickingX = false;
        });
        tickingX = true;
    }
});

updateBgX();
