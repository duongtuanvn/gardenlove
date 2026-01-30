<?php
/**
 * Search Results Template
 *
 * @package GreenHaven
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="gh-bg-muted-30 gh-py-8" style="border-bottom: 1px solid hsl(var(--gh-border));">
        <div class="gh-container">
            <h1 class="gh-text-3xl gh-font-bold">
                <?php printf(esc_html__('Search Results for: %s', 'greenhaven'), '<span>' . get_search_query() . '</span>'); ?>
            </h1>
        </div>
    </div>

    <div class="gh-container gh-section">
        <?php if (have_posts()) : ?>
            <div class="gh-grid gh-grid-3">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="gh-card">
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>" class="block aspect-video overflow-hidden">
                                <?php the_post_thumbnail('medium_large', array('class' => 'w-full h-full object-cover')); ?>
                            </a>
                        <?php endif; ?>
                        <div class="gh-p-6">
                            <p class="gh-text-xs gh-text-muted-foreground gh-mb-1"><?php echo get_post_type_object(get_post_type())->labels->singular_name; ?></p>
                            <h2 class="gh-text-xl gh-font-semibold gh-mb-2">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="gh-text-sm gh-text-muted-foreground"><?php echo get_the_excerpt(); ?></div>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            <?php the_posts_pagination(); ?>
        <?php else : ?>
            <div class="gh-text-center gh-py-12">
                <p class="gh-text-muted-foreground gh-mb-6"><?php esc_html_e('No results found. Try a different search term.', 'greenhaven'); ?></p>
                <?php get_search_form(); ?>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
