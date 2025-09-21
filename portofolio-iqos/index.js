// index.js
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000, 
    once: true      
  });
});
 const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });