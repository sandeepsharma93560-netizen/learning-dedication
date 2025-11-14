// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu if open
        document.querySelector('.mobile-menu').classList.remove('open');
    });
});

// ===== STICKY HEADER & SHADOW ON SCROLL =====
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Active link highlight
    document.querySelectorAll('header nav a').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.createElement('div');
backToTop.id = 'back-to-top';
backToTop.innerHTML = '&#8679;';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// ===== HERO IMAGE SLIDER =====
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-content img');
const showSlide = () => {
    slides.forEach((img, i) => img.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlide, 5000); // change slide every 5 seconds
};
if(slides.length > 0) showSlide();

// ===== MOBILE MENU TOGGLE =====
const navContainer = document.querySelector('header nav');
const menuBtn = document.createElement('div');
menuBtn.classList.add('mobile-menu-btn');
menuBtn.innerHTML = '&#9776;'; // hamburger icon
header.appendChild(menuBtn);

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.appendChild(navContainer.cloneNode(true));
header.appendChild(mobileMenu);

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.hero-content, .about, .blog, .contact');
const revealOnScroll = () => {
    const windowBottom = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowBottom - 100) {
            el.classList.add('reveal');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
