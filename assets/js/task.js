let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelector("ul");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})
navlinks.addEventListener("click", function () {
    navlinks.classList.toggle("show");
    body.classList.remove("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
});


$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                // slidesToScroll: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                // slidesToScroll: 2,
            }
        }
    ]
});
$('.elipse-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
});
$('.review-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.prev',
    nextArrow: '.next',
});
$('.review-slider-2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.prev-2',
    nextArrow: '.next-2',
});
// backToTop
let topButton = document.getElementById("top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "flex";
    }
    else {
        topButton.style.display = "none";
    }
});

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("body-overflow-hidden")
}, 2000);
