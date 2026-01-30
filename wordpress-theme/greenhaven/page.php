<?php
/**
 * Page Template
 *
 * @package GreenHaven
 */

get_header();
?>

<main id="main" class="site-main">
    
    <!-- Page Header -->
    <div class="gh-bg-muted-30 gh-py-8" style="border-bottom: 1px solid hsl(var(--gh-border));">
        <div class="gh-container">
            <?php gh_breadcrumbs(); ?>
            <h1 class="gh-text-3xl gh-font-bold gh-mt-4"><?php the_title(); ?></h1>
        </div>
    </div>
    
    <div class="gh-container gh-section">
        <?php
        while (have_posts()) :
            the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="entry-content" style="max-width: 48rem;">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'greenhaven'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>
        <?php
        endwhile;
        ?>
    </div>
    
</main>

<?php
get_footer();
