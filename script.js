let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginFormContainer = document.querySelector(".login-form-container");
let formCloseBtn = document.querySelector("#form-close");
let navbar=document.querySelector("header .navbar");
let menu=document.querySelector("#menu-bar");
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
    loginFormContainer.classList.remove("active");
} 

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
})

formBtn.addEventListener("click", () => {
    loginFormContainer.classList.add("active");
})

formCloseBtn.addEventListener("click", () => {
    loginFormContainer.classList.remove("active");
})

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})

videoBtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        document.querySelector(".controls .active").classList.remove('active');
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src = src
    })
})