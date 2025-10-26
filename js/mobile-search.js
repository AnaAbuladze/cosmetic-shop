  document.addEventListener('DOMContentLoaded', () => {
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    const mobileSearchForm = document.getElementById('mobile-search-form');
    const mobileCloseSearch = document.getElementById('mobile-close-search');
    const mobileHeaderContent = document.getElementById('mobile-header-content');

    mobileSearchBtn.addEventListener('click', () => {
        mobileHeaderContent.style.display = 'none'; 
        mobileSearchForm.style.display = 'flex';
        mobileSearchForm.style.opacity = '0';
        mobileSearchForm.style.transition = 'opacity 0.3s ease';
        requestAnimationFrame(() => {
            mobileSearchForm.style.opacity = '1';
        });
    });


    mobileCloseSearch.addEventListener('click', () => {
        mobileSearchForm.style.opacity = '0';
        mobileSearchForm.addEventListener('transitionend', () => {
            mobileSearchForm.style.display = 'none';
            mobileHeaderContent.style.display = 'flex'; 
        }, { once: true });
    });
});
