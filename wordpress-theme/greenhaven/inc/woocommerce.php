<?php
/**
 * WooCommerce Customizations
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

/**
 * Declare WooCommerce support
 */
function gh_woocommerce_support() {
    add_theme_support('woocommerce', array(
        'thumbnail_image_width' => 400,
        'single_image_width'    => 600,
        'product_grid'          => array(
            'default_rows'    => 4,
            'min_rows'        => 2,
            'max_rows'        => 8,
            'default_columns' => 4,
            'min_columns'     => 2,
            'max_columns'     => 6,
        ),
    ));
    
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
}
add_action('after_setup_theme', 'gh_woocommerce_support');

/**
 * Remove default WooCommerce styles
 */
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

/**
 * Modify products per page
 */
function gh_products_per_page($cols) {
    return 12;
}
add_filter('loop_shop_per_page', 'gh_products_per_page');

/**
 * Modify product columns
 */
function gh_loop_columns() {
    return 4;
}
add_filter('loop_shop_columns', 'gh_loop_columns');

/**
 * Remove default WooCommerce wrappers
 */
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

/**
 * Add custom wrappers
 */
function gh_woocommerce_wrapper_before() {
    ?>
    <main id="main" class="site-main">
        <div class="gh-container gh-section">
    <?php
}
add_action('woocommerce_before_main_content', 'gh_woocommerce_wrapper_before');

function gh_woocommerce_wrapper_after() {
    ?>
        </div>
    </main>
    <?php
}
add_action('woocommerce_after_main_content', 'gh_woocommerce_wrapper_after');

/**
 * Remove sidebar from shop
 */
remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar', 10);

/**
 * Custom add to cart AJAX handler
 */
function gh_ajax_add_to_cart() {
    check_ajax_referer('gh_cart_nonce', 'nonce');
    
    $product_id = absint($_POST['product_id']);
    $quantity = empty($_POST['quantity']) ? 1 : wc_stock_amount(absint($_POST['quantity']));
    $variation_id = isset($_POST['variation_id']) ? absint($_POST['variation_id']) : 0;
    $variation = isset($_POST['variation']) ? (array) $_POST['variation'] : array();
    
    $passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $product_id, $quantity);
    
    if ($passed_validation && WC()->cart->add_to_cart($product_id, $quantity, $variation_id, $variation)) {
        do_action('woocommerce_ajax_added_to_cart', $product_id);
        
        // Get mini cart HTML
        ob_start();
        woocommerce_mini_cart();
        $mini_cart = ob_get_clean();
        
        wp_send_json(array(
            'success'    => true,
            'cart_count' => WC()->cart->get_cart_contents_count(),
            'cart_total' => WC()->cart->get_cart_total(),
            'message'    => __('Product added to cart!', 'greenhaven'),
            'mini_cart'  => $mini_cart,
        ));
    } else {
        wp_send_json(array(
            'success' => false,
            'message' => __('Error adding product to cart', 'greenhaven'),
        ));
    }
    
    wp_die();
}
add_action('wp_ajax_gh_add_to_cart', 'gh_ajax_add_to_cart');
add_action('wp_ajax_nopriv_gh_add_to_cart', 'gh_ajax_add_to_cart');

/**
 * Update cart count fragment
 */
function gh_cart_count_fragment($fragments) {
    $count = WC()->cart->get_cart_contents_count();
    
    if ($count > 0) {
        $fragments['.gh-cart-count'] = '<span class="gh-cart-count" style="position: absolute; top: -0.25rem; right: -0.25rem; width: 1.25rem; height: 1.25rem; background-color: hsl(var(--gh-accent)); color: hsl(var(--gh-accent-foreground)); font-size: 0.75rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; font-weight: 600;">' . esc_html($count) . '</span>';
    } else {
        $fragments['.gh-cart-count'] = '';
    }
    
    return $fragments;
}
add_filter('woocommerce_add_to_cart_fragments', 'gh_cart_count_fragment');

/**
 * Customize product loop item
 */
remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5);
remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10);
remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);
remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);

/**
 * Custom product card output
 */
function gh_custom_product_card() {
    get_template_part('template-parts/product', 'card');
}
add_action('woocommerce_before_shop_loop_item', 'gh_custom_product_card');

/**
 * Customize single product
 */
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);

/**
 * Add structured data for products (SEO)
 */
function gh_product_schema() {
    if (!is_product()) return;
    
    global $product;
    
    // Ensure $product is a valid WC_Product object
    if (!$product || !is_a($product, 'WC_Product')) {
        $product = wc_get_product(get_the_ID());
    }
    
    if (!$product) return;
    
    $schema = array(
        '@context'    => 'https://schema.org/',
        '@type'       => 'Product',
        'name'        => $product->get_name(),
        'description' => wp_strip_all_tags($product->get_description()),
        'sku'         => $product->get_sku(),
        'image'       => wp_get_attachment_url($product->get_image_id()),
        'offers'      => array(
            '@type'         => 'Offer',
            'url'           => get_permalink($product->get_id()),
            'priceCurrency' => get_woocommerce_currency(),
            'price'         => $product->get_price(),
            'availability'  => $product->is_in_stock() ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        ),
    );
    
    // Add rating if available
    $rating = $product->get_average_rating();
    $review_count = $product->get_review_count();
    
    if ($rating > 0 && $review_count > 0) {
        $schema['aggregateRating'] = array(
            '@type'       => 'AggregateRating',
            'ratingValue' => $rating,
            'reviewCount' => $review_count,
        );
    }
    
    echo '<script type="application/ld+json">' . wp_json_encode($schema) . '</script>';
}
add_action('wp_head', 'gh_product_schema');

/**
 * Modify breadcrumb separator
 */
function gh_woocommerce_breadcrumb_defaults($args) {
    $args['delimiter'] = ' <svg class="w-4 h-4" style="display: inline; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> ';
    $args['wrap_before'] = '<nav class="woocommerce-breadcrumb gh-text-sm gh-mb-6" aria-label="Breadcrumb">';
    $args['wrap_after'] = '</nav>';
    return $args;
}
add_filter('woocommerce_breadcrumb_defaults', 'gh_woocommerce_breadcrumb_defaults');
