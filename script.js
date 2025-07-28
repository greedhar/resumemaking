// Dark mode toggle with localStorage
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Download resume button
const downloadBtn = document.getElementById('download-resume');
downloadBtn.addEventListener('click', () => {
  // Replace 'resume.pdf' with your actual resume file
  window.open('resume.pdf', '_blank');
});

// Contact form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  formMessage.textContent = '';
  if (!nameInput.value.trim()) {
    valid = false;
    formMessage.textContent = 'Please enter your name.';
    nameInput.focus();
    return;
  }
  if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
    valid = false;
    formMessage.textContent = 'Please enter a valid email.';
    emailInput.focus();
    return;
  }
  if (!messageInput.value.trim()) {
    valid = false;
    formMessage.textContent = 'Please enter your message.';
    messageInput.focus();
    return;
  }
  if (valid) {
    formMessage.style.color = '#388e3c';
    formMessage.textContent = 'Message sent! (Demo only)';
    form.reset();
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.style.color = '';
    }, 3000);
  }
});

// Scroll-based animations using IntersectionObserver
const sections = document.querySelectorAll('main section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Optional: close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
} 