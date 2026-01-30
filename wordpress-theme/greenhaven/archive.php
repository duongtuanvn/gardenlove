<?php
/**
 * Archive Template
 *
 * @package GreenHaven
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="gh-bg-muted-30 gh-py-8" style="border-bottom: 1px solid hsl(var(--gh-border));">
        <div class="gh-container">
            <?php gh_breadcrumbs(); ?>
            <h1 class="gh-text-3xl gh-font-bold gh-mt-4"><?php the_archive_title(); ?></h1>
            <?php the_archive_description('<p class="gh-text-muted-foreground gh-mt-2">', '</p>'); ?>
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
                            <h2 class="gh-text-xl gh-font-semibold gh-mb-2">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="gh-text-sm gh-text-muted-foreground gh-mb-4"><?php echo get_the_excerpt(); ?></div>
                            <a href="<?php the_permalink(); ?>" class="gh-btn gh-btn-primary gh-btn-sm"><?php esc_html_e('Read More', 'greenhaven'); ?></a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            <?php the_posts_pagination(); ?>
        <?php else : ?>
            <p class="gh-text-center gh-text-muted-foreground"><?php esc_html_e('No posts found.', 'greenhaven'); ?></p>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
