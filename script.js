// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update scroll indicator
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
});

// Tab switching
function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Intersection Observer for animations - Optimized
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother animations
            requestAnimationFrame(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translate3d(0, 20px, 0)';
                entry.target.classList.add('fade-in-up');
            });
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Observe elements for animation with initial hidden state
document.querySelectorAll('.project-card, .experience-item, .about-content').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0, 20px, 0)';
    el.style.transition = 'none'; // Prevent FOUC
    observer.observe(el);
});

// Dynamic background animation
const bgAnimation = document.querySelector('.bg-animation');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    bgAnimation.style.background = `
        radial-gradient(circle at ${20 + mouseX * 10}% ${50 + mouseY * 10}%, rgba(139, 115, 85, 0.1) 0%, transparent 50%),
        radial-gradient(circle at ${80 - mouseX * 10}% ${20 + mouseY * 10}%, rgba(196, 164, 132, 0.1) 0%, transparent 50%),
        radial-gradient(circle at ${40 + mouseX * 10}% ${80 - mouseY * 10}%, rgba(156, 163, 175, 0.1) 0%, transparent 50%)
    `;
});

// Typing effect for hero subtitle (optional enhancement)
const subtitle = document.querySelector('.hero-subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Enhanced scroll to section with offset for navbar
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const offsetTop = section.offsetTop - navbarHeight;
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Update navigation links to use custom scroll function
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

// Parallax effect for hero section (controlled to prevent overlap)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero');
    
    if (parallax && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const speed = Math.min(scrolled * 0.3, heroHeight * 0.2); // Limit the parallax movement
        
        // Only apply parallax if we're still in the hero section area
        if (scrolled < heroHeight) {
            parallax.style.transform = `translateY(${speed}px)`;
        } else {
            parallax.style.transform = `translateY(${heroHeight * 0.2}px)`;
        }
    }
});

// Add glowing cursor effect
const cursor = document.createElement('div');
cursor.className = 'cursor-glow';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(139, 115, 85, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Add hover effects for interactive elements
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'radial-gradient(circle, rgba(139, 115, 85, 0.5) 0%, transparent 70%)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'radial-gradient(circle, rgba(139, 115, 85, 0.3) 0%, transparent 70%)';
    });
});