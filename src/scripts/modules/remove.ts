const textElements = document.querySelectorAll('.gift__text') as NodeListOf<HTMLElement>;

textElements.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.add('gift__text_hidden');
    });
});

const textElements1 = document.querySelectorAll('.do__text') as NodeListOf<HTMLElement>;

textElements1.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.add('do__text_hidden');
    });
});