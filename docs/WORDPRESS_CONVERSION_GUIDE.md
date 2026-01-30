# 🌿 Green Haven Nursery - React to WordPress/WooCommerce Conversion Guide

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Theme Architecture](#theme-architecture)
3. [Design System Conversion](#design-system-conversion)
4. [Component Mapping](#component-mapping)
5. [WooCommerce Integration](#woocommerce-integration)
6. [Template Files](#template-files)
7. [Installation Guide](#installation-guide)

---

## 🏗️ Project Overview

### Original React Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 6
- **State**: React Context (CartContext)
- **UI Library**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React

### Target WordPress Stack
- **Theme Type**: Hybrid Classic + Block Theme
- **E-commerce**: WooCommerce
- **Styling**: Tailwind CSS (compiled) + Custom CSS
- **JavaScript**: Vanilla JS / Alpine.js for interactivity

---

## 📁 Theme Architecture

### Recommended Theme Structure

```
/greenhaven-theme/
│
├── style.css                    # Theme declaration + compiled Tailwind
├── functions.php                # Theme setup, hooks, filters
├── index.php                    # Fallback template
├── front-page.php               # Homepage (Index.tsx)
├── page.php                     # Generic page template
├── single.php                   # Single post
├── single-product.php           # WooCommerce single product
├── archive-product.php          # WooCommerce shop/collections
├── search.php                   # Search results
├── 404.php                      # Not found page
├── header.php                   # Header.tsx
├── footer.php                   # Footer.tsx
├── screenshot.png               # Theme preview (1200x900)
├── theme.json                   # Block editor settings
│
├── /assets/
│   ├── /css/
│   │   ├── main.css             # Compiled Tailwind
│   │   └── woocommerce.css      # WooCommerce overrides
│   ├── /js/
│   │   ├── main.js              # Mobile menu, dropdowns
│   │   ├── cart.js              # AJAX cart functionality
│   │   └── product.js           # Product page interactions
│   ├── /images/
│   │   └── (copy from src/assets/)
│   └── /fonts/
│
├── /template-parts/
│   ├── /layout/
│   │   ├── announcement-bar.php
│   │   ├── navigation.php
│   │   └── breadcrumbs.php
│   ├── /sections/
│   │   ├── hero-section.php
│   │   ├── categories-section.php
│   │   ├── featured-products.php
│   │   ├── how-we-ship.php
│   │   ├── faq-section.php
│   │   └── trust-section.php
│   └── /components/
│       ├── product-card.php
│       ├── category-card.php
│       ├── trust-badge.php
│       └── social-proof.php
│
├── /inc/
│   ├── setup.php                # Theme setup
│   ├── enqueue.php              # Scripts & styles
│   ├── woocommerce.php          # WooCommerce customizations
│   ├── customizer.php           # Theme options
│   ├── widgets.php              # Custom widgets
│   ├── seo.php                  # Schema, meta tags
│   └── helpers.php              # Utility functions
│
└── /woocommerce/
    ├── archive-product.php
    ├── single-product.php
    ├── content-product.php
    ├── /cart/
    │   └── cart.php
    ├── /checkout/
    │   └── form-checkout.php
    └── /loop/
        └── loop-start.php
```

---

## 🎨 Design System Conversion

### Color Variables (index.css → style.css)

```css
/* style.css - Theme Declaration + CSS Variables */
/*
Theme Name: Green Haven Nursery
Theme URI: https://greenhaven-nursery.com
Author: Your Name
Description: A nature-inspired WooCommerce theme for plant nurseries
Version: 1.0.0
License: GPL v2 or later
Text Domain: greenhaven
WooCommerce: 8.0+
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 8.0
*/

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

:root {
    /* Nature-inspired palette from React */
    --gh-background: 45 30% 97%;
    --gh-foreground: 150 30% 15%;
    
    --gh-card: 45 25% 95%;
    --gh-card-foreground: 150 30% 15%;
    
    /* Deep forest green - primary brand */
    --gh-primary: 150 35% 27%;
    --gh-primary-foreground: 45 30% 97%;
    
    /* Sage green - secondary */
    --gh-secondary: 140 20% 42%;
    --gh-secondary-foreground: 45 30% 97%;
    
    /* Sand/cream - muted surfaces */
    --gh-muted: 35 25% 85%;
    --gh-muted-foreground: 150 15% 35%;
    
    /* Terracotta - accent/CTA */
    --gh-accent: 32 85% 44%;
    --gh-accent-foreground: 45 30% 97%;
    
    /* Earth brown */
    --gh-earth: 30 30% 40%;
    
    /* Borders */
    --gh-border: 35 20% 82%;
    
    /* Shadows */
    --gh-shadow-soft: 0 4px 20px -4px hsl(150 30% 15% / 0.1);
    --gh-shadow-card: 0 8px 30px -8px hsl(150 30% 15% / 0.12);
    --gh-shadow-elevated: 0 20px 50px -15px hsl(150 30% 15% / 0.2);
    
    /* Gradients */
    --gh-gradient-hero: linear-gradient(135deg, hsl(150 35% 20% / 0.85) 0%, hsl(150 30% 25% / 0.7) 100%);
    --gh-gradient-cta: linear-gradient(135deg, hsl(32 85% 44%) 0%, hsl(25 80% 50%) 100%);
    
    /* Border Radius */
    --gh-radius: 0.75rem;
    --gh-radius-lg: 1rem;
    --gh-radius-xl: 1.5rem;
    --gh-radius-2xl: 2rem;
}

/* Typography */
body {
    font-family: 'Inter', system-ui, sans-serif;
    background: hsl(var(--gh-background));
    color: hsl(var(--gh-foreground));
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 600;
    letter-spacing: -0.025em;
}
```

### Tailwind to Semantic CSS Classes

```css
/* Component Classes */

.gh-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.gh-btn-primary {
    background: hsl(var(--gh-primary));
    color: hsl(var(--gh-primary-foreground));
}

.gh-btn-primary:hover {
    background: hsl(var(--gh-primary) / 0.9);
}

.gh-btn-hero {
    background: hsl(var(--gh-accent));
    color: hsl(var(--gh-accent-foreground));
    font-weight: 600;
    border-radius: 9999px;
    box-shadow: var(--gh-shadow-card);
    padding: 0.875rem 1.5rem;
}

.gh-btn-hero:hover {
    transform: scale(1.05);
    box-shadow: var(--gh-shadow-elevated);
}

.gh-card {
    background: hsl(var(--gh-card));
    border-radius: var(--gh-radius-lg);
    border: 1px solid hsl(var(--gh-border));
    box-shadow: var(--gh-shadow-soft);
}

.gh-section {
    padding: 4rem 0;
}

@media (min-width: 768px) {
    .gh-section {
        padding: 6rem 0;
    }
}

@media (min-width: 1024px) {
    .gh-section {
        padding: 8rem 0;
    }
}

.gh-container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (min-width: 640px) {
    .gh-container {
        padding: 0 1.5rem;
    }
}

@media (min-width: 1024px) {
    .gh-container {
        padding: 0 2rem;
    }
}

/* Category Card */
.gh-category-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--gh-radius-lg);
    aspect-ratio: 4/5;
    cursor: pointer;
}

.gh-category-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2) 50%, transparent);
    transition: opacity 0.3s;
}

.gh-category-card:hover::after {
    opacity: 0.8;
}

.gh-category-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gh-category-card:hover img {
    transform: scale(1.1);
}

/* Trust Badge */
.gh-trust-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    border-radius: var(--gh-radius-lg);
    background: hsl(var(--gh-card));
    box-shadow: var(--gh-shadow-soft);
    transition: all 0.3s ease;
}

.gh-trust-badge:hover {
    transform: translateY(-4px);
    box-shadow: var(--gh-shadow-card);
}

/* Hero Overlay */
.gh-hero-overlay {
    background: var(--gh-gradient-hero);
}

/* Animation */
@keyframes gh-fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.gh-animate-fade-in-up {
    animation: gh-fade-in-up 0.6s ease-out forwards;
}

.gh-delay-100 { animation-delay: 100ms; }
.gh-delay-200 { animation-delay: 200ms; }
.gh-delay-300 { animation-delay: 300ms; }
```

---

## 🔄 Component Mapping

| React Component | WordPress File | Notes |
|----------------|----------------|-------|
| `Header.tsx` | `header.php` | Mobile menu via JS |
| `Footer.tsx` | `footer.php` | Use wp_nav_menu() |
| `HeroSection.tsx` | `template-parts/sections/hero-section.php` | ACF or Customizer |
| `CategoriesSection.tsx` | `template-parts/sections/categories-section.php` | Product categories |
| `FeaturedProducts.tsx` | `template-parts/sections/featured-products.php` | WooCommerce query |
| `HowWeShipSection.tsx` | `template-parts/sections/how-we-ship.php` | Static or ACF |
| `HomeFAQSection.tsx` | `template-parts/sections/faq-section.php` | ACF Repeater |
| `TrustSection.tsx` | `template-parts/sections/trust-section.php` | Static content |
| `ProductDetail.tsx` | `woocommerce/single-product.php` | WooCommerce hooks |
| `Collections.tsx` | `woocommerce/archive-product.php` | Shop page |
| `Cart.tsx` | `woocommerce/cart/cart.php` | WooCommerce template |
| Button component | CSS classes | `.gh-btn-*` |
| Card component | CSS classes | `.gh-card` |

---

## 📄 Template Files

### header.php

```php
<?php
/**
 * Header Template
 * Converted from: src/components/layout/Header.tsx
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="gh-header sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
    <!-- Announcement Bar -->
    <div class="gh-announcement-bar bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        🌿 Free Shipping on Orders $75+ | 100% Live Arrival Guarantee
    </div>

    <nav class="gh-container">
        <div class="flex items-center justify-between h-16 lg:h-20">
            <!-- Logo -->
            <a href="<?php echo home_url(); ?>" class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                </div>
                <div class="hidden sm:block">
                    <span class="text-xl font-display font-bold text-foreground">
                        <?php bloginfo('name'); ?>
                    </span>
                    <span class="text-xs block text-muted-foreground -mt-1">
                        <?php bloginfo('description'); ?>
                    </span>
                </div>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center gap-8">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'flex items-center gap-8',
                    'fallback_cb' => false,
                    'walker' => new GH_Nav_Walker()
                ));
                ?>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-3">
                <!-- Search -->
                <a href="<?php echo home_url('/search'); ?>" class="hidden sm:flex gh-btn gh-btn-ghost">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </a>

                <!-- Cart -->
                <a href="<?php echo wc_get_cart_url(); ?>" class="gh-cart-toggle relative">
                    <span class="gh-btn gh-btn-ghost">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4"/>
                        </svg>
                        <?php if (WC()->cart->get_cart_contents_count() > 0) : ?>
                        <span class="gh-cart-count absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                            <?php echo WC()->cart->get_cart_contents_count(); ?>
                        </span>
                        <?php endif; ?>
                    </span>
                </a>

                <!-- Shop Now CTA -->
                <a href="<?php echo wc_get_page_permalink('shop'); ?>" class="hidden sm:flex gh-btn gh-btn-hero">
                    Shop Now
                </a>

                <!-- Mobile Menu Toggle -->
                <button type="button" class="lg:hidden gh-btn gh-btn-ghost gh-mobile-toggle" aria-label="Toggle Menu">
                    <svg class="w-6 h-6 gh-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <svg class="w-6 h-6 gh-close-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="lg:hidden gh-mobile-menu hidden py-4 border-t border-border">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'gh-mobile-nav',
                'fallback_cb' => false,
            ));
            ?>
        </div>
    </nav>
</header>
```

### footer.php

```php
<?php
/**
 * Footer Template
 * Converted from: src/components/layout/Footer.tsx
 */
?>

<footer class="bg-primary text-primary-foreground">
    <!-- Main Footer -->
    <div class="gh-container py-12 lg:py-16">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            
            <!-- Brand -->
            <div class="col-span-2 md:col-span-4 lg:col-span-1">
                <a href="<?php echo home_url(); ?>" class="flex items-center gap-2 mb-4">
                    <div class="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                    </div>
                    <div>
                        <span class="text-xl font-display font-bold"><?php bloginfo('name'); ?></span>
                        <span class="text-xs block text-primary-foreground/70 -mt-1"><?php bloginfo('description'); ?></span>
                    </div>
                </a>
                <p class="text-sm text-primary-foreground/70 mb-4">
                    <?php echo get_theme_mod('footer_description', 'Family-owned nursery delivering healthy, happy plants to homes across America since 2015.'); ?>
                </p>
                
                <!-- Social Links -->
                <div class="flex gap-3">
                    <?php
                    $social_links = array(
                        'facebook' => get_theme_mod('social_facebook'),
                        'instagram' => get_theme_mod('social_instagram'),
                        'youtube' => get_theme_mod('social_youtube'),
                        'twitter' => get_theme_mod('social_twitter'),
                    );
                    foreach ($social_links as $platform => $url) :
                        if ($url) :
                    ?>
                    <a href="<?php echo esc_url($url); ?>" class="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" target="_blank" rel="noopener">
                        <span class="sr-only"><?php echo ucfirst($platform); ?></span>
                        <!-- SVG icon here -->
                    </a>
                    <?php 
                        endif;
                    endforeach; 
                    ?>
                </div>
            </div>

            <!-- Shop Menu -->
            <div>
                <h4 class="font-semibold mb-4">Shop</h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-shop',
                    'container' => false,
                    'menu_class' => 'space-y-2.5',
                    'fallback_cb' => false,
                ));
                ?>
            </div>

            <!-- Help Menu -->
            <div>
                <h4 class="font-semibold mb-4">Help</h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-help',
                    'container' => false,
                    'menu_class' => 'space-y-2.5',
                    'fallback_cb' => false,
                ));
                ?>
            </div>

            <!-- Learn Menu -->
            <div>
                <h4 class="font-semibold mb-4">Learn</h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-learn',
                    'container' => false,
                    'menu_class' => 'space-y-2.5',
                    'fallback_cb' => false,
                ));
                ?>
            </div>

            <!-- Contact Info -->
            <div class="col-span-2 md:col-span-1">
                <h4 class="font-semibold mb-4">Contact Us</h4>
                <ul class="space-y-3 text-sm text-primary-foreground/70">
                    <li class="flex items-start gap-2">
                        <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <div>
                            <span class="block font-medium text-primary-foreground"><?php echo get_theme_mod('company_name', 'Green Haven Nursery LLC'); ?></span>
                            <span class="block"><?php echo get_theme_mod('address_line1', '1234 Garden Way'); ?></span>
                            <span class="block"><?php echo get_theme_mod('address_line2', 'Portland, OR 97201'); ?></span>
                        </div>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <a href="tel:<?php echo get_theme_mod('phone', '+15551234567'); ?>" class="hover:text-primary-foreground transition-colors">
                            <?php echo get_theme_mod('phone_display', '(555) 123-4567'); ?>
                        </a>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <a href="mailto:<?php echo get_theme_mod('email', 'support@greenhaven.com'); ?>" class="hover:text-primary-foreground transition-colors">
                            <?php echo get_theme_mod('email', 'support@greenhaven.com'); ?>
                        </a>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div>
                            <span class="block">Mon - Fri: 8AM - 6PM PST</span>
                            <span class="block">Sat: 9AM - 4PM PST</span>
                            <span class="block">Sun: Closed</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-primary-foreground/10">
        <div class="gh-container py-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
                <p>© <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="<?php echo get_privacy_policy_url(); ?>" class="hover:text-primary-foreground transition-colors">Privacy Policy</a>
                    <a href="<?php echo home_url('/terms'); ?>" class="hover:text-primary-foreground transition-colors">Terms of Service</a>
                    <a href="<?php echo home_url('/accessibility'); ?>" class="hover:text-primary-foreground transition-colors">Accessibility</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

### front-page.php (Homepage)

```php
<?php
/**
 * Front Page Template
 * Converted from: src/pages/Index.tsx
 */

get_header();
?>

<main class="flex-1">
    <?php 
    // Hero Section
    get_template_part('template-parts/sections/hero', 'section');
    
    // Categories Section
    get_template_part('template-parts/sections/categories', 'section');
    
    // Featured Products
    get_template_part('template-parts/sections/featured', 'products');
    
    // How We Ship
    get_template_part('template-parts/sections/how-we', 'ship');
    
    // FAQ Section
    get_template_part('template-parts/sections/faq', 'section');
    ?>
</main>

<?php
get_footer();
```

### template-parts/sections/hero-section.php

```php
<?php
/**
 * Hero Section Template
 * Converted from: src/components/home/HeroSection.tsx
 */

$hero_image = get_theme_mod('hero_image', get_template_directory_uri() . '/assets/images/hero-greenhouse.jpg');
$hero_title = get_theme_mod('hero_title', 'Healthy Plants Delivered to Your Door');
$hero_description = get_theme_mod('hero_description', 'From our greenhouse to your home — expertly grown plants shipped with care to thrive in your space.');
?>

<section class="relative min-h-[85vh] flex items-center">
    <!-- Background Image -->
    <div class="absolute inset-0">
        <img
            src="<?php echo esc_url($hero_image); ?>"
            alt="<?php echo esc_attr(get_bloginfo('name')); ?> greenhouse filled with beautiful plants"
            class="w-full h-full object-cover"
            loading="eager"
        >
        <div class="gh-hero-overlay absolute inset-0"></div>
    </div>

    <!-- Content -->
    <div class="gh-container relative z-10 py-20">
        <div class="max-w-2xl">
            <span class="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground text-sm font-medium px-4 py-2 rounded-full mb-6 gh-animate-fade-in-up">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
                Family-Owned Since 2015
            </span>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 gh-animate-fade-in-up gh-delay-100">
                <?php echo esc_html($hero_title); ?>
            </h1>
            
            <p class="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-lg gh-animate-fade-in-up gh-delay-200">
                <?php echo esc_html($hero_description); ?>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 gh-animate-fade-in-up gh-delay-300">
                <a href="<?php echo wc_get_page_permalink('shop'); ?>" class="gh-btn gh-btn-hero text-lg px-8 py-4">
                    Shop Plants
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
                <a href="<?php echo home_url('/guarantee'); ?>" class="gh-btn border-2 border-primary-foreground/80 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold rounded-full text-lg px-8 py-4">
                    Our Guarantee
                </a>
            </div>
        </div>
    </div>

    <!-- Trust Bar -->
    <div class="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm">
        <div class="gh-container py-4">
            <div class="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-4">
                <?php
                $trust_items = array(
                    array('icon' => 'shield', 'text' => '100% Live Arrival Guarantee'),
                    array('icon' => 'truck', 'text' => 'Expert Packaging & Fast Shipping'),
                    array('icon' => 'leaf', 'text' => 'Grown with Care in the USA'),
                    array('icon' => 'refresh', 'text' => '30-Day Money-Back Guarantee'),
                );
                foreach ($trust_items as $item) :
                ?>
                <div class="flex items-center gap-2 text-sm font-medium text-foreground">
                    <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <?php echo gh_get_icon($item['icon'], 'w-4 h-4 text-primary'); ?>
                    </div>
                    <span><?php echo esc_html($item['text']); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
```

### template-parts/sections/categories-section.php

```php
<?php
/**
 * Categories Section
 * Converted from: src/components/home/CategoriesSection.tsx
 */

$categories = get_terms(array(
    'taxonomy' => 'product_cat',
    'hide_empty' => true,
    'parent' => 0, // Top-level only
    'number' => 6,
));
?>

<section class="gh-section">
    <div class="gh-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
                <h2 class="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                    Shop by Category
                </h2>
                <p class="text-lg text-muted-foreground">
                    Find the perfect plants for your space
                </p>
            </div>
            <a href="<?php echo wc_get_page_permalink('shop'); ?>" class="text-primary font-medium hover:underline underline-offset-4">
                View all categories →
            </a>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <?php foreach ($categories as $category) : 
                $thumbnail_id = get_term_meta($category->term_id, 'thumbnail_id', true);
                $image = $thumbnail_id ? wp_get_attachment_url($thumbnail_id) : wc_placeholder_img_src();
            ?>
            <a href="<?php echo get_term_link($category); ?>" class="gh-category-card group">
                <img
                    src="<?php echo esc_url($image); ?>"
                    alt="<?php echo esc_attr($category->name); ?> collection"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                >
                <div class="absolute inset-0 z-10 flex flex-col justify-end p-4">
                    <h3 class="text-lg font-semibold text-white">
                        <?php echo esc_html($category->name); ?>
                    </h3>
                    <p class="text-sm text-white/80">
                        <?php echo $category->count; ?>+ varieties
                    </p>
                </div>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>
```

---

## 🛒 WooCommerce Integration

### inc/woocommerce.php

```php
<?php
/**
 * WooCommerce Customizations
 */

// Declare WooCommerce support
function gh_woocommerce_support() {
    add_theme_support('woocommerce', array(
        'thumbnail_image_width' => 400,
        'single_image_width' => 600,
        'product_grid' => array(
            'default_rows' => 4,
            'min_rows' => 2,
            'max_rows' => 8,
            'default_columns' => 4,
            'min_columns' => 2,
            'max_columns' => 6,
        ),
    ));
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
}
add_action('after_setup_theme', 'gh_woocommerce_support');

// Remove default WooCommerce styles
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

// Custom product card
remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open');
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close');
remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash');
remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail');
remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title');
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating');
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price');
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');

// Use custom product card
add_action('woocommerce_before_shop_loop_item', 'gh_product_card_start');
add_action('woocommerce_after_shop_loop_item', 'gh_product_card_end');

function gh_product_card_start() {
    get_template_part('template-parts/components/product', 'card');
}

function gh_product_card_end() {
    // Close is handled in template part
}

// AJAX Add to Cart
function gh_ajax_add_to_cart() {
    $product_id = absint($_POST['product_id']);
    $quantity = empty($_POST['quantity']) ? 1 : wc_stock_amount($_POST['quantity']);
    $variation_id = absint($_POST['variation_id']);
    
    $passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $product_id, $quantity);
    
    if ($passed_validation && WC()->cart->add_to_cart($product_id, $quantity, $variation_id)) {
        do_action('woocommerce_ajax_added_to_cart', $product_id);
        
        wp_send_json(array(
            'success' => true,
            'cart_count' => WC()->cart->get_cart_contents_count(),
            'cart_total' => WC()->cart->get_cart_total(),
            'message' => 'Product added to cart!'
        ));
    } else {
        wp_send_json(array(
            'success' => false,
            'message' => 'Error adding product to cart'
        ));
    }
    
    wp_die();
}
add_action('wp_ajax_gh_add_to_cart', 'gh_ajax_add_to_cart');
add_action('wp_ajax_nopriv_gh_add_to_cart', 'gh_ajax_add_to_cart');
```

### template-parts/components/product-card.php

```php
<?php
/**
 * Product Card Component
 * Converted from: FeaturedProducts.tsx product cards
 */

global $product;
$is_on_sale = $product->is_on_sale();
$average_rating = $product->get_average_rating();
?>

<div class="gh-product-card group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300">
    <a href="<?php echo get_permalink(); ?>" class="block relative aspect-square overflow-hidden">
        <!-- Product Image -->
        <?php if (has_post_thumbnail()) : ?>
            <img 
                src="<?php echo get_the_post_thumbnail_url(null, 'woocommerce_thumbnail'); ?>"
                alt="<?php echo esc_attr($product->get_name()); ?>"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            >
        <?php else : ?>
            <img 
                src="<?php echo wc_placeholder_img_src(); ?>"
                alt="Placeholder"
                class="w-full h-full object-cover"
            >
        <?php endif; ?>
        
        <!-- Badges -->
        <div class="absolute top-3 left-3 flex flex-col gap-2">
            <?php if ($is_on_sale) : ?>
                <span class="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                    SALE
                </span>
            <?php endif; ?>
            
            <?php if ($product->is_featured()) : ?>
                <span class="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    BESTSELLER
                </span>
            <?php endif; ?>
        </div>
        
        <!-- Quick Add Button -->
        <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button 
                type="button"
                class="w-full gh-btn gh-btn-primary gh-quick-add"
                data-product-id="<?php echo $product->get_id(); ?>"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                Quick Add
            </button>
        </div>
    </a>
    
    <!-- Product Info -->
    <div class="p-4">
        <!-- Rating -->
        <?php if ($average_rating > 0) : ?>
            <div class="flex items-center gap-1 mb-2">
                <div class="flex items-center text-accent">
                    <?php for ($i = 1; $i <= 5; $i++) : ?>
                        <svg class="w-3.5 h-3.5 <?php echo $i <= $average_rating ? 'fill-current' : 'fill-muted'; ?>" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                    <?php endfor; ?>
                </div>
                <span class="text-xs text-muted-foreground">
                    (<?php echo $product->get_review_count(); ?>)
                </span>
            </div>
        <?php endif; ?>
        
        <!-- Title -->
        <h3 class="font-medium text-foreground mb-2 line-clamp-2">
            <a href="<?php echo get_permalink(); ?>" class="hover:text-primary transition-colors">
                <?php echo $product->get_name(); ?>
            </a>
        </h3>
        
        <!-- Price -->
        <div class="flex items-center gap-2">
            <?php if ($is_on_sale) : ?>
                <span class="text-lg font-bold text-primary">
                    <?php echo wc_price($product->get_sale_price()); ?>
                </span>
                <span class="text-sm text-muted-foreground line-through">
                    <?php echo wc_price($product->get_regular_price()); ?>
                </span>
            <?php else : ?>
                <span class="text-lg font-bold text-primary">
                    <?php echo $product->get_price_html(); ?>
                </span>
            <?php endif; ?>
        </div>
    </div>
</div>
```

---

## ⚙️ Setup Files

### functions.php

```php
<?php
/**
 * Green Haven Theme Functions
 */

define('GH_THEME_VERSION', '1.0.0');
define('GH_THEME_DIR', get_template_directory());
define('GH_THEME_URI', get_template_directory_uri());

// Theme Setup
require_once GH_THEME_DIR . '/inc/setup.php';
require_once GH_THEME_DIR . '/inc/enqueue.php';
require_once GH_THEME_DIR . '/inc/helpers.php';
require_once GH_THEME_DIR . '/inc/customizer.php';

// WooCommerce
if (class_exists('WooCommerce')) {
    require_once GH_THEME_DIR . '/inc/woocommerce.php';
}

// SEO
require_once GH_THEME_DIR . '/inc/seo.php';
```

### inc/setup.php

```php
<?php
/**
 * Theme Setup
 */

function gh_theme_setup() {
    // Text domain
    load_theme_textdomain('greenhaven', GH_THEME_DIR . '/languages');
    
    // Theme supports
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('wp-block-styles');
    add_theme_support('editor-styles');
    
    // Image sizes
    add_image_size('product-card', 400, 400, true);
    add_image_size('product-large', 800, 800, true);
    add_image_size('hero', 1920, 1080, true);
    
    // Menus
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'greenhaven'),
        'footer-shop' => __('Footer - Shop', 'greenhaven'),
        'footer-help' => __('Footer - Help', 'greenhaven'),
        'footer-learn' => __('Footer - Learn', 'greenhaven'),
    ));
}
add_action('after_setup_theme', 'gh_theme_setup');
```

### inc/enqueue.php

```php
<?php
/**
 * Enqueue Scripts and Styles
 */

function gh_enqueue_assets() {
    // Main stylesheet
    wp_enqueue_style(
        'greenhaven-style',
        GH_THEME_URI . '/assets/css/main.css',
        array(),
        GH_THEME_VERSION
    );
    
    // WooCommerce styles
    if (class_exists('WooCommerce')) {
        wp_enqueue_style(
            'greenhaven-woo',
            GH_THEME_URI . '/assets/css/woocommerce.css',
            array('greenhaven-style'),
            GH_THEME_VERSION
        );
    }
    
    // Main script
    wp_enqueue_script(
        'greenhaven-main',
        GH_THEME_URI . '/assets/js/main.js',
        array(),
        GH_THEME_VERSION,
        true
    );
    
    // Cart AJAX
    if (class_exists('WooCommerce')) {
        wp_enqueue_script(
            'greenhaven-cart',
            GH_THEME_URI . '/assets/js/cart.js',
            array('jquery'),
            GH_THEME_VERSION,
            true
        );
        
        wp_localize_script('greenhaven-cart', 'ghCart', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('gh_cart_nonce'),
        ));
    }
}
add_action('wp_enqueue_scripts', 'gh_enqueue_assets');

// Preload fonts
function gh_preload_fonts() {
    ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <?php
}
add_action('wp_head', 'gh_preload_fonts', 1);
```

---

## 🚀 Installation Guide

### Step 1: Export React Assets
```bash
# Copy images from React project
cp -r src/assets/* /path/to/wp-theme/assets/images/
```

### Step 2: Create Theme Folder
```bash
# In WordPress themes directory
mkdir wp-content/themes/greenhaven-theme
```

### Step 3: Install Required Plugins
- WooCommerce
- Advanced Custom Fields (optional, for hero customization)
- Yoast SEO (recommended)

### Step 4: Upload Theme
1. Zip the theme folder
2. Go to WordPress Admin → Appearance → Themes
3. Click "Add New" → "Upload Theme"
4. Activate the theme

### Step 5: Configure WooCommerce
1. Run WooCommerce setup wizard
2. Import products
3. Configure shipping zones
4. Set up payment gateways

### Step 6: Set Up Menus
1. Go to Appearance → Menus
2. Create menus for:
   - Primary Navigation
   - Footer - Shop
   - Footer - Help
   - Footer - Learn

### Step 7: Configure Theme Options
1. Go to Appearance → Customize
2. Set hero image, contact info, social links
3. Save and publish

---

## 📚 Additional Resources

- [WooCommerce Template Structure](https://woocommerce.com/document/template-structure/)
- [WordPress Theme Handbook](https://developer.wordpress.org/themes/)
- [Tailwind CSS in WordPress](https://developer.wordpress.org/themes/advanced-topics/css-preprocessors/#tailwind)

---

## 📝 Notes

1. **State Management**: React Context (CartContext) → WooCommerce Session + AJAX
2. **Routing**: React Router → WordPress Rewrite Rules + Template Hierarchy
3. **Icons**: Lucide React → Inline SVG or icon font
4. **Animations**: Tailwind animations → CSS animations in stylesheet

---

*Generated for Green Haven Nursery React → WordPress conversion*
