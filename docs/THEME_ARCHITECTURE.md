# Green Haven WordPress Theme Architecture

> Complete technical specification for the WordPress/WooCommerce theme

## 📁 Theme File Structure

```
wordpress-theme/greenhaven/
│
├── style.css                    # Theme metadata + base styles
├── functions.php                # Theme bootstrap
├── screenshot.png               # Theme preview (1200x900)
├── README.md                    # Installation guide
│
├── # CORE TEMPLATES
├── index.php                    # Fallback template
├── front-page.php               # Homepage
├── header.php                   # Site header
├── footer.php                   # Site footer
├── page.php                     # Default page
├── single.php                   # Single post
├── archive.php                  # Archive pages
├── search.php                   # Search results
├── 404.php                      # Not found
│
├── # PAGE TEMPLATES
├── page-about.php               # About Us
├── page-contact.php             # Contact
├── page-faq.php                 # FAQ
├── page-accessibility.php       # Accessibility
├── page-privacy-policy.php      # Privacy Policy
├── page-terms-of-service.php    # Terms of Service
├── page-returns-refunds.php     # Returns & Refunds
├── page-shipping-info.php       # Shipping Info
├── page-live-arrival-guarantee.php  # Live Arrival Guarantee
│
├── # CUSTOM POST TYPE TEMPLATES
├── archive-guide.php            # Learning Center
├── single-guide.php             # Guide Detail
├── archive-plant-care.php       # Plant Care Archive
├── single-plant-care.php        # Plant Care Detail
│
├── # WOOCOMMERCE TEMPLATES
├── /woocommerce/
│   ├── archive-product.php      # Collections/Shop
│   ├── single-product.php       # Product Detail
│   ├── content-product.php      # Product Card
│   ├── /cart/
│   │   ├── cart.php
│   │   ├── cart-empty.php
│   │   └── mini-cart.php
│   ├── /checkout/
│   │   ├── form-checkout.php
│   │   ├── form-billing.php
│   │   ├── form-shipping.php
│   │   ├── review-order.php
│   │   └── thankyou.php
│   ├── /loop/
│   │   ├── pagination.php
│   │   ├── result-count.php
│   │   └── orderby.php
│   ├── /single-product/
│   │   ├── title.php
│   │   ├── price.php
│   │   ├── add-to-cart/
│   │   ├── meta.php
│   │   ├── tabs/
│   │   └── related.php
│   └── /global/
│       ├── breadcrumb.php
│       └── quantity-input.php
│
├── # TEMPLATE PARTS
├── /template-parts/
│   ├── /layout/
│   │   ├── header-nav.php
│   │   ├── header-announcement.php
│   │   ├── footer-widgets.php
│   │   └── footer-bottom.php
│   ├── /sections/
│   │   ├── section-hero.php
│   │   ├── section-categories.php
│   │   ├── section-products.php
│   │   ├── section-shipping.php
│   │   ├── section-faq.php
│   │   └── section-trust.php
│   └── /components/
│       ├── product-card.php
│       ├── category-card.php
│       ├── breadcrumbs.php
│       ├── search-form.php
│       └── social-icons.php
│
├── # INCLUDES
├── /inc/
│   ├── theme-setup.php          # Theme supports, menus, image sizes
│   ├── enqueue.php              # Scripts & styles
│   ├── helpers.php              # Helper functions
│   ├── customizer.php           # Customizer settings
│   ├── custom-post-types.php    # CPT definitions
│   ├── custom-fields.php        # Meta boxes
│   ├── woocommerce.php          # WooCommerce integration
│   ├── seo.php                  # SEO & Schema
│   └── headless.php             # GraphQL/REST customizations
│
├── # ASSETS
├── /assets/
│   ├── /css/
│   │   ├── tailwind.css         # Compiled Tailwind
│   │   ├── woocommerce.css      # WooCommerce overrides
│   │   └── admin.css            # Admin styles
│   ├── /js/
│   │   ├── main.js              # Main scripts
│   │   ├── cart.js              # AJAX cart
│   │   └── admin.js             # Admin scripts
│   └── /images/
│       └── placeholder.svg
│
└── # GUTENBERG BLOCKS (Optional)
    └── /blocks/
        ├── hero-block/
        ├── product-grid-block/
        └── faq-block/
```

---

## 🔧 Core Files Specification

### style.css

