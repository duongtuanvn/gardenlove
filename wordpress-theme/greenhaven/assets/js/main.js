/**
 * Green Haven Theme - Main JavaScript
 * @package GreenHaven
 */

(function() {
    'use strict';

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    
    const mobileToggle = document.querySelector('.gh-mobile-toggle');
    const mobileMenu = document.getElementById('gh-mobile-menu');
    const menuIcon = document.querySelector('.gh-menu-icon');
    const closeIcon = document.querySelector('.gh-close-icon');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            const isOpen = !mobileMenu.classList.contains('gh-hidden');
            
            if (isOpen) {
                mobileMenu.classList.add('gh-hidden');
                menuIcon.classList.remove('gh-hidden');
                closeIcon.classList.add('gh-hidden');
                mobileToggle.setAttribute('aria-expanded', 'false');
            } else {
                mobileMenu.classList.remove('gh-hidden');
                menuIcon.classList.add('gh-hidden');
                closeIcon.classList.remove('gh-hidden');
                mobileToggle.setAttribute('aria-expanded', 'true');
            }
        });
    }

    // ============================================
    // FAQ Accordion
    // ============================================
    
    const accordionItems = document.querySelectorAll('[data-accordion-item]');
    
    accordionItems.forEach(item => {
        const trigger = item.querySelector('.gh-accordion-trigger');
        
        if (trigger) {
            trigger.addEventListener('click', function() {
                const isOpen = item.classList.contains('is-open');
                
                // Close all other items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('is-open');
                        const otherTrigger = otherItem.querySelector('.gh-accordion-trigger');
                        if (otherTrigger) {
                            otherTrigger.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    item.classList.remove('is-open');
                    trigger.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('is-open');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // Header Scroll Effect
    // ============================================
    
    const header = document.getElementById('masthead');
    let lastScrollY = window.scrollY;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.boxShadow = 'var(--gh-shadow-soft)';
            } else {
                header.style.boxShadow = 'none';
            }
            
            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // ============================================
    // Lazy Load Images
    // ============================================
    
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('is-loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }

})();
