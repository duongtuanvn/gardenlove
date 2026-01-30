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
$hero_image = get_theme_mod('gh_hero_image', '');
$hero_cta_text = get_theme_mod('gh_hero_cta_text', 'Shop Plants');
$hero_cta_url = get_theme_mod('gh_hero_cta_url', class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/shop'));
$hero_secondary_text = get_theme_mod('gh_hero_secondary_text', 'Our Guarantee');
$hero_secondary_url = get_theme_mod('gh_hero_secondary_url', home_url('/guarantee'));

// Check if we have a valid hero image
$has_hero_image = !empty($hero_image) && $hero_image !== '';

// Trust bar items
$trust_items = array(
    array('icon' => 'shield', 'text' => __('100% Live Arrival Guarantee', 'greenhaven')),
    array('icon' => 'truck', 'text' => __('Expert Packaging & Fast Shipping', 'greenhaven')),
    array('icon' => 'leaf', 'text' => __('Grown with Care in the USA', 'greenhaven')),
    array('icon' => 'refresh', 'text' => __('30-Day Money-Back Guarantee', 'greenhaven')),
);
?>

<section id="hero" class="gh-hero">
    
    <!-- Background -->
    <div class="gh-hero__background">
        <?php if ($has_hero_image) : ?>
            <img
                src="<?php echo esc_url($hero_image); ?>"
                alt="<?php echo esc_attr(get_bloginfo('name')); ?> greenhouse"
                class="gh-hero__image"
                loading="eager"
            >
        <?php endif; ?>
        <div class="gh-hero-overlay"></div>
    </div>

    <!-- Content -->
    <div class="gh-container gh-hero__content">
        <div class="gh-hero__text">
            
            <!-- Badge -->
            <span class="gh-hero__badge gh-animate-fade-in-up">
                <?php echo gh_get_icon('leaf', 'w-4 h-4'); ?>
                <?php echo esc_html($hero_badge); ?>
            </span>
            
            <!-- Title -->
            <h1 class="gh-hero__title gh-animate-fade-in-up gh-delay-100">
                <?php echo esc_html($hero_title); ?>
            </h1>
            
            <!-- Subtitle -->
            <p class="gh-hero__subtitle gh-animate-fade-in-up gh-delay-200">
                <?php echo esc_html($hero_subtitle); ?>
            </p>
            
            <!-- CTAs -->
            <div class="gh-hero__ctas gh-animate-fade-in-up gh-delay-300">
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
    <div class="gh-hero__trust-bar">
        <div class="gh-container">
            <div class="gh-hero__trust-items">
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
