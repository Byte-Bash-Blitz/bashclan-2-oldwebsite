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

// Menu overlay logic
function toggleMenu(open) {
  const overlay = document.getElementById('menuOverlay')
  if (!overlay) return
  const btn = document.querySelector('.menu-btn')
  if (open) {
    overlay.classList.add('open')
    overlay.setAttribute('aria-hidden', 'false')
    const content = overlay.querySelector('.menu-content')
    content?.setAttribute('data-open', 'true')
    // small delay so CSS can set initial state, then add reveal to animate items
    setTimeout(() => content?.classList.add('reveal'), 60)
    content?.focus()
    btn?.classList.add('open')
  } else {
    const content = overlay.querySelector('.menu-content')
    content?.classList.remove('reveal')
    content?.removeAttribute('data-open')
    overlay.classList.remove('open')
    overlay.setAttribute('aria-hidden', 'true')
    btn?.focus()
    btn?.classList.remove('open')
  }
}

// click handlers
document.addEventListener('click', (e) => {
  const target = e.target
  if (target.closest('.menu-btn')) toggleMenu(true)
  if (target.closest('.menu-close')) toggleMenu(false)
  if (target.closest('.menu-back')) {
    // close overlay first
    toggleMenu(false)
    // if there's a previous history entry, go back; otherwise navigate to home
    try {
      if (window.history.length > 1) {
        window.history.back()
      } else {
        window.location.href = 'index.html'
      }
    } catch (err) {
      window.location.href = 'index.html'
    }
  }
  if (target.matches('.menu-overlay')) toggleMenu(false)
})

// reveal tiles on load with a small stagger
document.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelector('.tiles')
  if (!tiles) return
  tiles.setAttribute('data-reveal', 'true')
  const items = Array.from(tiles.querySelectorAll('.tile'))
  items.forEach((item, i) => {
    setTimeout(() => item.classList.add('revealed'), 80 + i * 60)
  })
})

// keyboard: Escape to close and trap tab inside menu
document.addEventListener('keydown', (e) => {
  const overlay = document.getElementById('menuOverlay')
  if (!overlay || !overlay.classList.contains('open')) return
  if (e.key === 'Escape') {
    toggleMenu(false)
    return
  }
  if (e.key === 'Tab') {
    // keep focus inside menu
    const focusable = overlay.querySelectorAll('a, button')
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }
})
