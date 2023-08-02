let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerview: 1,
        },
        768: {
            slidesPerview: 2,
        },
        1024: {
            slidesPerview: 3,
        },
    }
});

