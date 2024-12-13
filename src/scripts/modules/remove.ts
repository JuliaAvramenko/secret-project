const textElements = document.querySelectorAll('.gift__text') as NodeListOf<HTMLElement>;

textElements.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.add('gift__text_hidden');
    });
});