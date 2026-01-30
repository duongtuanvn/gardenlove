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

## 📦 Single Product Template (ProductDetail.tsx)

### woocommerce/single-product.php

```php
<?php
/**
 * Single Product Template
 * Converted from: src/pages/ProductDetail.tsx
 * Features: Social proof, variant selector, care guide, reviews
 */

defined('ABSPATH') || exit;

get_header();

global $product;

if (!$product || !is_a($product, 'WC_Product')) {
    wc_get_template('single-product/product-not-found.php');
    return;
}

// Get product data
$product_id = $product->get_id();
$images = $product->get_gallery_image_ids();
array_unshift($images, $product->get_image_id()); // Add main image first
$average_rating = $product->get_average_rating();
$review_count = $product->get_review_count();
$stock_quantity = $product->get_stock_quantity();
$is_on_sale = $product->is_on_sale();
$is_variable = $product->is_type('variable');

// Calculate delivery date
$delivery_date = date('l, M j', strtotime('+10 days'));
?>

<div class="min-h-screen bg-background">

    <!-- Breadcrumb -->
    <div class="bg-muted/30 py-3 border-b border-border">
        <div class="gh-container">
            <nav class="flex items-center gap-2 text-sm flex-wrap">
                <a href="<?php echo home_url(); ?>" class="text-muted-foreground hover:text-primary transition-colors">
                    Home
                </a>
                <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <a href="<?php echo wc_get_page_permalink('shop'); ?>" class="text-muted-foreground hover:text-primary transition-colors">
                    Shop
                </a>
                <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <?php
                $terms = get_the_terms($product_id, 'product_cat');
                if ($terms && !is_wp_error($terms)) :
                    $primary_term = $terms[0];
                ?>
                <a href="<?php echo get_term_link($primary_term); ?>" class="text-muted-foreground hover:text-primary transition-colors">
                    <?php echo esc_html($primary_term->name); ?>
                </a>
                <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <?php endif; ?>
                <span class="text-foreground font-medium"><?php echo $product->get_name(); ?></span>
            </nav>
        </div>
    </div>

    <!-- SECTION 1: Product Overview -->
    <section class="gh-container py-8 md:py-12">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            <!-- Image Gallery -->
            <div class="space-y-4">
                <div class="relative w-full rounded-2xl overflow-hidden bg-muted">
                    <div class="aspect-[4/3] sm:aspect-square">
                        <img
                            id="gh-main-image"
                            src="<?php echo wp_get_attachment_image_url($images[0], 'large'); ?>"
                            alt="<?php echo esc_attr($product->get_name()); ?>"
                            class="w-full h-full object-cover"
                        >
                    </div>
                    
                    <!-- Sale Badge -->
                    <?php if ($is_on_sale && $product->get_regular_price()) : 
                        $discount = round((1 - $product->get_sale_price() / $product->get_regular_price()) * 100);
                    ?>
                    <div class="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span class="text-xs sm:text-sm font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-accent text-accent-foreground shadow-sm">
                            -<?php echo $discount; ?>%
                        </span>
                    </div>
                    <?php endif; ?>
                    
                    <!-- Wishlist Button -->
                    <button class="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors gh-wishlist-btn" data-product-id="<?php echo $product_id; ?>">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                    </button>
                </div>

                <!-- Thumbnail Gallery -->
                <div class="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                    <?php foreach ($images as $index => $image_id) : 
                        $thumb_url = wp_get_attachment_image_url($image_id, 'thumbnail');
                        $full_url = wp_get_attachment_image_url($image_id, 'large');
                    ?>
                    <button
                        class="gh-thumb-btn flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all <?php echo $index === 0 ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-border'; ?>"
                        data-full-image="<?php echo esc_url($full_url); ?>"
                    >
                        <img
                            src="<?php echo esc_url($thumb_url); ?>"
                            alt="<?php echo esc_attr($product->get_name()); ?> view <?php echo $index + 1; ?>"
                            class="w-full h-full object-cover"
                        >
                    </button>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Product Info -->
            <div class="space-y-6 min-w-0 overflow-hidden">
                <div>
                    <!-- Category -->
                    <?php if ($terms && !is_wp_error($terms)) : ?>
                    <p class="text-sm text-primary font-medium mb-2">
                        <?php echo esc_html($terms[0]->name); ?>
                    </p>
                    <?php endif; ?>
                    
                    <!-- Title -->
                    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 leading-tight whitespace-normal break-words">
                        <?php echo $product->get_name(); ?>
                    </h1>
                    
                    <!-- Rating -->
                    <div class="flex items-center gap-3">
                        <div class="flex items-center gap-1">
                            <?php for ($i = 1; $i <= 5; $i++) : ?>
                            <svg class="w-5 h-5 <?php echo $i <= $average_rating ? 'fill-accent text-accent' : 'fill-muted text-muted'; ?>" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <?php endfor; ?>
                        </div>
                        <span class="font-semibold"><?php echo number_format($average_rating, 1); ?></span>
                        <span class="text-muted-foreground">(<?php echo $review_count; ?> reviews)</span>
                    </div>

                    <!-- ⭐ Social Proof & Urgency - From React -->
                    <?php 
                    // Generate random but consistent numbers based on product ID
                    $viewing_now = (($product_id % 8) + 3); // 3-10 people
                    $added_to_cart = (($product_id % 4) + 1); // 1-4 people
                    $stock_left = $stock_quantity ?: (($product_id % 6) + 2); // 2-7 items
                    ?>
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mt-3">
                        <!-- People Viewing Now -->
                        <div class="flex items-center gap-1.5 text-muted-foreground">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span><span class="font-medium text-foreground"><?php echo $viewing_now; ?> people</span> viewing now</span>
                        </div>
                        
                        <!-- Added to Cart -->
                        <div class="flex items-center gap-1.5 text-muted-foreground">
                            <svg class="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            <span><span class="font-medium text-foreground"><?php echo $added_to_cart; ?></span> added to cart</span>
                        </div>
                        
                        <!-- Stock Warning -->
                        <div class="flex items-center gap-1.5 text-accent">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                            </svg>
                            <span class="font-medium">Only <?php echo $stock_left; ?> left in stock!</span>
                        </div>
                    </div>
                </div>

                <!-- Price with Sale styling -->
                <div class="flex items-center gap-3 flex-wrap">
                    <?php if ($is_on_sale) : ?>
                        <span class="text-3xl font-bold text-accent">
                            <?php echo wc_price($product->get_sale_price()); ?>
                        </span>
                        <span class="text-xl text-muted-foreground line-through">
                            <?php echo wc_price($product->get_regular_price()); ?>
                        </span>
                        <span class="text-sm font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                            Save <?php echo $discount; ?>%
                        </span>
                    <?php else : ?>
                        <span class="text-3xl font-bold text-foreground">
                            <?php echo $product->get_price_html(); ?>
                        </span>
                    <?php endif; ?>
                </div>

                <!-- ⭐ Variant Selector - From React -->
                <?php if ($is_variable) : 
                    $available_variations = $product->get_available_variations();
                    $attributes = $product->get_variation_attributes();
                ?>
                <form class="variations_form cart" action="<?php echo esc_url(apply_filters('woocommerce_add_to_cart_form_action', $product->get_permalink())); ?>" method="post" enctype="multipart/form-data" data-product_id="<?php echo $product_id; ?>">
                    <div class="w-full min-w-0 overflow-hidden space-y-6">
                        <?php foreach ($attributes as $attribute_name => $options) : 
                            $attribute_label = wc_attribute_label($attribute_name);
                        ?>
                        <div class="min-w-0">
                            <label class="text-sm font-medium text-foreground mb-3 block"><?php echo esc_html($attribute_label); ?></label>
                            <div class="flex flex-col sm:flex-row sm:flex-wrap gap-2">
                                <?php foreach ($options as $option) : ?>
                                <button
                                    type="button"
                                    class="gh-variant-btn w-full sm:w-auto px-4 py-2.5 rounded-full border-2 text-sm font-medium transition-all text-left sm:text-center border-border hover:border-primary/50 text-foreground bg-background"
                                    data-attribute="<?php echo esc_attr($attribute_name); ?>"
                                    data-value="<?php echo esc_attr($option); ?>"
                                >
                                    <?php echo esc_html($option); ?>
                                </button>
                                <?php endforeach; ?>
                            </div>
                            <input type="hidden" name="attribute_<?php echo sanitize_title($attribute_name); ?>" value="">
                        </div>
                        <?php endforeach; ?>
                    </div>
                    
                    <input type="hidden" name="variation_id" value="" class="variation_id">
                    <input type="hidden" name="product_id" value="<?php echo $product_id; ?>">
                    <input type="hidden" name="add-to-cart" value="<?php echo $product_id; ?>">
                    
                    <!-- Quantity & Add to Cart -->
                    <div class="space-y-3 mt-6">
                        <div class="flex items-center gap-4">
                            <div class="flex items-center border border-border rounded-lg">
                                <button type="button" class="gh-qty-minus w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-muted transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                                    </svg>
                                </button>
                                <input type="number" name="quantity" value="1" min="1" class="gh-qty-input w-10 sm:w-12 text-center font-medium border-0 bg-transparent focus:outline-none">
                                <button type="button" class="gh-qty-plus w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-muted transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button type="submit" class="gh-btn gh-btn-primary w-full h-14 text-base font-semibold">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                Add to Cart
                            </button>
                            <button type="button" class="gh-buy-now gh-btn w-full h-14 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </form>
                <?php else : ?>
                <!-- Simple Product Add to Cart -->
                <form class="cart" action="<?php echo esc_url(apply_filters('woocommerce_add_to_cart_form_action', $product->get_permalink())); ?>" method="post" enctype="multipart/form-data">
                    <div class="space-y-3">
                        <div class="flex items-center gap-4">
                            <div class="flex items-center border border-border rounded-lg">
                                <button type="button" class="gh-qty-minus w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-muted transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                                    </svg>
                                </button>
                                <input type="number" name="quantity" value="1" min="1" class="gh-qty-input w-10 sm:w-12 text-center font-medium border-0 bg-transparent focus:outline-none">
                                <button type="button" class="gh-qty-plus w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-muted transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <input type="hidden" name="add-to-cart" value="<?php echo $product_id; ?>">

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button type="submit" class="gh-btn gh-btn-primary w-full h-14 text-base font-semibold <?php echo !$product->is_in_stock() ? 'opacity-50 cursor-not-allowed' : ''; ?>" <?php echo !$product->is_in_stock() ? 'disabled' : ''; ?>>
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                <?php echo $product->is_in_stock() ? 'Add to Cart' : 'Out of Stock'; ?>
                            </button>
                            <button type="button" class="gh-buy-now gh-btn w-full h-14 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground <?php echo !$product->is_in_stock() ? 'opacity-50 cursor-not-allowed' : ''; ?>" <?php echo !$product->is_in_stock() ? 'disabled' : ''; ?>>
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </form>
                <?php endif; ?>

                <!-- Plant Care Info -->
                <?php 
                // Get custom fields for plant care (can be set via ACF or custom meta)
                $usda_zone = get_post_meta($product_id, '_gh_usda_zone', true) ?: '9-11';
                $sunlight = get_post_meta($product_id, '_gh_sunlight', true) ?: 'Full sun to partial shade';
                $soil_type = get_post_meta($product_id, '_gh_soil_type', true) ?: 'Well-draining soil';
                $planting = get_post_meta($product_id, '_gh_planting_time', true) ?: 'Spring or Fall';
                ?>
                <div class="border-t border-border pt-6">
                    <h3 class="text-sm font-semibold text-foreground mb-4">Plant Care</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div>
                                <p class="text-xs text-muted-foreground">USDA Zone</p>
                                <p class="text-sm font-medium"><?php echo esc_html($usda_zone); ?></p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                            <div>
                                <p class="text-xs text-muted-foreground">Sunlight</p>
                                <p class="text-sm font-medium"><?php echo esc_html($sunlight); ?></p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                            <div>
                                <p class="text-xs text-muted-foreground">Soil Type</p>
                                <p class="text-sm font-medium"><?php echo esc_html($soil_type); ?></p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <div>
                                <p class="text-xs text-muted-foreground">Planting</p>
                                <p class="text-sm font-medium"><?php echo esc_html($planting); ?></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Shipping & Trust Badges -->
                <div class="bg-muted/30 rounded-2xl p-5 space-y-4">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                        </svg>
                        <div>
                            <p class="font-medium text-foreground">Free Shipping on $75+</p>
                            <p class="text-sm text-muted-foreground">Est. delivery: <?php echo $delivery_date; ?></p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                        <div>
                            <p class="font-medium text-foreground">30-Day Returns</p>
                            <p class="text-sm text-muted-foreground">Hassle-free money back guarantee</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                        <div>
                            <p class="font-medium text-foreground">100% Live Arrival Guarantee</p>
                            <p class="text-sm text-muted-foreground">We guarantee healthy plants</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 2: Product Description & Features -->
    <section class="bg-muted/30 py-12">
        <div class="gh-container">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                <!-- Description -->
                <div>
                    <h2 class="text-2xl font-display font-bold text-foreground mb-4">About This Plant</h2>
                    <div class="prose prose-green max-w-none text-muted-foreground">
                        <?php echo wpautop($product->get_description()); ?>
                    </div>
                </div>
                
                <!-- Features -->
                <?php 
                $features = get_post_meta($product_id, '_gh_features', true);
                if (!$features) {
                    $features = array(
                        'Grown in our family greenhouse',
                        'Carefully packaged for safe shipping',
                        'Includes care guide',
                        'Expert support available'
                    );
                }
                ?>
                <div>
                    <h2 class="text-2xl font-display font-bold text-foreground mb-4">Why You'll Love It</h2>
                    <ul class="space-y-3">
                        <?php foreach ($features as $feature) : ?>
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span class="text-foreground"><?php echo esc_html($feature); ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3: Customer Reviews -->
    <section class="gh-section">
        <div class="gh-container">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <h2 class="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">Customer Reviews</h2>
                    <div class="flex items-center gap-3">
                        <div class="flex items-center">
                            <?php for ($i = 1; $i <= 5; $i++) : ?>
                            <svg class="w-5 h-5 <?php echo $i <= $average_rating ? 'fill-accent text-accent' : 'fill-muted text-muted'; ?>" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <?php endfor; ?>
                        </div>
                        <span class="font-semibold"><?php echo number_format($average_rating, 1); ?> out of 5</span>
                        <span class="text-muted-foreground">(<?php echo $review_count; ?> reviews)</span>
                    </div>
                </div>
                <button class="gh-btn gh-btn-primary">
                    Write a Review
                </button>
            </div>

            <!-- Reviews List -->
            <?php
            $comments = get_comments(array(
                'post_id' => $product_id,
                'status' => 'approve',
                'type' => 'review',
                'number' => 5
            ));
            
            if ($comments) : ?>
            <div class="space-y-6">
                <?php foreach ($comments as $comment) : 
                    $rating = get_comment_meta($comment->comment_ID, 'rating', true);
                ?>
                <div class="bg-card rounded-2xl p-6 shadow-soft">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="font-semibold text-foreground"><?php echo esc_html($comment->comment_author); ?></span>
                                <span class="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Verified
                                </span>
                            </div>
                            <div class="flex items-center gap-1">
                                <?php for ($i = 1; $i <= 5; $i++) : ?>
                                <svg class="w-4 h-4 <?php echo $i <= $rating ? 'fill-accent text-accent' : 'fill-muted text-muted'; ?>" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                </svg>
                                <?php endfor; ?>
                            </div>
                        </div>
                        <span class="text-sm text-muted-foreground"><?php echo date('M j, Y', strtotime($comment->comment_date)); ?></span>
                    </div>
                    <p class="text-foreground"><?php echo esc_html($comment->comment_content); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
            <?php else : ?>
            <div class="text-center py-12 bg-card rounded-2xl">
                <p class="text-muted-foreground mb-4">Be the first to review this product!</p>
                <button class="gh-btn gh-btn-primary">Write a Review</button>
            </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- SECTION 4: Related Products -->
    <?php
    $related_ids = wc_get_related_products($product_id, 4);
    if ($related_ids) :
    ?>
    <section class="bg-muted/30 py-12">
        <div class="gh-container">
            <h2 class="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">You May Also Like</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <?php
                foreach ($related_ids as $related_id) {
                    $post_object = get_post($related_id);
                    setup_postdata($GLOBALS['post'] =& $post_object);
                    wc_get_template_part('content', 'product');
                }
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </section>
    <?php endif; ?>

</div>

<?php get_footer(); ?>
```

