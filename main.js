window.addEventListener('scroll', onScroll)

function onScroll() {
    navScroll()
    topButtonScroll()
}

/*==== SCROLL CLASS ====*/
const nav = document.querySelector('nav')
function navScroll() {

    if (scrollY >= 20) {
        nav.classList.add('scroll')
    }
    else {
        nav.classList.remove('scroll')
    }
}

/*==== MENU ====*/
const menu = document.querySelector('.menu-simbol')
menu.addEventListener('click', () => {
    document.body.classList.add('open-menu')
})

const closeMenu = document.querySelector('.close-simbol')
function menuClose() {
    document.body.classList.remove('open-menu')
}
closeMenu.addEventListener('click', menuClose)


const menuItem = document.querySelector('.menu')
menuItem.addEventListener('click', menuClose)


/*=== TOP BUTTON SHOW ===*/
function topButtonScroll() {
    if (scrollY >= 500) {
        topButton.classList.add('show')
    }
    else {
        topButton.classList.remove('show')
    }
}


/*=== SCROLL REVEAL ===*/
ScrollReveal().reveal(
    '#services, .card, .info, #about, #contact',
    { origin: 'top', delay: 700, distance: '30px' })