```css
/*
Theme Name: Green Haven Nursery
Theme URI: https://greenhaven.com
Author: Green Haven LLC
Author URI: https://greenhaven.com
Description: Premium plant nursery theme with WooCommerce integration
Version: 1.0.0
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 8.0
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: greenhaven
Tags: e-commerce, woocommerce, custom-colors, custom-logo

Green Haven Nursery - Online Plant Store Theme
*/

/* CSS Variables - Design Tokens */
:root {
  /* Primary Palette */
  --gh-primary: 142 40% 35%;
  --gh-primary-foreground: 0 0% 100%;
  
  /* Secondary */
  --gh-secondary: 45 30% 96%;
  --gh-secondary-foreground: 142 40% 20%;
  
  /* Accent (Terracotta) */
  --gh-accent: 16 60% 55%;
  --gh-accent-foreground: 0 0% 100%;
  
  /* Neutrals */
  --gh-background: 45 30% 98%;
  --gh-foreground: 142 40% 15%;
  --gh-muted: 45 20% 94%;
  --gh-muted-foreground: 142 20% 45%;
  --gh-border: 142 20% 88%;
  --gh-card: 0 0% 100%;
  
  /* Typography */
  --gh-font-display: 'Playfair Display', serif;
  --gh-font-body: 'Inter', sans-serif;
  
  /* Spacing */
  --gh-container: 1280px;
  --gh-section-padding: 4rem;
  
  /* Shadows */
  --gh-shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.06);
  --gh-shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.1);
  
  /* Radius */
  --gh-radius: 0.75rem;
  --gh-radius-lg: 1.5rem;
}
```

### functions.php

```php
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

// Load includes
$gh_includes = [
    '/inc/theme-setup.php',
    '/inc/enqueue.php',
    '/inc/helpers.php',
    '/inc/customizer.php',
    '/inc/custom-post-types.php',
    '/inc/custom-fields.php',
    '/inc/seo.php',
];

foreach ($gh_includes as $file) {
    require_once GH_THEME_DIR . $file;
}

// WooCommerce support
if (class_exists('WooCommerce')) {
    require_once GH_THEME_DIR . '/inc/woocommerce.php';
}

// Headless support
if (defined('GRAPHQL_DEBUG') || wp_doing_ajax()) {
    require_once GH_THEME_DIR . '/inc/headless.php';
}
```

---

## 📄 Template Specifications

### front-page.php (Homepage)

Maps to: `src/pages/Index.tsx`

```php
<?php get_header(); ?>

<main id="main" class="site-main">
    <?php
    get_template_part('template-parts/sections/section', 'hero');
    get_template_part('template-parts/sections/section', 'categories');
    get_template_part('template-parts/sections/section', 'products');
    get_template_part('template-parts/sections/section', 'shipping');
    get_template_part('template-parts/sections/section', 'faq');
    ?>
</main>

<?php get_footer(); ?>
```

### woocommerce/archive-product.php (Collections)

Maps to: `src/pages/Collections.tsx`

```php
<?php
get_header();

// Get current category
$current_cat = get_queried_object();
$is_shop = is_shop();
?>

<main id="main" class="site-main">
    <!-- Breadcrumbs -->
    <div class="gh-bg-muted-30 gh-py-4">
        <div class="gh-container">
            <?php woocommerce_breadcrumb(); ?>
        </div>
    </div>

    <div class="gh-container gh-section">
        <div class="gh-grid gh-grid-sidebar">
            <!-- Sidebar Filters -->
            <aside class="gh-sidebar">
                <?php get_template_part('template-parts/shop/sidebar', 'filters'); ?>
            </aside>

            <!-- Product Grid -->
            <div class="gh-main">
                <?php if (woocommerce_product_loop()): ?>
                    <header class="gh-shop-header">
                        <?php woocommerce_result_count(); ?>
                        <?php woocommerce_catalog_ordering(); ?>
                    </header>

                    <div class="gh-product-grid">
                        <?php while (have_posts()): the_post(); ?>
                            <?php get_template_part('template-parts/components/product', 'card'); ?>
                        <?php endwhile; ?>
                    </div>

                    <?php woocommerce_pagination(); ?>
                <?php else: ?>
                    <?php get_template_part('template-parts/shop/no', 'products'); ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
```

### woocommerce/single-product.php (Product Detail)

Maps to: `src/pages/ProductDetail.tsx`

