// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all feature items
document.querySelectorAll(".feature-item").forEach((item) => {
  observer.observe(item);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Add parallax effect to images
/*window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const images = document.querySelectorAll(".feature-image");

  images.forEach((img, index) => {
    const speed = 0.05;
    const yPos = -(scrolled * speed);
    img.style.transform = `translateY(${yPos}px)`;
  });
});*/

// Add hover effect to feature items
const featureItems = document.querySelectorAll(".feature-item");

featureItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Back to top button functionality
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = "translateY(0)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});

// Add active state to navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
  }
});
