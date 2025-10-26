document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.getElementById('search-form');
    const promocode = document.querySelector('.promocode');
    const icons = document.querySelector('.social-icons');
    const closeBtn = document.getElementById('close-search');
    if (!searchBtn || !searchForm) return;

    searchBtn.addEventListener('click', () => {
        searchForm.style.display = 'block';
        promocode.style.display = 'none';
        icons.style.display = 'none';
        searchBtn.style.opacity = '0';
        searchBtn.style.pointerEvents = 'none';
    });

    closeBtn.addEventListener('click', () => {
        searchForm.style.display = 'none';
        promocode.style.display = 'flex';
        icons.style.display = 'flex';
        searchBtn.style.opacity = '1';
        searchBtn.style.pointerEvents = 'auto';
    });
});