### assets/js/product.js

```javascript
/**
 * Product Page JavaScript
 * Handles: Image gallery, variant selection, quantity, AJAX cart
 */

(function() {
    'use strict';

    // Image Gallery
    const mainImage = document.getElementById('gh-main-image');
    const thumbButtons = document.querySelectorAll('.gh-thumb-btn');
    
    thumbButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const fullImage = this.dataset.fullImage;
            if (mainImage && fullImage) {
                mainImage.src = fullImage;
            }
            
            // Update active state
            thumbButtons.forEach(b => {
                b.classList.remove('border-primary', 'ring-2', 'ring-primary/20');
                b.classList.add('border-transparent');
            });
            this.classList.remove('border-transparent');
            this.classList.add('border-primary', 'ring-2', 'ring-primary/20');
        });
    });

    // Variant Selector
    const variantButtons = document.querySelectorAll('.gh-variant-btn');
    
    variantButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const attribute = this.dataset.attribute;
            const value = this.dataset.value;
            
            // Update hidden input
            const input = document.querySelector(`input[name="attribute_${attribute.toLowerCase().replace(' ', '-')}"]`);
            if (input) {
                input.value = value;
            }
            
            // Update active state for this attribute group
            const siblings = document.querySelectorAll(`.gh-variant-btn[data-attribute="${attribute}"]`);
            siblings.forEach(s => {
                s.classList.remove('border-primary', 'bg-primary/5', 'text-primary');
                s.classList.add('border-border', 'text-foreground');
            });
            this.classList.remove('border-border', 'text-foreground');
            this.classList.add('border-primary', 'bg-primary/5', 'text-primary');
            
            // Trigger WooCommerce variation change
            if (typeof jQuery !== 'undefined') {
                jQuery('.variations_form').trigger('check_variations');
            }
        });
    });

    // Quantity Controls
    const qtyMinus = document.querySelectorAll('.gh-qty-minus');
    const qtyPlus = document.querySelectorAll('.gh-qty-plus');
    
    qtyMinus.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.gh-qty-input');
            if (input && parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
    });
    
    qtyPlus.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.gh-qty-input');
            if (input) {
                input.value = parseInt(input.value) + 1;
            }
        });
    });

    // Buy Now Button - Add to cart and redirect
    const buyNowButtons = document.querySelectorAll('.gh-buy-now');
    
    buyNowButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const form = this.closest('form');
            if (form) {
                // Create a hidden input to indicate buy now
                const buyNowInput = document.createElement('input');
                buyNowInput.type = 'hidden';
                buyNowInput.name = 'gh_buy_now';
                buyNowInput.value = '1';
                form.appendChild(buyNowInput);
                form.submit();
            }
        });
    });

    // Social Proof - Randomize numbers periodically (optional)
    function updateSocialProof() {
        const viewingEl = document.querySelector('[data-social="viewing"]');
        const cartEl = document.querySelector('[data-social="cart"]');
        
        if (viewingEl) {
            const base = parseInt(viewingEl.dataset.base) || 5;
            const variation = Math.floor(Math.random() * 3) - 1; // -1 to +1
            viewingEl.textContent = Math.max(2, base + variation);
        }
        
        if (cartEl) {
            const base = parseInt(cartEl.dataset.base) || 2;
            const variation = Math.random() > 0.7 ? 1 : 0;
            cartEl.textContent = Math.max(1, base + variation);
        }
    }
    
    // Update social proof every 30 seconds
    // setInterval(updateSocialProof, 30000);

})();
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

## 📜 Policy Page Templates

All policy pages share a consistent hero section design with decorative backgrounds and structured content layout.

### page-privacy-policy.php

```php
<?php
/**
 * Template Name: Privacy Policy
 * Converted from: src/pages/PrivacyPolicy.tsx
 */

