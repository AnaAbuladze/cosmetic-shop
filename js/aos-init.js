AOS.init({
    once: true,
    offset: 0,
});

window.addEventListener('load', () => {
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) chatButton.classList.add('aos-animate');
});
