// Navbar active link

const activePage = window.location.pathname;
let allNavLinks = document.querySelectorAll(".nav-link");

allNavLinks.forEach((link) => {
  if (window.location.pathname === "/") {
    allNavLinks[0].classList.add("active-link");
    allNavLinks[5].classList.add("active-link");
  } else if (link.href.includes(`${activePage}`)) {
    link.classList.add("active-link");
  }
});

// Hamburger menu
let hamBtn = document.getElementById("ham-btn");
let hamNav = document.getElementById("ham-nav");

hamBtn.addEventListener("click", function () {
  if (hamNav.style.height === "250px") {
    hamNav.style.height = "0px";
  } else {
    hamNav.style.height = "250px";
  }
});

// Scroll to top button

let scrollTopBtn = document.querySelector("#scrollTop");
const scrollContainer = () => {
  return document.documentElement || document.body;
};

scrollTopBtn.addEventListener("click", () => {
  document.documentElement.scrollIntoView({
    behavior:"smooth",
  });
  
});

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > 100) {
    scrollTopBtn.style.opacity = "100%";
  } else {
    scrollTopBtn.style.opacity = "0%";
  }
});

// Image Carousel

// const buttons = document.querySelectorAll("[data-carousel-button]");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//     const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

//     const activeSlide = slides.querySelector("[data-active]");
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//     if(newIndex < 0) newIndex = slides.children.length - 1;
//     if(newIndex >= slides.children.length) newIndex = 0;

//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   });
// });