get_header();
?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="gh-policy-hero">
        <div class="gh-policy-hero__bg"></div>
        <div class="gh-container gh-relative gh-z-10">
            <div class="gh-max-w-3xl gh-mx-auto gh-text-center">
                <div class="gh-inline-flex gh-items-center gh-gap-2 gh-bg-primary-10 gh-text-primary gh-px-4 gh-py-2 gh-rounded-full gh-mb-6">
                    <?php echo gh_get_icon('shield', 'w-4 h-4'); ?>
                    <span class="gh-text-sm gh-font-medium"><?php esc_html_e('Your Data is Protected', 'greenhaven'); ?></span>
                </div>
                <h1 class="gh-text-4xl md:gh-text-5xl gh-font-display gh-font-bold gh-text-foreground gh-mb-6">
                    <?php the_title(); ?>
                </h1>
                <p class="gh-text-lg gh-text-muted-foreground">
                    <?php esc_html_e('How we collect, use, and protect your personal information.', 'greenhaven'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="gh-py-8 md:gh-py-12">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto gh-prose">
                
                <!-- Effective Date Box -->
                <div class="gh-bg-primary-5 gh-border gh-border-primary-20 gh-rounded-xl gh-p-6 gh-mb-8">
                    <p class="gh-text-sm gh-text-muted-foreground">
                        <strong class="gh-text-foreground"><?php esc_html_e('Effective Date:', 'greenhaven'); ?></strong> <?php echo esc_html(get_theme_mod('gh_privacy_effective_date', 'January 1, 2025')); ?><br>
                        <strong class="gh-text-foreground"><?php esc_html_e('Last Updated:', 'greenhaven'); ?></strong> <?php echo get_the_modified_date(); ?>
                    </p>
                </div>

                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('Green Haven Nursery LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('1. Information We Collect', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-mb-4"><?php esc_html_e('We collect information you provide directly to us, including:', 'greenhaven'); ?></p>
                <ul class="gh-list">
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Contact Information:', 'greenhaven'); ?></strong> <?php esc_html_e('Name, email address, phone number, shipping and billing address', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Payment Information:', 'greenhaven'); ?></strong> <?php esc_html_e('Credit card details, billing address (processed securely by our payment provider)', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Account Information:', 'greenhaven'); ?></strong> <?php esc_html_e('Username, password, order history', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Communications:', 'greenhaven'); ?></strong> <?php esc_html_e('Emails, customer service inquiries, reviews', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('2. How We Use Your Information', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-mb-4"><?php esc_html_e('We use the information we collect to:', 'greenhaven'); ?></p>
                <ul class="gh-list">
                    <li><?php esc_html_e('Process and fulfill your orders', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Send order confirmations, shipping updates, and tracking information', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Respond to customer service inquiries', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Send marketing emails (with your consent)', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Improve our website and customer experience', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Prevent fraud and protect our business', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Comply with legal obligations', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('3. Cookies and Analytics', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-mb-4"><?php esc_html_e('We use cookies and similar tracking technologies to:', 'greenhaven'); ?></p>
                <ul class="gh-list">
                    <li><?php esc_html_e('Remember your preferences and shopping cart', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Analyze website traffic (Google Analytics)', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Deliver targeted advertising (Meta Pixel, Google Ads)', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Improve website functionality', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('4. Information Sharing', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-mb-4"><?php esc_html_e('We may share your information with:', 'greenhaven'); ?></p>
                <ul class="gh-list">
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Payment Processors:', 'greenhaven'); ?></strong> <?php esc_html_e('To process transactions securely (e.g., Stripe, PayPal)', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Shipping Carriers:', 'greenhaven'); ?></strong> <?php esc_html_e('To deliver your orders (USPS, UPS, FedEx)', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Email Service Providers:', 'greenhaven'); ?></strong> <?php esc_html_e('To send transactional and marketing emails', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Analytics Providers:', 'greenhaven'); ?></strong> <?php esc_html_e('To analyze website usage', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Legal Authorities:', 'greenhaven'); ?></strong> <?php esc_html_e('When required by law or to protect our rights', 'greenhaven'); ?></li>
                </ul>
                <p class="gh-text-muted-foreground gh-mt-4"><?php esc_html_e('We do not sell your personal information to third parties.', 'greenhaven'); ?></p>

                <h2 class="gh-section-heading"><?php esc_html_e('5. Data Retention', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Order information is typically retained for 7 years for tax and legal purposes.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('6. Your Rights and Choices', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-mb-4"><?php esc_html_e('You have the right to:', 'greenhaven'); ?></p>
                <ul class="gh-list">
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Access:', 'greenhaven'); ?></strong> <?php esc_html_e('Request a copy of your personal information', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Correct:', 'greenhaven'); ?></strong> <?php esc_html_e('Update inaccurate information', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Delete:', 'greenhaven'); ?></strong> <?php esc_html_e('Request deletion of your data (subject to legal requirements)', 'greenhaven'); ?></li>
                    <li><strong class="gh-text-foreground"><?php esc_html_e('Opt-out:', 'greenhaven'); ?></strong> <?php esc_html_e('Unsubscribe from marketing emails at any time', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('7. Data Security', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted using SSL technology and processed by PCI-compliant payment processors.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('8. Children\'s Privacy', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('9. Changes to This Policy', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.', 'greenhaven'); ?>
                </p>

                <!-- Contact Box -->
                <?php get_template_part('template-parts/components/policy', 'contact', array(
                    'title' => __('Contact Us', 'greenhaven'),
                    'description' => __('For privacy-related questions or to exercise your rights:', 'greenhaven'),
                    'email' => 'privacy@greenhaven-nursery.com'
                )); ?>

            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
```

### page-terms-of-service.php

```php
<?php
/**
 * Template Name: Terms of Service
 * Converted from: src/pages/TermsOfService.tsx
 */

get_header();
?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="gh-policy-hero">
        <div class="gh-policy-hero__bg"></div>
        <div class="gh-container gh-relative gh-z-10">
            <div class="gh-max-w-3xl gh-mx-auto gh-text-center">
                <div class="gh-inline-flex gh-items-center gh-gap-2 gh-bg-primary-10 gh-text-primary gh-px-4 gh-py-2 gh-rounded-full gh-mb-6">
                    <?php echo gh_get_icon('file-text', 'w-4 h-4'); ?>
                    <span class="gh-text-sm gh-font-medium"><?php esc_html_e('Legal Terms', 'greenhaven'); ?></span>
                </div>
                <h1 class="gh-text-4xl md:gh-text-5xl gh-font-display gh-font-bold gh-text-foreground gh-mb-6">
                    <?php the_title(); ?>
                </h1>
                <p class="gh-text-lg gh-text-muted-foreground">
                    <?php esc_html_e('Please read these terms carefully before using our website or making a purchase.', 'greenhaven'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="gh-py-8 md:gh-py-12">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto gh-prose">
                
                <div class="gh-bg-primary-5 gh-border gh-border-primary-20 gh-rounded-xl gh-p-6 gh-mb-8">
                    <p class="gh-text-sm gh-text-muted-foreground">
                        <strong class="gh-text-foreground"><?php esc_html_e('Effective Date:', 'greenhaven'); ?></strong> January 1, 2025<br>
                        <strong class="gh-text-foreground"><?php esc_html_e('Last Updated:', 'greenhaven'); ?></strong> <?php echo get_the_modified_date(); ?>
                    </p>
                </div>

                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('Welcome to Green Haven Nursery. These Terms of Service ("Terms") govern your use of our website and purchases. By accessing our website or placing an order, you agree to be bound by these Terms.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('1. General Terms', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('Green Haven Nursery LLC ("we," "us," "our") operates this website. By using our website, you represent that you are at least 18 years old or have parental consent, and that you have the legal capacity to enter into these Terms.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('2. Products and Availability', 'greenhaven'); ?></h2>
                <ul class="gh-list">
                    <li><?php esc_html_e('All products are subject to availability. We reserve the right to limit quantities.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Product images are for illustration purposes. Live plants may vary in size, shape, and color due to natural variation and seasonal factors.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('We make every effort to display accurate colors, but monitor settings may affect how colors appear.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('We reserve the right to discontinue any product at any time without notice.', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('3. Pricing and Taxes', 'greenhaven'); ?></h2>
                <ul class="gh-list">
                    <li><?php esc_html_e('All prices are listed in US Dollars (USD).', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Prices are subject to change without notice.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Sales tax will be applied where required by law and calculated at checkout.', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('4. Orders and Payment', 'greenhaven'); ?></h2>
                <ul class="gh-list">
                    <li><?php esc_html_e('By placing an order, you are making an offer to purchase. We reserve the right to accept or decline any order.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Payment is processed at the time of order.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('You can cancel or modify your order within 2 hours of placing it by contacting us.', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('5. Shipping and Delivery', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-mb-2">
                    <?php printf(
                        esc_html__('Please review our %s page for complete details.', 'greenhaven'),
                        '<a href="' . esc_url(home_url('/shipping')) . '" class="gh-text-primary hover:gh-underline">' . esc_html__('Shipping Information', 'greenhaven') . '</a>'
                    ); ?>
                </p>
                <ul class="gh-list">
                    <li><?php esc_html_e('We ship to the contiguous 48 United States only.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Risk of loss passes to you upon delivery to the carrier.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('We are not responsible for delays caused by carriers, weather, or customs.', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('6. Returns, Refunds, and Guarantee', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-mb-2">
                    <?php printf(
                        esc_html__('Please review our %s and %s pages for complete details.', 'greenhaven'),
                        '<a href="' . esc_url(home_url('/returns')) . '" class="gh-text-primary hover:gh-underline">' . esc_html__('Returns & Refunds', 'greenhaven') . '</a>',
                        '<a href="' . esc_url(home_url('/guarantee')) . '" class="gh-text-primary hover:gh-underline">' . esc_html__('Live Arrival Guarantee', 'greenhaven') . '</a>'
                    ); ?>
                </p>

                <!-- Product Disclaimer Box -->
                <div class="gh-bg-accent-10 gh-border gh-border-accent-20 gh-rounded-lg gh-p-4 gh-my-4">
                    <p class="gh-text-sm gh-text-muted-foreground">
                        <strong class="gh-text-foreground"><?php esc_html_e('Live Plant Variation:', 'greenhaven'); ?></strong> 
                        <?php esc_html_e('Live plants are natural products. Size, shape, color, and bloom stage may vary from photos due to seasonality, growing conditions, and natural variation. This is not considered a defect.', 'greenhaven'); ?>
                    </p>
                </div>

                <h2 class="gh-section-heading"><?php esc_html_e('7. Intellectual Property', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('All content on this website—including text, images, logos, and graphics—is owned by Green Haven Nursery LLC and protected by copyright and trademark laws. You may not copy, reproduce, distribute, or create derivative works without our written permission.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('8. Limitation of Liability', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground gh-uppercase gh-text-sm">
                    <?php esc_html_e('TO THE FULLEST EXTENT PERMITTED BY LAW, GREEN HAVEN NURSERY LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR PRODUCTS.', 'greenhaven'); ?>
                </p>

                <h2 class="gh-section-heading"><?php esc_html_e('9. Dispute Resolution', 'greenhaven'); ?></h2>
                <ul class="gh-list">
                    <li><?php esc_html_e('These Terms are governed by the laws of the State of Oregon.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('Any disputes shall be resolved through binding arbitration in Portland, Oregon.', 'greenhaven'); ?></li>
                    <li><?php esc_html_e('You waive any right to participate in class action lawsuits.', 'greenhaven'); ?></li>
                </ul>

                <h2 class="gh-section-heading"><?php esc_html_e('10. Changes to Terms', 'greenhaven'); ?></h2>
                <p class="gh-text-muted-foreground">
                    <?php esc_html_e('We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance.', 'greenhaven'); ?>
                </p>

                <!-- Contact Box -->
                <?php get_template_part('template-parts/components/policy', 'contact', array(
                    'title' => __('Contact Us', 'greenhaven'),
                    'description' => __('Questions about these Terms? Contact us:', 'greenhaven'),
                    'email' => 'support@greenhaven-nursery.com'
                )); ?>

            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
```

### page-returns-refunds.php

```php
<?php
/**
 * Template Name: Returns & Refunds
 * Converted from: src/pages/ReturnsRefunds.tsx
 */

get_header();
?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="gh-policy-hero">
        <div class="gh-policy-hero__bg"></div>
        <div class="gh-container gh-relative gh-z-10">
            <div class="gh-max-w-3xl gh-mx-auto gh-text-center">
                <div class="gh-inline-flex gh-items-center gh-gap-2 gh-bg-primary-10 gh-text-primary gh-px-4 gh-py-2 gh-rounded-full gh-mb-6">
                    <?php echo gh_get_icon('rotate-ccw', 'w-4 h-4'); ?>
                    <span class="gh-text-sm gh-font-medium"><?php esc_html_e('Easy Returns', 'greenhaven'); ?></span>
                </div>
                <h1 class="gh-text-4xl md:gh-text-5xl gh-font-display gh-font-bold gh-text-foreground gh-mb-6">
                    <?php the_title(); ?>
                </h1>
                <p class="gh-text-lg gh-text-muted-foreground">
                    <?php esc_html_e('Our policies for returns, refunds, and exchanges. We want you to be completely satisfied.', 'greenhaven'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Summary Box -->
    <section class="gh-py-8">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto">
                <div class="gh-bg-primary-5 gh-border gh-border-primary-20 gh-rounded-xl gh-p-6">
                    <h2 class="gh-text-lg gh-font-semibold gh-text-primary gh-mb-4 gh-flex gh-items-center gh-gap-2">
                        <?php echo gh_get_icon('check-circle', 'w-5 h-5'); ?>
                        <?php esc_html_e('Return & Refund Summary', 'greenhaven'); ?>
                    </h2>
                    <div class="gh-grid sm:gh-grid-cols-2 gh-gap-4 gh-text-sm">
                        <div>
                            <p class="gh-font-medium gh-text-foreground gh-mb-1"><?php esc_html_e('Non-Live Items (pots, tools, accessories):', 'greenhaven'); ?></p>
                            <ul class="gh-text-muted-foreground gh-space-y-1">
                                <li>• <?php esc_html_e('Return window: 30 days', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Condition: Unused, original packaging', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Return shipping: Customer pays', 'greenhaven'); ?></li>
                            </ul>
                        </div>
                        <div>
                            <p class="gh-font-medium gh-text-foreground gh-mb-1"><?php esc_html_e('Live Plants:', 'greenhaven'); ?></p>
                            <ul class="gh-text-muted-foreground gh-space-y-1">
                                <li>• <?php printf(esc_html__('See %s', 'greenhaven'), '<a href="' . esc_url(home_url('/guarantee')) . '" class="gh-text-primary hover:gh-underline">' . esc_html__('Live Arrival Guarantee', 'greenhaven') . '</a>'); ?></li>
                                <li>• <?php esc_html_e('Claim window: 48 hours from delivery', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Resolution: Replacement or refund', 'greenhaven'); ?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="gh-mt-4 gh-pt-4 gh-border-t gh-border-primary-10 gh-grid sm:gh-grid-cols-2 gh-gap-4 gh-text-sm">
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Refund Method:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('Original payment method', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Processing Time:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('5–7 business days', 'greenhaven'); ?></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="gh-py-8 md:gh-py-12">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto gh-space-y-10">
                
                <!-- Eligibility -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4 gh-flex gh-items-center gh-gap-2">
                        <?php echo gh_get_icon('check-circle', 'w-5 h-5'); ?>
                        <?php esc_html_e('Return Eligibility', 'greenhaven'); ?>
                    </h2>
                    <div class="gh-grid md:gh-grid-cols-2 gh-gap-6">
                        <div class="gh-bg-card gh-rounded-xl gh-p-5 gh-border gh-border-primary-20">
                            <h3 class="gh-font-semibold gh-text-primary gh-mb-3 gh-flex gh-items-center gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4'); ?>
                                <?php esc_html_e('Eligible for Return', 'greenhaven'); ?>
                            </h3>
                            <ul class="gh-space-y-2 gh-text-sm gh-text-muted-foreground">
                                <li>• <?php esc_html_e('Pots, planters, and containers', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Gardening tools and accessories', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Unused fertilizers and soil (sealed)', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Gift cards (refund to store credit only)', 'greenhaven'); ?></li>
                            </ul>
                        </div>
                        <div class="gh-bg-card gh-rounded-xl gh-p-5 gh-border gh-border-destructive-20">
                            <h3 class="gh-font-semibold gh-text-destructive gh-mb-3 gh-flex gh-items-center gh-gap-2">
                                <?php echo gh_get_icon('x-circle', 'w-4 h-4'); ?>
                                <?php esc_html_e('Not Eligible for Return', 'greenhaven'); ?>
                            </h3>
                            <ul class="gh-space-y-2 gh-text-sm gh-text-muted-foreground">
                                <li>• <?php esc_html_e('Live plants (see Live Arrival Guarantee)', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Bulbs and seeds', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Opened fertilizers or soil', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Items marked "Final Sale"', 'greenhaven'); ?></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- How to Start a Return -->
                <div class="gh-bg-card gh-border gh-rounded-xl gh-p-6 md:gh-p-8">
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-6"><?php esc_html_e('How to Start a Return', 'greenhaven'); ?></h2>
                    <ol class="gh-space-y-5">
                        <li class="gh-flex gh-gap-4">
                            <span class="gh-w-10 gh-h-10 gh-bg-primary gh-text-primary-foreground gh-rounded-full gh-flex gh-items-center gh-justify-center gh-font-bold gh-flex-shrink-0">1</span>
                            <div>
                                <p class="gh-font-semibold gh-text-foreground"><?php esc_html_e('Email Us', 'greenhaven'); ?></p>
                                <p class="gh-text-muted-foreground"><?php esc_html_e('Send an email to', 'greenhaven'); ?> <a href="mailto:support@greenhaven-nursery.com" class="gh-text-primary hover:gh-underline gh-font-medium">support@greenhaven-nursery.com</a> <?php esc_html_e('with your order number and reason for return.', 'greenhaven'); ?></p>
                            </div>
                        </li>
                        <li class="gh-flex gh-gap-4">
                            <span class="gh-w-10 gh-h-10 gh-bg-primary gh-text-primary-foreground gh-rounded-full gh-flex gh-items-center gh-justify-center gh-font-bold gh-flex-shrink-0">2</span>
                            <div>
                                <p class="gh-font-semibold gh-text-foreground"><?php esc_html_e('Receive Instructions', 'greenhaven'); ?></p>
                                <p class="gh-text-muted-foreground"><?php esc_html_e('We\'ll reply within 1 business day with return authorization and shipping instructions.', 'greenhaven'); ?></p>
                            </div>
                        </li>
                        <li class="gh-flex gh-gap-4">
                            <span class="gh-w-10 gh-h-10 gh-bg-primary gh-text-primary-foreground gh-rounded-full gh-flex gh-items-center gh-justify-center gh-font-bold gh-flex-shrink-0">3</span>
                            <div>
                                <p class="gh-font-semibold gh-text-foreground"><?php esc_html_e('Ship Your Return', 'greenhaven'); ?></p>
                                <p class="gh-text-muted-foreground"><?php esc_html_e('Pack the item securely and ship to the address provided. Keep your tracking number!', 'greenhaven'); ?></p>
                            </div>
                        </li>
                        <li class="gh-flex gh-gap-4">
                            <span class="gh-w-10 gh-h-10 gh-bg-primary gh-text-primary-foreground gh-rounded-full gh-flex gh-items-center gh-justify-center gh-font-bold gh-flex-shrink-0">4</span>
                            <div>
                                <p class="gh-font-semibold gh-text-foreground"><?php esc_html_e('Receive Your Refund', 'greenhaven'); ?></p>
                                <p class="gh-text-muted-foreground"><?php esc_html_e('Once inspected, we\'ll process your refund within 5–7 business days.', 'greenhaven'); ?></p>
                            </div>
                        </li>
                    </ol>
                </div>

                <!-- Contact Box -->
                <?php get_template_part('template-parts/components/policy', 'contact', array(
                    'title' => __('Need Help?', 'greenhaven'),
                    'description' => __('Our customer support team is here to assist with returns and refunds.', 'greenhaven'),
                    'email' => 'support@greenhaven-nursery.com',
                    'phone' => '(555) 123-4567'
                )); ?>

            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
```

### page-shipping-info.php

```php
<?php
/**
 * Template Name: Shipping Information
 * Converted from: src/pages/ShippingInfo.tsx
 */

get_header();

$shipping_zones = array(
    array('zone' => 'Zone 1', 'states' => 'West Coast (CA, OR, WA)', 'time' => '2-3 business days'),
    array('zone' => 'Zone 2', 'states' => 'Mountain West (AZ, NV, UT, CO, NM)', 'time' => '3-4 business days'),
    array('zone' => 'Zone 3', 'states' => 'Midwest (TX, OK, KS, NE, IA, MN, etc.)', 'time' => '4-5 business days'),
    array('zone' => 'Zone 4', 'states' => 'Southeast & Northeast', 'time' => '5-7 business days'),
);
?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="gh-policy-hero">
        <div class="gh-policy-hero__bg"></div>
        <div class="gh-container gh-relative gh-z-10">
            <div class="gh-max-w-3xl gh-mx-auto gh-text-center">
                <div class="gh-inline-flex gh-items-center gh-gap-2 gh-bg-primary-10 gh-text-primary gh-px-4 gh-py-2 gh-rounded-full gh-mb-6">
                    <?php echo gh_get_icon('truck', 'w-4 h-4'); ?>
                    <span class="gh-text-sm gh-font-medium"><?php esc_html_e('Fast & Safe Delivery', 'greenhaven'); ?></span>
                </div>
                <h1 class="gh-text-4xl md:gh-text-5xl gh-font-display gh-font-bold gh-text-foreground gh-mb-6">
                    <?php the_title(); ?>
                </h1>
                <p class="gh-text-lg gh-text-muted-foreground">
                    <?php esc_html_e('Everything you need to know about how we ship live plants safely to your door.', 'greenhaven'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Summary Box -->
    <section class="gh-py-8">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto">
                <div class="gh-bg-primary-5 gh-border gh-border-primary-20 gh-rounded-xl gh-p-6">
                    <h2 class="gh-text-lg gh-font-semibold gh-text-primary gh-mb-4 gh-flex gh-items-center gh-gap-2">
                        <?php echo gh_get_icon('check-circle', 'w-5 h-5'); ?>
                        <?php esc_html_e('Shipping Summary', 'greenhaven'); ?>
                    </h2>
                    <div class="gh-grid sm:gh-grid-cols-2 gh-gap-4 gh-text-sm">
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Processing Time:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('1–2 business days', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Cut-off Time:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('12:00 PM PST', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Carriers:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('USPS, UPS, FedEx', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Ship Days:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('Mon–Wed only', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Free Shipping:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium gh-text-primary"><?php esc_html_e('Orders over $150', 'greenhaven'); ?></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="gh-py-8 md:gh-py-12">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto gh-space-y-10">
                
                <!-- Shipping Rates -->
                <div>
                    <div class="gh-flex gh-items-center gh-gap-3 gh-mb-4">
                        <div class="gh-w-10 gh-h-10 gh-bg-primary-10 gh-rounded-lg gh-flex gh-items-center gh-justify-center">
                            <?php echo gh_get_icon('package', 'w-5 h-5 text-primary'); ?>
                        </div>
                        <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary"><?php esc_html_e('Shipping Methods & Rates', 'greenhaven'); ?></h2>
                    </div>
                    <div class="gh-bg-card gh-rounded-xl gh-p-6 gh-border">
                        <div class="gh-grid sm:gh-grid-cols-2 gh-gap-6">
                            <div>
                                <h3 class="gh-font-semibold gh-text-foreground gh-mb-3"><?php esc_html_e('Standard Shipping', 'greenhaven'); ?></h3>
                                <ul class="gh-space-y-2 gh-text-sm gh-text-muted-foreground">
                                    <li class="gh-flex gh-justify-between">
                                        <span><?php esc_html_e('Orders under $75:', 'greenhaven'); ?></span>
                                        <span class="gh-font-medium gh-text-foreground">$9.99</span>
                                    </li>
                                    <li class="gh-flex gh-justify-between">
                                        <span><?php esc_html_e('Orders $75–$149:', 'greenhaven'); ?></span>
                                        <span class="gh-font-medium gh-text-foreground">$12.99</span>
                                    </li>
                                    <li class="gh-flex gh-justify-between">
                                        <span><?php esc_html_e('Orders $150+:', 'greenhaven'); ?></span>
                                        <span class="gh-font-medium gh-text-primary"><?php esc_html_e('FREE', 'greenhaven'); ?></span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="gh-font-semibold gh-text-foreground gh-mb-3"><?php esc_html_e('Expedited Shipping', 'greenhaven'); ?></h3>
                                <ul class="gh-space-y-2 gh-text-sm gh-text-muted-foreground">
                                    <li class="gh-flex gh-justify-between">
                                        <span><?php esc_html_e('2-Day Express:', 'greenhaven'); ?></span>
                                        <span class="gh-font-medium gh-text-foreground"><?php esc_html_e('From $24.99', 'greenhaven'); ?></span>
                                    </li>
                                    <li class="gh-flex gh-justify-between">
                                        <span><?php esc_html_e('Overnight:', 'greenhaven'); ?></span>
                                        <span class="gh-font-medium gh-text-foreground"><?php esc_html_e('From $39.99', 'greenhaven'); ?></span>
                                    </li>
                                </ul>
                                <p class="gh-text-xs gh-text-muted-foreground gh-mt-2">*<?php esc_html_e('Rates vary by location and weight', 'greenhaven'); ?></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Delivery Estimates Table -->
                <div>
                    <div class="gh-flex gh-items-center gh-gap-3 gh-mb-4">
                        <div class="gh-w-10 gh-h-10 gh-bg-primary-10 gh-rounded-lg gh-flex gh-items-center gh-justify-center">
                            <?php echo gh_get_icon('map-pin', 'w-5 h-5 text-primary'); ?>
                        </div>
                        <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary"><?php esc_html_e('Delivery Estimates', 'greenhaven'); ?></h2>
                    </div>
                    <p class="gh-text-muted-foreground gh-mb-4"><?php esc_html_e('We ship from our facilities in Oregon and Florida to optimize delivery times nationwide.', 'greenhaven'); ?></p>
                    <div class="gh-overflow-x-auto">
                        <table class="gh-w-full gh-bg-card gh-rounded-xl gh-border">
                            <thead>
                                <tr class="gh-border-b">
                                    <th class="gh-text-left gh-py-3 gh-px-4 gh-text-sm gh-font-semibold gh-text-foreground"><?php esc_html_e('Zone', 'greenhaven'); ?></th>
                                    <th class="gh-text-left gh-py-3 gh-px-4 gh-text-sm gh-font-semibold gh-text-foreground"><?php esc_html_e('States', 'greenhaven'); ?></th>
                                    <th class="gh-text-left gh-py-3 gh-px-4 gh-text-sm gh-font-semibold gh-text-foreground"><?php esc_html_e('Transit Time', 'greenhaven'); ?></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($shipping_zones as $zone) : ?>
                                <tr class="gh-border-b last:gh-border-0">
                                    <td class="gh-py-3 gh-px-4 gh-text-sm gh-font-medium gh-text-primary"><?php echo esc_html($zone['zone']); ?></td>
                                    <td class="gh-py-3 gh-px-4 gh-text-sm gh-text-muted-foreground"><?php echo esc_html($zone['states']); ?></td>
                                    <td class="gh-py-3 gh-px-4 gh-text-sm gh-text-muted-foreground"><?php echo esc_html($zone['time']); ?></td>
                                </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Weather-Smart Shipping -->
                <div>
                    <div class="gh-flex gh-items-center gh-gap-3 gh-mb-4">
                        <div class="gh-w-10 gh-h-10 gh-bg-accent-20 gh-rounded-lg gh-flex gh-items-center gh-justify-center">
                            <?php echo gh_get_icon('thermometer', 'w-5 h-5 text-accent'); ?>
                        </div>
                        <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary"><?php esc_html_e('Weather-Smart Shipping', 'greenhaven'); ?></h2>
                    </div>
                    <div class="gh-space-y-4 gh-text-muted-foreground">
                        <p><?php esc_html_e('Live plants are sensitive to extreme temperatures. To protect your plants:', 'greenhaven'); ?></p>
                        <ul class="gh-list-disc gh-list-inside gh-space-y-1">
                            <li><?php esc_html_e('We monitor weather along all shipping routes', 'greenhaven'); ?></li>
                            <li><?php esc_html_e('We may implement weather holds when temps fall below 35°F or exceed 95°F', 'greenhaven'); ?></li>
                            <li><?php esc_html_e('Heat packs or cold packs are included when necessary (at no extra charge)', 'greenhaven'); ?></li>
                        </ul>
                        <div class="gh-bg-accent-10 gh-border gh-border-accent-20 gh-rounded-lg gh-p-4">
                            <p class="gh-text-sm">
                                <strong class="gh-text-foreground"><?php esc_html_e('Weather Hold Policy:', 'greenhaven'); ?></strong> 
                                <?php esc_html_e('If conditions are unsafe, we\'ll hold your shipment and ship as soon as the forecast improves. Your patience ensures your plants arrive healthy!', 'greenhaven'); ?>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Contact Box -->
                <?php get_template_part('template-parts/components/policy', 'contact', array(
                    'title' => __('Questions About Shipping?', 'greenhaven'),
                    'description' => __('Our support team is happy to help with any shipping questions.', 'greenhaven'),
                    'email' => 'support@greenhaven-nursery.com',
                    'phone' => '(555) 123-4567'
                )); ?>

            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
```

### page-live-arrival-guarantee.php

```php
<?php
/**
 * Template Name: Live Arrival Guarantee
 * Converted from: src/pages/LiveArrivalGuarantee.tsx
 */

get_header();
?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="gh-policy-hero">
        <div class="gh-policy-hero__bg"></div>
        <div class="gh-container gh-relative gh-z-10">
            <div class="gh-max-w-3xl gh-mx-auto gh-text-center">
                <div class="gh-inline-flex gh-items-center gh-gap-2 gh-bg-primary-10 gh-text-primary gh-px-4 gh-py-2 gh-rounded-full gh-mb-6">
                    <?php echo gh_get_icon('shield', 'w-4 h-4'); ?>
                    <span class="gh-text-sm gh-font-medium"><?php esc_html_e('100% Guaranteed', 'greenhaven'); ?></span>
                </div>
                <h1 class="gh-text-4xl md:gh-text-5xl gh-font-display gh-font-bold gh-text-foreground gh-mb-6">
                    <?php the_title(); ?>
                </h1>
                <p class="gh-text-lg gh-text-muted-foreground">
                    <?php esc_html_e('Every plant is guaranteed to arrive alive and healthy—or we\'ll make it right.', 'greenhaven'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Summary Box -->
    <section class="gh-py-8">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto">
                <div class="gh-bg-primary-5 gh-border gh-border-primary-20 gh-rounded-xl gh-p-6">
                    <h2 class="gh-text-lg gh-font-semibold gh-text-primary gh-mb-4 gh-flex gh-items-center gh-gap-2">
                        <?php echo gh_get_icon('shield', 'w-5 h-5'); ?>
                        <?php esc_html_e('Guarantee Summary', 'greenhaven'); ?>
                    </h2>
                    <div class="gh-grid sm:gh-grid-cols-2 gh-gap-4 gh-text-sm">
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Claim Window:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('48 hours from delivery', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Response Time:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('Within 24 hours', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Resolution:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('Replacement or full refund', 'greenhaven'); ?></span>
                        </div>
                        <div class="gh-flex gh-justify-between">
                            <span class="gh-text-muted-foreground"><?php esc_html_e('Required:', 'greenhaven'); ?></span>
                            <span class="gh-font-medium"><?php esc_html_e('Photos of plant & packaging', 'greenhaven'); ?></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="gh-py-8 md:gh-py-12">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto gh-space-y-10">
                
                <!-- Our Promise -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('Our Promise', 'greenhaven'); ?></h2>
                    <p class="gh-text-muted-foreground">
                        <?php esc_html_e('We stand behind every plant we ship. If your plant arrives damaged, dead, or significantly different from what was ordered, we\'ll replace it or issue a full refund—no questions asked. Your satisfaction is our top priority.', 'greenhaven'); ?>
                    </p>
                </div>

                <!-- What's Covered -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('What\'s Covered', 'greenhaven'); ?></h2>
                    <div class="gh-grid md:gh-grid-cols-2 gh-gap-6">
                        <div class="gh-bg-card gh-rounded-xl gh-p-5 gh-border gh-border-primary-20">
                            <h3 class="gh-font-semibold gh-text-primary gh-mb-3 gh-flex gh-items-center gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4'); ?>
                                <?php esc_html_e('Covered by Guarantee', 'greenhaven'); ?>
                            </h3>
                            <ul class="gh-space-y-2 gh-text-sm gh-text-muted-foreground">
                                <li>• <?php esc_html_e('Plant arrives dead or dying', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Severe damage during shipping (broken stems, crushed leaves)', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Wrong plant shipped', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Missing plants from order', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Plant arrives frozen or heat-damaged', 'greenhaven'); ?></li>
                            </ul>
                        </div>
                        <div class="gh-bg-card gh-rounded-xl gh-p-5 gh-border gh-border-destructive-20">
                            <h3 class="gh-font-semibold gh-text-destructive gh-mb-3 gh-flex gh-items-center gh-gap-2">
                                <?php echo gh_get_icon('x-circle', 'w-4 h-4'); ?>
                                <?php esc_html_e('Not Covered', 'greenhaven'); ?>
                            </h3>
                            <ul class="gh-space-y-2 gh-text-sm gh-text-muted-foreground">
                                <li>• <?php esc_html_e('Claims made after 48 hours', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Damage due to improper care after delivery', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Package not retrieved promptly', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Minor cosmetic issues (normal transit stress)', 'greenhaven'); ?></li>
                                <li>• <?php esc_html_e('Natural leaf drop or transplant shock', 'greenhaven'); ?></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- How to File a Claim -->
                <div class="gh-bg-secondary gh-rounded-xl gh-p-6 md:gh-p-8">
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-6 gh-flex gh-items-center gh-gap-2">
                        <?php echo gh_get_icon('clock', 'w-5 h-5'); ?>
                        <?php esc_html_e('How to File a Claim', 'greenhaven'); ?>
                    </h2>
                    <ol class="gh-space-y-6">
                        <li class="gh-flex gh-gap-4">
                            <span class="gh-w-10 gh-h-10 gh-bg-primary gh-text-primary-foreground gh-rounded-full gh-flex gh-items-center gh-justify-center gh-font-bold gh-flex-shrink-0">1</span>
                            <div>
                                <p class="gh-font-medium gh-text-foreground gh-mb-1"><?php esc_html_e('Document the Issue (Within 48 Hours)', 'greenhaven'); ?></p>
                                <p class="gh-text-sm gh-text-muted-foreground"><?php esc_html_e('Take clear photos immediately upon delivery. Don\'t discard any packaging.', 'greenhaven'); ?></p>
                            </div>
                        </li>
                        <li class="gh-flex gh-gap-4">
                            <span class="gh-w-10 gh-h-10 gh-bg-primary gh-text-primary-foreground gh-rounded-full gh-flex gh-items-center gh-justify-center gh-font-bold gh-flex-shrink-0">2</span>
                            <div>
                                <p class="gh-font-medium gh-text-foreground gh-mb-1"><?php esc_html_e('Email Us', 'greenhaven'); ?></p>
                                <p class="gh-text-sm gh-text-muted-foreground"><?php esc_html_e('Send an email to', 'greenhaven'); ?> <a href="mailto:support@greenhaven-nursery.com" class="gh-text-primary hover:gh-underline">support@greenhaven-nursery.com</a> <?php esc_html_e('with your order number, description, and photos.', 'greenhaven'); ?></p>
                            </div>
                        </li>
                        <li class="gh-flex gh-gap-4">
                            <span class="gh-w-10 gh-h-10 gh-bg-primary gh-text-primary-foreground gh-rounded-full gh-flex gh-items-center gh-justify-center gh-font-bold gh-flex-shrink-0">3</span>
                            <div>
                                <p class="gh-font-medium gh-text-foreground gh-mb-1"><?php esc_html_e('We\'ll Respond Within 24 Hours', 'greenhaven'); ?></p>
                                <p class="gh-text-sm gh-text-muted-foreground"><?php esc_html_e('Our team will review your claim and get back to you with a resolution—typically a free replacement or full refund.', 'greenhaven'); ?></p>
                            </div>
                        </li>
                    </ol>
                </div>

                <!-- Photo Requirements -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4 gh-flex gh-items-center gh-gap-2">
                        <?php echo gh_get_icon('camera', 'w-5 h-5'); ?>
                        <?php esc_html_e('Required Photos for Claims', 'greenhaven'); ?>
                    </h2>
                    <div class="gh-grid sm:gh-grid-cols-3 gh-gap-4">
                        <div class="gh-bg-card gh-rounded-xl gh-p-4 gh-border gh-text-center">
                            <div class="gh-w-12 gh-h-12 gh-bg-primary-10 gh-rounded-full gh-flex gh-items-center gh-justify-center gh-mx-auto gh-mb-3">
                                <span class="gh-text-xl">🌱</span>
                            </div>
                            <p class="gh-font-medium gh-text-foreground gh-text-sm"><?php esc_html_e('The Plant', 'greenhaven'); ?></p>
                            <p class="gh-text-xs gh-text-muted-foreground gh-mt-1"><?php esc_html_e('Clear photo showing the damage', 'greenhaven'); ?></p>
                        </div>
                        <div class="gh-bg-card gh-rounded-xl gh-p-4 gh-border gh-text-center">
                            <div class="gh-w-12 gh-h-12 gh-bg-primary-10 gh-rounded-full gh-flex gh-items-center gh-justify-center gh-mx-auto gh-mb-3">
                                <span class="gh-text-xl">📦</span>
                            </div>
                            <p class="gh-font-medium gh-text-foreground gh-text-sm"><?php esc_html_e('The Packaging', 'greenhaven'); ?></p>
                            <p class="gh-text-xs gh-text-muted-foreground gh-mt-1"><?php esc_html_e('Box condition, inside packing', 'greenhaven'); ?></p>
                        </div>
                        <div class="gh-bg-card gh-rounded-xl gh-p-4 gh-border gh-text-center">
                            <div class="gh-w-12 gh-h-12 gh-bg-primary-10 gh-rounded-full gh-flex gh-items-center gh-justify-center gh-mx-auto gh-mb-3">
                                <span class="gh-text-xl">🏷️</span>
                            </div>
                            <p class="gh-font-medium gh-text-foreground gh-text-sm"><?php esc_html_e('Shipping Label', 'greenhaven'); ?></p>
                            <p class="gh-text-xs gh-text-muted-foreground gh-mt-1"><?php esc_html_e('Visible tracking/order info', 'greenhaven'); ?></p>
                        </div>
                    </div>
                </div>

                <!-- Resolution Options -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('Resolution Options', 'greenhaven'); ?></h2>
                    <div class="gh-grid sm:gh-grid-cols-3 gh-gap-4">
                        <div class="gh-bg-card gh-rounded-xl gh-p-4 gh-border">
                            <h3 class="gh-font-semibold gh-text-foreground gh-mb-2">🔄 <?php esc_html_e('Free Replacement', 'greenhaven'); ?></h3>
                            <p class="gh-text-sm gh-text-muted-foreground"><?php esc_html_e('We\'ll ship a new plant at no charge (subject to availability).', 'greenhaven'); ?></p>
                        </div>
                        <div class="gh-bg-card gh-rounded-xl gh-p-4 gh-border">
                            <h3 class="gh-font-semibold gh-text-foreground gh-mb-2">💳 <?php esc_html_e('Full Refund', 'greenhaven'); ?></h3>
                            <p class="gh-text-sm gh-text-muted-foreground"><?php esc_html_e('Refund to your original payment method within 5–7 business days.', 'greenhaven'); ?></p>
                        </div>
                        <div class="gh-bg-card gh-rounded-xl gh-p-4 gh-border">
                            <h3 class="gh-font-semibold gh-text-foreground gh-mb-2">🎁 <?php esc_html_e('Store Credit', 'greenhaven'); ?></h3>
                            <p class="gh-text-sm gh-text-muted-foreground"><?php esc_html_e('Credit applied to your account for future purchases.', 'greenhaven'); ?></p>
                        </div>
                    </div>
                </div>

                <!-- Contact Box -->
                <?php get_template_part('template-parts/components/policy', 'contact', array(
                    'title' => __('File a Claim', 'greenhaven'),
                    'description' => __('Remember: Claims must be submitted within 48 hours of delivery.', 'greenhaven'),
                    'email' => 'support@greenhaven-nursery.com',
                    'phone' => '(555) 123-4567'
                )); ?>

            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
```

### page-accessibility.php

```php
<?php
/**
 * Template Name: Accessibility Statement
 * Converted from: src/pages/Accessibility.tsx
 */

get_header();
?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="gh-policy-hero">
        <div class="gh-policy-hero__bg"></div>
        <div class="gh-container gh-relative gh-z-10">
            <div class="gh-max-w-3xl gh-mx-auto gh-text-center">
                <div class="gh-inline-flex gh-items-center gh-gap-2 gh-bg-primary-10 gh-text-primary gh-px-4 gh-py-2 gh-rounded-full gh-mb-6">
                    <?php echo gh_get_icon('accessibility', 'w-4 h-4'); ?>
                    <span class="gh-text-sm gh-font-medium"><?php esc_html_e('Inclusive Design', 'greenhaven'); ?></span>
                </div>
                <h1 class="gh-text-4xl md:gh-text-5xl gh-font-display gh-font-bold gh-text-foreground gh-mb-6">
                    <?php the_title(); ?>
                </h1>
                <p class="gh-text-lg gh-text-muted-foreground">
                    <?php esc_html_e('Our commitment to making gardening accessible to everyone.', 'greenhaven'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="gh-py-8 md:gh-py-12">
        <div class="gh-container">
            <div class="gh-max-w-4xl gh-mx-auto gh-space-y-8">
                
                <div class="gh-bg-primary-5 gh-border gh-border-primary-20 gh-rounded-xl gh-p-6">
                    <p class="gh-text-sm gh-text-muted-foreground">
                        <strong class="gh-text-foreground"><?php esc_html_e('Last Updated:', 'greenhaven'); ?></strong> <?php echo get_the_modified_date(); ?>
                    </p>
                </div>

                <!-- Commitment -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('Our Commitment', 'greenhaven'); ?></h2>
                    <p class="gh-text-muted-foreground">
                        <?php esc_html_e('Green Haven Nursery is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.', 'greenhaven'); ?>
                    </p>
                </div>

                <!-- Standards -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('Accessibility Standards', 'greenhaven'); ?></h2>
                    <p class="gh-text-muted-foreground gh-mb-4">
                        <?php esc_html_e('We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.', 'greenhaven'); ?>
                    </p>
                    <div class="gh-bg-card gh-rounded-xl gh-p-5 gh-border">
                        <h3 class="gh-font-semibold gh-text-foreground gh-mb-3"><?php esc_html_e('Our efforts include:', 'greenhaven'); ?></h3>
                        <ul class="gh-space-y-2 gh-text-sm gh-text-muted-foreground">
                            <li class="gh-flex gh-items-start gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4 text-primary mt-0.5 flex-shrink-0'); ?>
                                <span><?php esc_html_e('Providing text alternatives for non-text content', 'greenhaven'); ?></span>
                            </li>
                            <li class="gh-flex gh-items-start gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4 text-primary mt-0.5 flex-shrink-0'); ?>
                                <span><?php esc_html_e('Ensuring sufficient color contrast between text and backgrounds', 'greenhaven'); ?></span>
                            </li>
                            <li class="gh-flex gh-items-start gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4 text-primary mt-0.5 flex-shrink-0'); ?>
                                <span><?php esc_html_e('Making all functionality available from a keyboard', 'greenhaven'); ?></span>
                            </li>
                            <li class="gh-flex gh-items-start gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4 text-primary mt-0.5 flex-shrink-0'); ?>
                                <span><?php esc_html_e('Providing clear navigation and consistent page structure', 'greenhaven'); ?></span>
                            </li>
                            <li class="gh-flex gh-items-start gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4 text-primary mt-0.5 flex-shrink-0'); ?>
                                <span><?php esc_html_e('Using descriptive link text and headings', 'greenhaven'); ?></span>
                            </li>
                            <li class="gh-flex gh-items-start gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4 text-primary mt-0.5 flex-shrink-0'); ?>
                                <span><?php esc_html_e('Ensuring forms are accessible with proper labels', 'greenhaven'); ?></span>
                            </li>
                            <li class="gh-flex gh-items-start gh-gap-2">
                                <?php echo gh_get_icon('check-circle', 'w-4 h-4 text-primary mt-0.5 flex-shrink-0'); ?>
                                <span><?php esc_html_e('Supporting screen readers and assistive technologies', 'greenhaven'); ?></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Known Limitations -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('Known Limitations', 'greenhaven'); ?></h2>
                    <p class="gh-text-muted-foreground gh-mb-4">
                        <?php esc_html_e('While we strive for full accessibility, we acknowledge that some areas of our website may not yet fully meet all accessibility standards:', 'greenhaven'); ?>
                    </p>
                    <ul class="gh-list-disc gh-list-inside gh-space-y-1 gh-text-muted-foreground">
                        <li><?php esc_html_e('Some older product images may lack detailed alt text descriptions', 'greenhaven'); ?></li>
                        <li><?php esc_html_e('Third-party content (such as embedded videos) may not be fully accessible', 'greenhaven'); ?></li>
                        <li><?php esc_html_e('PDF documents may not be fully screen-reader compatible', 'greenhaven'); ?></li>
                    </ul>
                </div>

                <!-- Assistive Technology -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('Compatibility with Assistive Technology', 'greenhaven'); ?></h2>
                    <p class="gh-text-muted-foreground"><?php esc_html_e('Our website is designed to be compatible with:', 'greenhaven'); ?></p>
                    <ul class="gh-list-disc gh-list-inside gh-space-y-1 gh-text-muted-foreground gh-mt-4">
                        <li><?php esc_html_e('Screen readers (JAWS, NVDA, VoiceOver, TalkBack)', 'greenhaven'); ?></li>
                        <li><?php esc_html_e('Screen magnification software', 'greenhaven'); ?></li>
                        <li><?php esc_html_e('Speech recognition software', 'greenhaven'); ?></li>
                        <li><?php esc_html_e('Keyboard-only navigation', 'greenhaven'); ?></li>
                    </ul>
                </div>

                <!-- Feedback -->
                <div>
                    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-text-primary gh-mb-4"><?php esc_html_e('Feedback and Contact', 'greenhaven'); ?></h2>
                    <p class="gh-text-muted-foreground gh-mb-4">
                        <?php esc_html_e('We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know:', 'greenhaven'); ?>
                    </p>
                    <div class="gh-bg-card gh-rounded-xl gh-p-5 gh-border">
                        <ul class="gh-space-y-3">
                            <li class="gh-flex gh-items-center gh-gap-3 gh-text-muted-foreground">
                                <?php echo gh_get_icon('mail', 'w-5 h-5 text-primary'); ?>
                                <a href="mailto:accessibility@greenhaven-nursery.com" class="gh-text-primary hover:gh-underline">accessibility@greenhaven-nursery.com</a>
                            </li>
                            <li class="gh-flex gh-items-center gh-gap-3 gh-text-muted-foreground">
                                <?php echo gh_get_icon('phone', 'w-5 h-5 text-primary'); ?>
                                <a href="tel:+15551234567" class="gh-text-primary hover:gh-underline">(555) 123-4567</a>
                            </li>
                        </ul>
                    </div>
                    <p class="gh-text-muted-foreground gh-mt-4">
                        <?php esc_html_e('We aim to respond to accessibility feedback within 2 business days.', 'greenhaven'); ?>
                    </p>
                </div>

                <!-- Contact Box -->
                <?php get_template_part('template-parts/components/policy', 'contact', array(
                    'title' => __('Need Assistance?', 'greenhaven'),
                    'description' => __('Our team is happy to assist you with any accessibility needs.', 'greenhaven'),
                    'email' => 'accessibility@greenhaven-nursery.com',
                    'phone' => '(555) 123-4567'
                )); ?>

            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
```

### template-parts/components/policy-contact.php

Reusable contact box component for all policy pages:

```php
<?php
/**
 * Policy Contact Box Component
 * 
 * @param array $args {
 *     @type string $title       Box title
 *     @type string $description Box description
 *     @type string $email       Contact email
 *     @type string $phone       Contact phone (optional)
 * }
 */

$title = $args['title'] ?? __('Contact Us', 'greenhaven');
$description = $args['description'] ?? '';
$email = $args['email'] ?? 'support@greenhaven-nursery.com';
$phone = $args['phone'] ?? '';
?>

<div class="gh-bg-primary gh-text-primary-foreground gh-rounded-xl gh-p-6 md:gh-p-8">
    <h2 class="gh-text-xl gh-font-display gh-font-bold gh-mb-4"><?php echo esc_html($title); ?></h2>
    <?php if ($description) : ?>
        <p class="gh-text-primary-foreground-80 gh-mb-4"><?php echo esc_html($description); ?></p>
    <?php endif; ?>
    <div class="gh-flex gh-flex-col sm:gh-flex-row gh-gap-4">
        <a href="mailto:<?php echo esc_attr($email); ?>" class="gh-inline-flex gh-items-center gh-gap-2 gh-text-primary-foreground hover:gh-underline">
            <?php echo gh_get_icon('mail', 'w-4 h-4'); ?>
            <?php echo esc_html($email); ?>
        </a>
        <?php if ($phone) : ?>
        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone)); ?>" class="gh-inline-flex gh-items-center gh-gap-2 gh-text-primary-foreground hover:gh-underline">
            <?php echo gh_get_icon('phone', 'w-4 h-4'); ?>
            <?php echo esc_html($phone); ?>
        </a>
        <?php endif; ?>
    </div>
    <p class="gh-text-xs gh-text-primary-foreground-60 gh-mt-4"><?php esc_html_e('Last updated:', 'greenhaven'); ?> <?php echo get_the_modified_date(); ?></p>
</div>
```

### Policy Page CSS (add to style.css)

```css
/* Policy Pages Hero */
.gh-policy-hero {
    position: relative;
    padding: 5rem 0 7rem;
    overflow: hidden;
}

.gh-policy-hero__bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
        hsl(var(--gh-primary) / 0.1) 0%, 
        hsl(var(--gh-accent) / 0.05) 50%, 
        hsl(var(--gh-primary) / 0.05) 100%
    );
}

.gh-policy-hero__bg::before,
.gh-policy-hero__bg::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
}

.gh-policy-hero__bg::before {
    top: 2.5rem;
    left: 2.5rem;
    width: 8rem;
    height: 8rem;
    background: hsl(var(--gh-primary) / 0.2);
}

.gh-policy-hero__bg::after {
    bottom: 2.5rem;
    right: 2.5rem;
    width: 10rem;
    height: 10rem;
    background: hsl(var(--gh-accent) / 0.2);
}

@media (min-width: 768px) {
    .gh-policy-hero {
        padding: 7rem 0 9rem;
    }
}

/* Policy Content Styles */
.gh-section-heading {
    font-size: 1.25rem;
    font-family: var(--gh-font-display);
    font-weight: 700;
    color: hsl(var(--gh-primary));
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.gh-list {
    list-style: disc;
    list-style-position: inside;
    color: hsl(var(--gh-muted-foreground));
}

.gh-list li {
    margin-bottom: 0.25rem;
}

.gh-prose p {
    color: hsl(var(--gh-muted-foreground));
    margin-bottom: 1rem;
}
```

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
