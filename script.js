// NAVBAR - sombra al hacer scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ANIMACIONES AL HACER SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .about-content, .contact-form').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// FORMULARIO
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const mensaje = document.createElement('p');
  mensaje.textContent = '✓ Reservation confirmed! We will contact you shortly.';
  mensaje.style.color = '#8b5e3c';
  mensaje.style.fontSize = '16px';
  mensaje.style.textAlign = 'center';
  mensaje.style.marginTop = '16px';

  form.after(mensaje);
  form.reset();

  setTimeout(() => {
    mensaje.remove();
  }, 4000);
});