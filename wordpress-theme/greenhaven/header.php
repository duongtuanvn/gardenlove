<?php
/**
 * Header Template
 * Converted from: src/components/layout/Header.tsx
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link gh-sr-only" href="#main">
    <?php esc_html_e('Skip to content', 'greenhaven'); ?>
</a>

<header id="masthead" class="gh-header" style="position: sticky; top: 0; z-index: 50; background-color: hsl(var(--gh-background) / 0.95); backdrop-filter: blur(8px); border-bottom: 1px solid hsl(var(--gh-border));">
    
    <!-- Announcement Bar -->
    <div style="background-color: hsl(var(--gh-primary)); color: hsl(var(--gh-primary-foreground)); text-align: center; padding: 0.5rem 0; font-size: 0.875rem; font-weight: 500;">
        <?php echo esc_html(gh_get_option('announcement_text', '🌿 Free Shipping on Orders $75+ | 100% Live Arrival Guarantee')); ?>
    </div>

    <nav class="gh-container">
        <div class="gh-flex gh-items-center gh-justify-between" style="height: 4rem;">
            
            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="gh-flex gh-items-center gh-gap-2">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <div style="width: 2.5rem; height: 2.5rem; border-radius: 9999px; background-color: hsl(var(--gh-primary)); display: flex; align-items: center; justify-content: center;">
                        <?php echo gh_get_icon('leaf', 'w-6 h-6'); ?>
                    </div>
                    <div class="sm:gh-block gh-hidden">
                        <span style="font-size: 1.25rem; font-family: 'Playfair Display', serif; font-weight: 700; color: hsl(var(--gh-foreground));">
                            <?php bloginfo('name'); ?>
                        </span>
                        <?php if (get_bloginfo('description')) : ?>
                            <span style="font-size: 0.75rem; display: block; color: hsl(var(--gh-muted-foreground)); margin-top: -0.25rem;">
                                <?php bloginfo('description'); ?>
                            </span>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            </a>

            <!-- Desktop Navigation -->
            <div class="lg:gh-flex gh-hidden gh-items-center gh-gap-8">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'gh-flex gh-items-center gh-gap-8',
                    'fallback_cb'    => false,
                    'walker'         => new GH_Nav_Walker(),
                    'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                ));
                ?>
            </div>

            <!-- Actions -->
            <div class="gh-flex gh-items-center gh-gap-3">
                <!-- Search -->
                <a href="<?php echo esc_url(home_url('/search')); ?>" class="sm:gh-flex gh-hidden gh-btn gh-btn-ghost gh-btn-icon" aria-label="<?php esc_attr_e('Search', 'greenhaven'); ?>">
                    <?php echo gh_get_icon('search', 'w-5 h-5'); ?>
                </a>

                <!-- Cart -->
                <?php if (class_exists('WooCommerce')) : ?>
                    <a href="<?php echo esc_url(wc_get_cart_url()); ?>" class="gh-cart-toggle" style="position: relative;">
                        <span class="gh-btn gh-btn-ghost gh-btn-icon">
                            <?php echo gh_get_icon('cart', 'w-5 h-5'); ?>
                            <?php if (WC()->cart && WC()->cart->get_cart_contents_count() > 0) : ?>
                                <span class="gh-cart-count" style="position: absolute; top: -0.25rem; right: -0.25rem; width: 1.25rem; height: 1.25rem; background-color: hsl(var(--gh-accent)); color: hsl(var(--gh-accent-foreground)); font-size: 0.75rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; font-weight: 600;">
                                    <?php echo esc_html(WC()->cart->get_cart_contents_count()); ?>
                                </span>
                            <?php endif; ?>
                        </span>
                    </a>
                <?php endif; ?>

                <!-- Shop Now CTA -->
                <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/shop')); ?>" class="sm:gh-flex gh-hidden gh-btn gh-btn-hero">
                    <?php esc_html_e('Shop Now', 'greenhaven'); ?>
                </a>

                <!-- Mobile Menu Toggle -->
                <button type="button" class="lg:gh-hidden gh-btn gh-btn-ghost gh-btn-icon gh-mobile-toggle" aria-label="<?php esc_attr_e('Toggle Menu', 'greenhaven'); ?>" aria-expanded="false">
                    <span class="gh-menu-icon">
                        <?php echo gh_get_icon('menu', 'w-6 h-6'); ?>
                    </span>
                    <span class="gh-close-icon gh-hidden">
                        <?php echo gh_get_icon('close', 'w-6 h-6'); ?>
                    </span>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="gh-mobile-menu" class="lg:gh-hidden gh-hidden" style="padding: 1rem 0; border-top: 1px solid hsl(var(--gh-border));">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'mobile',
                'container'      => false,
                'menu_class'     => 'gh-mobile-nav',
                'fallback_cb'    => function() {
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => 'gh-mobile-nav',
                        'walker'         => new GH_Mobile_Nav_Walker(),
                    ));
                },
                'walker'         => new GH_Mobile_Nav_Walker(),
            ));
            ?>
        </div>
    </nav>
</header>

<div id="content" class="site-content">