```php
<?php
get_header();

while (have_posts()): the_post();
    global $product;
?>

<main id="main" class="site-main">
    <!-- Breadcrumbs -->
    <div class="gh-bg-muted-30 gh-py-4">
        <div class="gh-container">
            <?php woocommerce_breadcrumb(); ?>
        </div>
    </div>

    <div class="gh-container gh-section">
        <div class="gh-product-layout">
            <!-- Gallery -->
            <div class="gh-product-gallery">
                <?php woocommerce_show_product_images(); ?>
            </div>

            <!-- Details -->
            <div class="gh-product-details">
                <?php woocommerce_template_single_title(); ?>
                <?php woocommerce_template_single_rating(); ?>
                <?php woocommerce_template_single_price(); ?>
                <?php woocommerce_template_single_excerpt(); ?>
                <?php woocommerce_template_single_add_to_cart(); ?>
                <?php woocommerce_template_single_meta(); ?>
                
                <!-- Trust Badges -->
                <?php get_template_part('template-parts/components/trust', 'badges'); ?>
            </div>
        </div>

        <!-- Tabs -->
        <?php woocommerce_output_product_data_tabs(); ?>

        <!-- Related Products -->
        <?php woocommerce_output_related_products(); ?>
    </div>
</main>

<?php
endwhile;
get_footer();
?>
```

---

## 🛠️ Include Files

### inc/theme-setup.php

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
    add_theme_support('html5', ['search-form', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('custom-logo', [
        'height' => 60,
        'width' => 200,
        'flex-width' => true,
        'flex-height' => true,
    ]);
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');

    // WooCommerce
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    // Navigation menus
    register_nav_menus([
        'primary' => __('Primary Navigation', 'greenhaven'),
        'footer-shop' => __('Footer - Shop', 'greenhaven'),
        'footer-help' => __('Footer - Help', 'greenhaven'),
        'footer-learn' => __('Footer - Learn', 'greenhaven'),
    ]);

    // Image sizes
    add_image_size('gh-product-card', 400, 400, true);
    add_image_size('gh-product-detail', 800, 800, false);
    add_image_size('gh-hero', 1920, 1080, true);
    add_image_size('gh-category', 600, 400, true);
}
add_action('after_setup_theme', 'gh_theme_setup');
```

### inc/woocommerce.php

```php
<?php
/**
 * WooCommerce Integration
 */

// Remove default WooCommerce styles
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

// Products per page
add_filter('loop_shop_per_page', function() {
    return get_theme_mod('gh_products_per_page', 12);
});

// Product grid columns
add_filter('loop_shop_columns', function() {
    return get_theme_mod('gh_products_columns', 4);
});

// Custom product card
remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open');
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close');
remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash');
remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail');
remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title');
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating');
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price');
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');

// AJAX Add to Cart
add_filter('woocommerce_add_to_cart_fragments', 'gh_cart_fragments');
function gh_cart_fragments($fragments) {
    ob_start();
    ?>
    <span class="gh-cart-count"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
    <?php
    $fragments['.gh-cart-count'] = ob_get_clean();
    
    ob_start();
    woocommerce_mini_cart();
    $fragments['div.gh-mini-cart-content'] = '<div class="gh-mini-cart-content">' . ob_get_clean() . '</div>';
    
    return $fragments;
}
```

---

## 🎨 CSS Class Naming Convention

All custom classes use `gh-` prefix:

| Category | Pattern | Example |
|----------|---------|---------|
| Layout | `gh-{layout}` | `gh-container`, `gh-grid`, `gh-flex` |
| Spacing | `gh-{p/m}{direction}-{size}` | `gh-py-8`, `gh-mt-4` |
| Typography | `gh-text-{size}`, `gh-font-{weight}` | `gh-text-xl`, `gh-font-bold` |
| Colors | `gh-{bg/text}-{color}` | `gh-bg-primary`, `gh-text-muted` |
| Components | `gh-{component}` | `gh-card`, `gh-btn`, `gh-badge` |
| States | `gh-{component}--{state}` | `gh-btn--disabled`, `gh-card--hover` |

---

## 📦 Required Plugins

| Plugin | Purpose | Required |
|--------|---------|----------|
| WooCommerce | E-commerce functionality | ✅ Yes |
| WPGraphQL | GraphQL API (headless) | For headless only |
| WooGraphQL | WooCommerce GraphQL | For headless only |
| Yoast SEO | SEO optimization | Recommended |
| WP Super Cache | Performance | Recommended |

---

## 🚀 Installation

1. **Upload Theme**
   ```
   Appearance → Themes → Add New → Upload Theme
   ```

2. **Activate Theme**

3. **Install WooCommerce**
   ```
   Plugins → Add New → Search "WooCommerce"
   ```

4. **Create Pages**
   - Create pages with slugs matching template names
   - Set Front Page in Settings → Reading

5. **Configure Menus**
   ```
   Appearance → Menus
   ```

6. **Customize Theme**
   ```
   Appearance → Customize → Green Haven Options
   ```
