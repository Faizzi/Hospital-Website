const navItems = document.querySelector("#nav__items");
const closeNavBtn = document.querySelector("#close__nav-btn");
const openNavBtn = document.querySelector("#open__nav-btn");

openNavBtn.addEventListener("click", () => {
    navItems.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
})

const closeNav = () => {
        navItems.style.display = "none";
        openNavBtn.style.display = "inline-block";
        closeNavBtn.style.display = "none";
}
closeNavBtn.addEventListener("click", closeNav);

//Close menu when menu or menu item is clicked
if (window.innerWidth < 1024) {
    document.querySelectorAll("#nav__items li a").forEach(navItems => {
        navItems.addEventListener("click", () => {
            closeNav();
        })
    })
}

//navbar changes when window scroll
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
})

//Testimonials Section (swipper js)//
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //Responsive Breakpionts
    breakpoints: {
        //when width is >=600
        0: {
            slidesPerView:1
        },
        600:{ 
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 3
        }
    }
});