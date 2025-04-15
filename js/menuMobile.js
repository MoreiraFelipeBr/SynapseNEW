// function menuShow() {
//     let menuMobile = document.querySelector('.mobile-menu');
//     if (menuMobile.classList.contains('open')) {
//         menuMobile.classList.remove('open'); 
//         document.querySelector('.icon').src = "/img/menu_white_36dp.svg"   
//     } else {
//         menuMobile.classList.add('open')
//         document.querySelector('.icon').src = "/img/close_white_36dp.svg"
//     }
//     console.log("cliquei")
// }

function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.mobile-menu-icon .icon');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        menuIcon.src = "img/close_white_36dp.svg";
    }
}

// Fechar o menu ao clicar nos links
document.querySelectorAll('.mobile-menu .nav-item a').forEach(item => {
    item.addEventListener('click', () => {
        const menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuShow();
        }
    });
});