<?php
/**
 * Front Page Template
 * Converted from: src/pages/Index.tsx
 *
 * @package GreenHaven
 */

get_header();
?>

<main id="main" class="site-main">
    
    <?php
    // Hero Section
    get_template_part('template-parts/section', 'hero');
    
    // Categories Section
    get_template_part('template-parts/section', 'categories');
    
    // Featured Products Section
    get_template_part('template-parts/section', 'products');
    
    // How We Ship Section
    get_template_part('template-parts/section', 'shipping');
    
    // FAQ Section
    get_template_part('template-parts/section', 'faq');
    ?>
    
</main>

<?php
get_footer();
