// // Scroll to top functionality
// const scrollTop = document.getElementById("scrollTop")

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     scrollTop.style.display = "block"
//   } else {
//     scrollTop.style.display = "none"
//   }
// })

// scrollTop.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   })
// })

// Smooth scroll for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault()
//     const target = document.querySelector(this.getAttribute("href"))
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       })
//     }
//   })
// })

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  observer.observe(element)
})

// Add hover effect to member cards
document.querySelectorAll(".member").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
    this.style.transition = "transform 0.3s ease"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// window.onload = function () {
//   // Get the main element to calculate its dimensions
//   const main = document.querySelector('main');
//   const mainWidth = main.offsetWidth;
//   const mainHeight = main.offsetHeight;

//   // Get all feather images
//   const feathers = document.querySelectorAll('.feather-image');

//   feathers.forEach(feather => {
//       // Set random position for each feather within main's dimensions
//       const randomTop = Math.floor(Math.random() * (mainHeight - 50)) + "px"; // Subtracting 50 to avoid overflow
//       const randomLeft = Math.floor(Math.random() * (mainWidth - 50)) + "px"; // Subtracting 50 to avoid overflow
//       const randomZIndex = Math.floor(Math.random() * 1000); // Random z-index value

//       feather.style.top = randomTop;
//       feather.style.left = randomLeft;
//       feather.style.zIndex = randomZIndex;

//       // Optionally, adjust size randomly as well
//       const randomSize = Math.floor(Math.random() * 30) + 20; // Random size between 20px and 50px
//       feather.style.width = randomSize + "px";
//   });
// }