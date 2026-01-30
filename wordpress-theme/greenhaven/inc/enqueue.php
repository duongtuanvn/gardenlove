<?php
/**
 * Enqueue Scripts and Styles
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

/**
 * Enqueue frontend scripts and styles
 */
function gh_enqueue_assets() {
    // Main stylesheet (style.css with all CSS)
    wp_enqueue_style(
        'greenhaven-style',
        get_stylesheet_uri(),
        array(),
        GH_THEME_VERSION
    );

    // Additional CSS (if needed for WooCommerce overrides)
    if (class_exists('WooCommerce')) {
        wp_enqueue_style(
            'greenhaven-woocommerce',
            GH_THEME_URI . '/assets/css/woocommerce.css',
            array('greenhaven-style'),
            GH_THEME_VERSION
        );
    }

    // Main JavaScript
    wp_enqueue_script(
        'greenhaven-main',
        GH_THEME_URI . '/assets/js/main.js',
        array(),
        GH_THEME_VERSION,
        true
    );

    // Localize script for AJAX
    wp_localize_script('greenhaven-main', 'ghTheme', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('gh_ajax_nonce'),
        'homeUrl' => home_url('/'),
    ));

    // WooCommerce cart functionality
    if (class_exists('WooCommerce')) {
        wp_enqueue_script(
            'greenhaven-cart',
            GH_THEME_URI . '/assets/js/cart.js',
            array('jquery'),
            GH_THEME_VERSION,
            true
        );

        wp_localize_script('greenhaven-cart', 'ghCart', array(
            'ajaxUrl'  => admin_url('admin-ajax.php'),
            'nonce'    => wp_create_nonce('gh_cart_nonce'),
            'cartUrl'  => wc_get_cart_url(),
            'checkoutUrl' => wc_get_checkout_url(),
        ));
    }

    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'gh_enqueue_assets');

/**
 * Preload fonts
 */
function gh_preload_fonts() {
    ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"></noscript>
    <?php
}
add_action('wp_head', 'gh_preload_fonts', 1);

/**
 * Add preload for critical assets
 */
function gh_add_resource_hints($urls, $relation_type) {
    if ($relation_type === 'preconnect') {
        $urls[] = 'https://fonts.googleapis.com';
        $urls[] = 'https://fonts.gstatic.com';
    }
    return $urls;
}
add_filter('wp_resource_hints', 'gh_add_resource_hints', 10, 2);

/**
 * Admin scripts and styles
 */
function gh_admin_enqueue_assets($hook) {
    // Only load on our settings pages
    if (strpos($hook, 'greenhaven') === false) {
        return;
    }

    wp_enqueue_style(
        'greenhaven-admin',
        GH_THEME_URI . '/assets/css/admin.css',
        array(),
        GH_THEME_VERSION
    );

    wp_enqueue_script(
        'greenhaven-admin',
        GH_THEME_URI . '/assets/js/admin.js',
        array('jquery'),
        GH_THEME_VERSION,
        true
    );
}
add_action('admin_enqueue_scripts', 'gh_admin_enqueue_assets');

/**
 * Defer non-critical JavaScript
 */
function gh_defer_scripts($tag, $handle, $src) {
    $defer_scripts = array('greenhaven-main', 'greenhaven-cart');
    
    if (in_array($handle, $defer_scripts)) {
        return str_replace(' src', ' defer src', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'gh_defer_scripts', 10, 3);

/**
 * Remove unnecessary default scripts
 */
function gh_remove_default_scripts() {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    
    // Remove wp-embed
    wp_deregister_script('wp-embed');
}
add_action('init', 'gh_remove_default_scripts');
