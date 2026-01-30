<?php
/**
 * Featured Products Section Template
 * Converted from: src/components/home/FeaturedProducts.tsx
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

// Get featured products if WooCommerce is active
$products = array();

if (class_exists('WooCommerce')) {
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => 8,
        'meta_query'     => array(
            array(
                'key'   => '_featured',
                'value' => 'yes',
            ),
        ),
    );
    
    $featured_query = new WP_Query($args);
    
    // If no featured products, get bestsellers
    if (!$featured_query->have_posts()) {
        $args = array(
            'post_type'      => 'product',
            'posts_per_page' => 8,
            'meta_key'       => 'total_sales',
            'orderby'        => 'meta_value_num',
            'order'          => 'DESC',
        );
        $featured_query = new WP_Query($args);
    }
    
    // If still no products, get latest
    if (!$featured_query->have_posts()) {
        $args = array(
            'post_type'      => 'product',
            'posts_per_page' => 8,
            'orderby'        => 'date',
            'order'          => 'DESC',
        );
        $featured_query = new WP_Query($args);
    }
    
    $products = $featured_query->posts;
}
?>

<section id="featured-products" class="gh-section gh-bg-muted-30">
    <div class="gh-container">
        
        <!-- Section Header -->
        <div class="gh-flex gh-flex-col md:gh-flex-row md:gh-items-end gh-justify-between gh-gap-4 gh-mb-10">
            <div>
                <span style="color: hsl(var(--gh-accent)); font-weight: 600; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">
                    <?php esc_html_e('Trending Now', 'greenhaven'); ?>
                </span>
                <h2 style="font-size: clamp(1.875rem, 3vw, 2.25rem); font-weight: 700; color: hsl(var(--gh-foreground)); margin-top: 0.5rem;">
                    <?php esc_html_e('Customer Favorites', 'greenhaven'); ?>
                </h2>
            </div>
            <a href="<?php echo esc_url(class_exists('WooCommerce') ? wc_get_page_permalink('shop') : home_url('/shop')); ?>" 
               style="color: hsl(var(--gh-primary)); font-weight: 500; text-decoration: underline; text-underline-offset: 4px;">
                <?php esc_html_e('View all bestsellers', 'greenhaven'); ?> →
            </a>
        </div>

        <!-- Products Grid -->
        <div class="gh-grid gh-grid-4">
            <?php 
            if (class_exists('WooCommerce') && !empty($products)) :
                foreach ($products as $post) :
                    setup_postdata($post);
                    $product = wc_get_product($post->ID);
                    
                    if (!$product) continue;
                    
                    $is_on_sale = $product->is_on_sale();
                    $regular_price = $product->get_regular_price();
                    $sale_price = $product->get_sale_price();
                    $average_rating = $product->get_average_rating();
                    $review_count = $product->get_review_count();
                    
                    // Calculate discount
                    $discount = 0;
                    if ($is_on_sale && $regular_price) {
                        $discount = round((1 - $sale_price / $regular_price) * 100);
                    }
                    
                    // Get category
                    $terms = get_the_terms($post->ID, 'product_cat');
                    $category_name = $terms && !is_wp_error($terms) ? $terms[0]->name : '';
            ?>
                <div class="gh-product-card">
                    <!-- Image -->
                    <div class="gh-product-card__image">
                        <a href="<?php echo esc_url(get_permalink()); ?>">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('gh-product-card', array('loading' => 'lazy')); ?>
                            <?php else : ?>
                                <img src="<?php echo esc_url(wc_placeholder_img_src()); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
                            <?php endif; ?>
                        </a>
                        
                        <?php if ($discount > 0) : ?>
                            <span class="gh-product-card__badge">-<?php echo esc_html($discount); ?>%</span>
                        <?php endif; ?>
                        
                        <button class="gh-product-card__wishlist" aria-label="<?php esc_attr_e('Add to wishlist', 'greenhaven'); ?>">
                            <?php echo gh_get_icon('heart', 'w-4 h-4'); ?>
                        </button>
                        
                        <div class="gh-product-card__quick-add">
                            <a href="?add-to-cart=<?php echo esc_attr($post->ID); ?>" 
                               class="gh-btn gh-btn-primary w-full ajax_add_to_cart"
                               data-product_id="<?php echo esc_attr($post->ID); ?>">
                                <?php echo gh_get_icon('cart', 'w-4 h-4'); ?>
                                <?php esc_html_e('Add to Cart', 'greenhaven'); ?>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Info -->
                    <div class="gh-product-card__info">
                        <?php if ($category_name) : ?>
                            <p class="gh-product-card__category"><?php echo esc_html($category_name); ?></p>
                        <?php endif; ?>
                        
                        <h3 class="gh-product-card__title">
                            <a href="<?php echo esc_url(get_permalink()); ?>">
                                <?php the_title(); ?>
                            </a>
                        </h3>
                        
                        <?php if ($average_rating > 0) : ?>
                            <div class="gh-product-card__rating">
                                <?php echo gh_get_icon('star', 'w-4 h-4'); ?>
                                <span><?php echo esc_html(number_format($average_rating, 1)); ?></span>
                                <span class="gh-product-card__rating-count">(<?php echo esc_html($review_count); ?>)</span>
                            </div>
                        <?php endif; ?>
                        
                        <div class="gh-product-card__price">
                            <span class="gh-product-card__price-current">
                                <?php echo wp_kses_post($product->get_price_html()); ?>
                            </span>
                        </div>
                    </div>
                </div>
            <?php 
                endforeach;
                wp_reset_postdata();
            else :
                // Fallback placeholder products
                $placeholder_products = array(
                    array('name' => 'Monstera Deliciosa', 'price' => 45.99, 'category' => 'Indoor Plants'),
                    array('name' => 'Echeveria Collection', 'price' => 24.99, 'category' => 'Succulents'),
                    array('name' => 'Japanese Maple', 'price' => 89.99, 'category' => 'Trees'),
                    array('name' => 'Herb Garden Starter Kit', 'price' => 29.99, 'category' => 'Herbs'),
                );
                
                foreach ($placeholder_products as $product) :
            ?>
                <div class="gh-product-card">
                    <div class="gh-product-card__image">
                        <a href="#">
                            <img src="<?php echo esc_url(GH_THEME_URI . '/assets/images/placeholder.jpg'); ?>" alt="<?php echo esc_attr($product['name']); ?>">
                        </a>
                    </div>
                    <div class="gh-product-card__info">
                        <p class="gh-product-card__category"><?php echo esc_html($product['category']); ?></p>
                        <h3 class="gh-product-card__title">
                            <a href="#"><?php echo esc_html($product['name']); ?></a>
                        </h3>
                        <div class="gh-product-card__price">
                            <span class="gh-product-card__price-current">$<?php echo esc_html(number_format($product['price'], 2)); ?></span>
                        </div>
                    </div>
                </div>
            <?php 
                endforeach;
            endif; 
            ?>
        </div>
        
    </div>
</section>
