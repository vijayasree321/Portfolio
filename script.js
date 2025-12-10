// subtle hover pulse on social buttons (accessibility-friendly)
document.querySelectorAll('.social-btn').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=> btn.animate([
    { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0,0,0,0)' },
    { transform: 'scale(1.04)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }
  ], { duration: 260, easing: 'ease-out', fill: 'forwards' }));
  btn.addEventListener('mouseleave', ()=> btn.animate([{ transform: 'scale(1.04)' }, { transform: 'scale(1)' }], { duration: 220 }));
});
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (!navToggle || !navbar) return;

  // toggle open/close on button click
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
    navToggle.classList.toggle("is-active");
  });

  // close menu when clicking a link (for smooth mobile UX)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("nav-open");
      navToggle.classList.remove("is-active");
    });
  });
});
