// ===== MOBILE NAVIGATION TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  
  if (!navToggle || !navbar) return;
  
  // FORCE reset menu to closed state on page load
  navbar.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  
  // Ensure only hamburger icon shows on load
  const icon = navToggle.querySelector('i');
  if (icon) {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
  
  // Toggle menu on button click
  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isOpen = navbar.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    
    // Change icon - ONLY ONE at a time
    if (icon) {
      if (isOpen) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
  
  // Close menu when clicking on ANY link
  const navLinks = navbar.querySelectorAll('nav a, .nav-btn');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && !navToggle.contains(e.target)) {
      navbar.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
  
  // Close menu when resizing to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900 && navbar.classList.contains('open')) {
      navbar.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
});

// ===== HIGHLIGHT ACTIVE PAGE IN NAVBAR =====
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll(".navbar nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
});

// ===== SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
  const animated = document.querySelectorAll(".slide-up, .fade-in");
  
  if (animated.length > 0) {
    window.addEventListener("scroll", function() {
      animated.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }
      });
    });
  }
});

// ===== FEATURE CARD HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.features .feature-card');
  
  if (cards.length > 0) {
    cards.forEach(card => {
      // Mouse hover
      card.addEventListener('mouseenter', function() {
        card.classList.add('hovered');
      });
      
      card.addEventListener('mouseleave', function() {
        card.classList.remove('hovered');
      });

      // Touch support
      card.addEventListener('touchstart', function(e) {
        cards.forEach(c => c.classList.remove('hovered'));
        card.classList.add('hovered');
      });
    });

    // Remove hover when tapping elsewhere
    document.addEventListener('touchstart', function(e) {
      if (!e.target.closest('.features .feature-card')) {
        cards.forEach(c => c.classList.remove('hovered'));
      }
    });
  }
});