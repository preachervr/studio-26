// Active States Logic
const links = document.querySelectorAll(".navLinks a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  const linkAttribute = link.getAttribute("href");

  if (linkAttribute === currentPage) {
    link.classList.remove("text-softlinen-100");
    link.classList.add("text-cappuccinoblend-400");
    
    link.classList.remove("after:scale-y-0");
    link.classList.add("after:scale-y-100");
  }
});

// Hamburger Menu Toggle

document.addEventListener("DOMContentLoaded", () => {

    const btnMenu = document.getElementById("btnMenu");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = mobileMenu.querySelectorAll("a");

    function openMenu() {
      mobileMenu.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
      mobileMenu.classList.add("translate-x-0", "opacity-100", "pointer-events-auto");
      document.body.style.overflow = "hidden";
    }

    function closeMenuFunc() {
      mobileMenu.classList.remove("translate-x-0", "opacity-100", "pointer-events-auto");
      mobileMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none");
      document.body.style.overflow = "";
    }

    if (btnMenu) btnMenu.addEventListener("click", openMenu);
    if (closeMenu) closeMenu.addEventListener("click", closeMenuFunc);

    menuLinks.forEach(link => {
      link.addEventListener("click", closeMenuFunc);
    });
});

// Demo Mode: Unfinished Links Alert
const unfinishedLinks = document.querySelectorAll('a[href$=".html"]:not([href="index.html"])');

unfinishedLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Această secțiune va fi disponibilă după aprobarea proiectului."); 
    });
});

// Current Year

const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();