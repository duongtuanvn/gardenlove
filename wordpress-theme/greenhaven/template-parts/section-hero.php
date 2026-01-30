<?php
/**
 * Hero Section Template
 * Converted from: src/components/home/HeroSection.tsx
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

// Get hero settings from customizer or use defaults
$hero_title = get_theme_mod('gh_hero_title', 'Healthy Plants Delivered to Your Door');
$hero_subtitle = get_theme_mod('gh_hero_subtitle', 'From our greenhouse to your home — expertly grown plants shipped with care to thrive in your space.');
$hero_badge = get_theme_mod('gh_hero_badge', 'Family-Owned Since 2015');
$hero_image = get_theme_mod('gh_hero_image', GH_THEME_URI . '/assets/images/hero-greenhouse.jpg');
$hero_cta_text = get_theme_mod('gh_hero_cta_text', 'Shop Plants');
$hero_cta_url = get_theme_mod('gh_hero_cta_url', class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/shop'));
$hero_secondary_text = get_theme_mod('gh_hero_secondary_text', 'Our Guarantee');
$hero_secondary_url = get_theme_mod('gh_hero_secondary_url', home_url('/guarantee'));

// Trust bar items
$trust_items = array(
    array('icon' => 'shield', 'text' => __('100% Live Arrival Guarantee', 'greenhaven')),
    array('icon' => 'truck', 'text' => __('Expert Packaging & Fast Shipping', 'greenhaven')),
    array('icon' => 'leaf', 'text' => __('Grown with Care in the USA', 'greenhaven')),
    array('icon' => 'refresh', 'text' => __('30-Day Money-Back Guarantee', 'greenhaven')),
);
?>

<section id="hero" class="gh-hero" style="position: relative; min-height: 85vh; display: flex; align-items: center;">
    
    <!-- Background Image -->
    <div style="position: absolute; inset: 0;">
        <img
            src="<?php echo esc_url($hero_image); ?>"
            alt="<?php echo esc_attr(get_bloginfo('name')); ?> greenhouse"
            style="width: 100%; height: 100%; object-fit: cover;"
            loading="eager"
        >
        <div class="gh-hero-overlay" style="position: absolute; inset: 0;"></div>
    </div>

    <!-- Content -->
    <div class="gh-container" style="position: relative; z-index: 10; padding-top: 5rem; padding-bottom: 5rem;">
        <div style="max-width: 42rem;">
            
            <!-- Badge -->
            <span class="gh-animate-fade-in-up" style="display: inline-flex; align-items: center; gap: 0.5rem; background-color: hsl(var(--gh-accent) / 0.9); color: hsl(var(--gh-accent-foreground)); font-size: 0.875rem; font-weight: 500; padding: 0.5rem 1rem; border-radius: 9999px; margin-bottom: 1.5rem;">
                <?php echo gh_get_icon('leaf', 'w-4 h-4'); ?>
                <?php echo esc_html($hero_badge); ?>
            </span>
            
            <!-- Title -->
            <h1 class="gh-animate-fade-in-up gh-delay-100" style="font-size: clamp(2.25rem, 5vw, 4.5rem); font-weight: 700; color: hsl(var(--gh-primary-foreground)); margin-bottom: 1.5rem; line-height: 1.1;">
                <?php echo esc_html($hero_title); ?>
            </h1>
            
            <!-- Subtitle -->
            <p class="gh-animate-fade-in-up gh-delay-200" style="font-size: clamp(1rem, 2vw, 1.25rem); color: hsl(var(--gh-primary-foreground) / 0.9); margin-bottom: 2rem; max-width: 32rem; line-height: 1.6;">
                <?php echo esc_html($hero_subtitle); ?>
            </p>
            
            <!-- CTAs -->
            <div class="gh-animate-fade-in-up gh-delay-300 gh-flex gh-flex-col sm:gh-flex-row gh-gap-4">
                <a href="<?php echo esc_url($hero_cta_url); ?>" class="gh-btn gh-btn-hero gh-btn-xl">
                    <?php echo esc_html($hero_cta_text); ?>
                    <?php echo gh_get_icon('arrow-right', 'w-5 h-5'); ?>
                </a>
                <a href="<?php echo esc_url($hero_secondary_url); ?>" class="gh-btn gh-btn-hero-outline gh-btn-xl">
                    <?php echo esc_html($hero_secondary_text); ?>
                </a>
            </div>
            
        </div>
    </div>

    <!-- Trust Bar -->
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background-color: hsl(var(--gh-background) / 0.95); backdrop-filter: blur(4px);">
        <div class="gh-container gh-py-4">
            <div class="gh-flex gh-flex-wrap gh-justify-center lg:gh-justify-between gh-items-center gh-gap-6">
                <?php foreach ($trust_items as $item) : ?>
                    <div class="gh-trust-item">
                        <div class="gh-trust-item__icon">
                            <?php echo gh_get_icon($item['icon'], 'w-4 h-4'); ?>
                        </div>
                        <span><?php echo esc_html($item['text']); ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    
</section>
