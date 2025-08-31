// Typed.js initialization for the hero text animation
var typed = new Typed(".text", {
  strings: ["Web Developer", "Mobile Developer", "IT Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// NEW --- Scroll Reveal initialization
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// NEW --- Animating elements with Scroll Reveal
ScrollReveal().reveal(".home-content, .section-title", { origin: "top" });
ScrollReveal().reveal(
  ".home-sci, .about-img, .skills-container, .portfolio-container, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-text", { origin: "left" });

// NEW --- Active link on scroll functionality
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
