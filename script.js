// Smooth scroll behavior for browsers that don't support CSS smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Smooth scroll for CTA buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  // Animate progress bars when in view
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
  
    const options = {
      threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const progress = target.getAttribute("data-progress");
          target.style.width = progress + "%";
          observer.unobserve(target);
        }
      });
    }, options);
  
    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  });
  // Optional: Boost glow on hover dynamically
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 0 30px rgba(0, 255, 242, 1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 0 15px rgba(0, 255, 242, 0.4)';
    });
  });
  // Glow effect when services section comes into view
document.addEventListener("scroll", () => {
    const serviceCards = document.querySelectorAll(".service-card");
    const triggerPoint = window.innerHeight * 0.85;
  
    serviceCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerPoint) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });
  
  // Initial state
  document.querySelectorAll(".service-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease-out";
  });
  // Simple form submit handler (demo only)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });

  
