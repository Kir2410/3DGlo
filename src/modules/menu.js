const menu = () => {
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.closest('li') || e.target.classList.contains('close-btn') || (!e.target.classList.contains('active-menu') && menu.classList.contains('active-menu'))) {
            console.log('мимо')
            handleMenu();
        }
    })
}

export default menu;