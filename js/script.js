const mMenu = document.querySelector('.m-menu'),
    menuSidebar = document.querySelector('.menu-sidebar');

mMenu.onclick = () => {
    menuSidebar.classList.toggle('active');
};
