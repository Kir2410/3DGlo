import {
    animate
} from "./helpers"

const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            if (window.innerWidth >= 768) {
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalContent.style.opacity = progress;
                    }
                })
            }
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = '';
        }
    })
};

export default modal;