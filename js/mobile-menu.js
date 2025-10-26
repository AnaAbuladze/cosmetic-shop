document.addEventListener('DOMContentLoaded', () => {
    const mobileOpen = document.querySelector('.mobile-nav-btn');
    const menuClose = document.querySelector('.mobile-menu-close');
    const menuBox = document.querySelector('.mobile-menu-box');
    if (!mobileOpen || !menuClose || !menuBox) return;

    mobileOpen.addEventListener('click', () => {
        menuBox.style.display = 'block';
    });

    menuClose.addEventListener('click', () => {
        menuBox.style.display = 'none';
    });
});
