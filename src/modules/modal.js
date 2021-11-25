const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    let count = -50;

    const animationModal = () => {
        let animStart = requestAnimationFrame(animModal);
        modal.style.display = 'block';

        if (count < 21) {
            modalContent.style.top = `${count}%`;
        } else {
            cancelAnimationFrame(animStart);
            count = -50;
        }
        count += 2;
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            animationModal();
            console.dir(modal);
        })
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = '';
    });
};

export default modal;