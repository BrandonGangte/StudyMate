/**
 * StudyMate - Modern JavaScript functionality
 * Enhanced user experience with smooth animations and interactions
 */

(function() {
    'use strict';

    // DOM elements
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initNavbar();
        initSmoothScrolling();
        initScrollAnimations();
        initActiveNavigation();
    });

    /**
     * Initialize navbar scroll behavior
     */
    function initNavbar() {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class
            if (scrollTop > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        }, { passive: true });
    }

    /**
     * Initialize smooth scrolling for navigation links
     */
    function initSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - navbar.offsetHeight;
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        const navbarCollapse = document.getElementById('navbarNav');
                        if (navbarCollapse.classList.contains('show')) {
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                            bsCollapse.hide();
                        }
                    }
                }
            });
        });
    }

    /**
     * Initialize scroll animations for elements
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.feature-card, .about-item');
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    /**
     * Initialize active navigation highlighting
     */
    function initActiveNavigation() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: `-${navbar.offsetHeight}px 0px 0px 0px`
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    updateActiveNavLink(id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    /**
     * Update active navigation link
     */
    function updateActiveNavLink(activeId) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Utility function to debounce function calls
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Add loading state to buttons
     */
    function addLoadingState(button) {
        button.classList.add('loading');
        button.disabled = true;
        
        setTimeout(() => {
            button.classList.remove('loading');
            button.disabled = false;
        }, 2000);
    }

    // Add click handlers for feature cards
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-outline-primary')) {
            e.preventDefault();
            addLoadingState(e.target);
            
            // Simulate navigation or action
            setTimeout(() => {
                console.log('Feature clicked:', e.target.closest('.feature-card').querySelector('h3').textContent);
                // Here you would typically navigate to the feature page
            }, 1000);
        }
    });

    // Add form validation if contact forms are added later
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Expose utilities to global scope if needed
    window.StudyMate = {
        debounce,
        validateEmail,
        addLoadingState
    };

    // Performance optimization: Preload critical images
    function preloadImages() {
        const criticalImages = [
            './assets/Images2/Notes.jpg',
            './assets/Images2/Lectures.jpg',
            './assets/Images2/Hot%20question.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Initialize image preloading
    preloadImages();

})();