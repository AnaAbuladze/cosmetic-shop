document.addEventListener('DOMContentLoaded', () => {
    let lastScroll = 0;
    const header = document.querySelector('.main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
            return;
        }
        if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
            header.style.transform = 'translateY(-100%)';
            header.style.opacity = '0';
        } else if (currentScroll < lastScroll) {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }

        lastScroll = currentScroll;
    });
});
