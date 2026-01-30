<?php
/**
 * 404 Template
 *
 * @package GreenHaven
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="gh-container gh-section gh-text-center" style="min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h1 style="font-size: 6rem; font-weight: 700; color: hsl(var(--gh-primary)); margin-bottom: 1rem;">404</h1>
        <h2 class="gh-text-2xl gh-font-semibold gh-mb-4"><?php esc_html_e('Page Not Found', 'greenhaven'); ?></h2>
        <p class="gh-text-muted-foreground gh-mb-8" style="max-width: 24rem;">
            <?php esc_html_e('The page you\'re looking for doesn\'t exist or has been moved.', 'greenhaven'); ?>
        </p>
        <div class="gh-flex gh-gap-4">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="gh-btn gh-btn-primary">
                <?php esc_html_e('Go Home', 'greenhaven'); ?>
            </a>
            <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/shop')); ?>" class="gh-btn gh-btn-outline">
                <?php esc_html_e('Shop Plants', 'greenhaven'); ?>
            </a>
        </div>
    </div>
</main>

<?php get_footer(); ?>
