// main.js - JavaScript for ChatWave website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const authButtons = document.getElementById('authButtons');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            authButtons.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all feature cards and testimonials for animation
    document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
        observer.observe(card);
    });
    
    // Simulate typing effect for hero heading
    const heroHeading = document.querySelector('.hero-content h1');
    if (heroHeading) {
        const originalText = heroHeading.textContent;
        heroHeading.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                heroHeading.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
    
    // Mock login/signup functionality
    const loginBtn = document.querySelector('.auth-buttons .btn-outline');
    const signupBtn = document.querySelector('.auth-buttons .btn-primary');
    const ctaBtn = document.querySelector('.cta-btn');
    
    function showAuthModal(type) {
        // This would normally open a modal, but for demo purposes we'll use alert
        alert(`${type} functionality would open here in a real application!`);
        
        // In a real app, this would be replaced with modal code:
        // const modal = document.getElementById('authModal');
        // modal.classList.add('active');
        // document.getElementById('authType').textContent = type;
    }
    
    if (loginBtn) loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('Login');
    });
    
    if (signupBtn) signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('Sign Up');
    });
    
    if (ctaBtn) ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal('Sign Up');
    });
    
    // Add a "Back to top" button that appears when scrolling down
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.backgroundColor = 'var(--primary-color)';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.width = '40px';
    backToTopBtn.style.height = '40px';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    backToTopBtn.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Example of loading user preferences from localStorage
    function loadUserPreferences() {
        // Check if user has saved theme preference
        const savedTheme = localStorage.getItem('chatwave-theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
        }
    }
    
    loadUserPreferences();
});
