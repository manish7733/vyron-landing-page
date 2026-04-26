// Modal functionality
const modal = document.getElementById('modal');
const requestAccessBtn = document.getElementById('requestAccessBtn');
const closeButton = document.querySelector('.close-button');

// Open modal when "Request Access" button is clicked
requestAccessBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert('Thank you for your interest! We will be in touch at ' + email);
        form.reset();
        modal.style.display = 'none';
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation on page load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transition = 'opacity 0.6s ease-in-out';
        }, index * 200);
    });
});