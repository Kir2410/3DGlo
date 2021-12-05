const menu = () => {
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || (e.target.tagName === 'A' && menu.classList.contains('active-menu')) || e.target.classList.contains('close-btn') || (!e.target.classList.contains('active-menu') && menu.classList.contains('active-menu') && !e.target.closest('li'))) {
            handleMenu();
        }
    })
}

export default menu;