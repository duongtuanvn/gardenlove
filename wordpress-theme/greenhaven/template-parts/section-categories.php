<?php
/**
 * Categories Section Template
 * Converted from: src/components/home/CategoriesSection.tsx
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

// Get product categories if WooCommerce is active
$categories = array();

if (class_exists('WooCommerce')) {
    $categories = get_terms(array(
        'taxonomy'   => 'product_cat',
        'hide_empty' => true,
        'parent'     => 0,
        'number'     => 6,
        'orderby'    => 'count',
        'order'      => 'DESC',
    ));
}

// Fallback categories if WooCommerce not active or no categories
if (empty($categories) || is_wp_error($categories)) {
    $categories = array(
        (object) array('name' => 'Indoor Plants', 'slug' => 'indoor', 'count' => 120, 'term_id' => 0),
        (object) array('name' => 'Trees', 'slug' => 'trees', 'count' => 80, 'term_id' => 0),
        (object) array('name' => 'Perennials', 'slug' => 'perennials', 'count' => 150, 'term_id' => 0),
        (object) array('name' => 'Succulents', 'slug' => 'succulents', 'count' => 60, 'term_id' => 0),
        (object) array('name' => 'Shrubs', 'slug' => 'shrubs', 'count' => 90, 'term_id' => 0),
        (object) array('name' => 'Herbs & Edibles', 'slug' => 'herbs', 'count' => 40, 'term_id' => 0),
    );
}
?>

<section id="categories" class="gh-section">
    <div class="gh-container">
        
        <!-- Section Header -->
        <div class="gh-flex gh-flex-col md:gh-flex-row md:gh-items-end gh-justify-between gh-gap-4 gh-mb-10">
            <div>
                <h2 style="font-size: clamp(1.875rem, 3vw, 2.25rem); font-weight: 700; color: hsl(var(--gh-foreground)); margin-bottom: 0.5rem;">
                    <?php esc_html_e('Shop by Category', 'greenhaven'); ?>
                </h2>
                <p style="font-size: 1.125rem; color: hsl(var(--gh-muted-foreground));">
                    <?php esc_html_e('Find the perfect plants for your space', 'greenhaven'); ?>
                </p>
            </div>
            <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/shop')); ?>" 
               style="color: hsl(var(--gh-primary)); font-weight: 500; text-decoration: underline; text-underline-offset: 4px;">
                <?php esc_html_e('View all categories', 'greenhaven'); ?> →
            </a>
        </div>

        <!-- Categories Grid -->
        <div class="gh-grid gh-grid-6">
            <?php foreach ($categories as $category) :
                // Get category image
                if (class_exists('WooCommerce') && $category->term_id > 0) {
                    $thumbnail_id = get_term_meta($category->term_id, 'thumbnail_id', true);
                    $image = $thumbnail_id ? wp_get_attachment_url($thumbnail_id) : wc_placeholder_img_src();
                    $link = get_term_link($category);
                } else {
                    $image = GH_THEME_URI . '/assets/images/category-' . $category->slug . '.jpg';
                    $link = home_url('/collections/' . $category->slug);
                }
            ?>
                <a href="<?php echo esc_url($link); ?>" class="gh-category-card">
                    <img
                        src="<?php echo esc_url($image); ?>"
                        alt="<?php echo esc_attr($category->name); ?> collection"
                        loading="lazy"
                    >
                    <div class="gh-category-card__content">
                        <h3 class="gh-category-card__title">
                            <?php echo esc_html($category->name); ?>
                        </h3>
                        <p class="gh-category-card__count">
                            <?php echo esc_html($category->count); ?>+ <?php esc_html_e('varieties', 'greenhaven'); ?>
                        </p>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
        
    </div>
</section>
