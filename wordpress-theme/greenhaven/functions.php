<?php
/**
 * Green Haven Theme Functions
 *
 * @package GreenHaven
 * @version 1.0.0
 */

defined('ABSPATH') || exit;

// Theme Constants
define('GH_THEME_VERSION', '1.0.0');
define('GH_THEME_DIR', get_template_directory());
define('GH_THEME_URI', get_template_directory_uri());

/**
 * Load theme includes
 */
$gh_includes = array(
    '/inc/theme-setup.php',       // Theme setup and supports
    '/inc/enqueue.php',           // Scripts and styles
    '/inc/helpers.php',           // Helper functions
    '/inc/customizer.php',        // Customizer settings
    '/inc/custom-post-types.php', // Custom post types
    '/inc/custom-fields.php',     // Custom meta boxes
);

foreach ($gh_includes as $file) {
    $filepath = GH_THEME_DIR . $file;
    if (file_exists($filepath)) {
        require_once $filepath;
    }
}

// WooCommerce Support
if (class_exists('WooCommerce')) {
    require_once GH_THEME_DIR . '/inc/woocommerce.php';
}

/**
 * Theme Activation Hook
 */
function gh_theme_activation() {
    // Flush rewrite rules
    flush_rewrite_rules();
    
    // Set default options
    if (!get_option('gh_theme_options')) {
        update_option('gh_theme_options', array(
            'announcement_text' => '🌿 Free Shipping on Orders $75+ | 100% Live Arrival Guarantee',
            'phone' => '(555) 123-4567',
            'email' => 'support@greenhaven.com',
            'address' => '1234 Garden Way, Portland, OR 97201',
        ));
    }
}
add_action('after_switch_theme', 'gh_theme_activation');

/**
 * Theme Deactivation Hook
 */
function gh_theme_deactivation() {
    flush_rewrite_rules();
}
add_action('switch_theme', 'gh_theme_deactivation');
