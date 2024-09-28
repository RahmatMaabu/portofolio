// Animasi untuk konten saat halaman dimuat// script.js
// script.js

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('a'); // Select all nav link items

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the nav links when a nav item is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close the nav links when clicking outside of the sidebar
document.addEventListener('click', (event) => {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnToggle = menuIcon.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle) {
        navLinks.classList.remove('active'); // Close the sidebar if clicked outside
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    content.style.transform = 'translateY(0)';

    // Menambahkan animasi pada section saat scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});
