<?php
/**
 * Index Template (Fallback)
 *
 * @package GreenHaven
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="gh-container gh-section">
        
        <?php if (have_posts()) : ?>
            
            <div class="gh-grid gh-grid-3">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('gh-card'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>" class="block aspect-video overflow-hidden">
                                <?php the_post_thumbnail('medium_large', array('class' => 'w-full h-full object-cover')); ?>
                            </a>
                        <?php endif; ?>
                        
                        <div class="gh-p-6">
                            <h2 class="gh-text-xl gh-font-semibold gh-mb-2">
                                <a href="<?php the_permalink(); ?>" class="hover:text-primary transition-colors">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <div class="gh-text-sm gh-text-muted-foreground gh-mb-4">
                                <?php echo get_the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="gh-btn gh-btn-primary gh-btn-sm">
                                <?php esc_html_e('Read More', 'greenhaven'); ?>
                                <?php echo gh_get_icon('arrow-right', 'w-4 h-4'); ?>
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <?php the_posts_pagination(array(
                'prev_text' => '← ' . __('Previous', 'greenhaven'),
                'next_text' => __('Next', 'greenhaven') . ' →',
            )); ?>
            
        <?php else : ?>
            
            <div class="gh-text-center gh-py-12">
                <h2 class="gh-text-2xl gh-font-semibold gh-mb-4">
                    <?php esc_html_e('Nothing Found', 'greenhaven'); ?>
                </h2>
                <p class="gh-text-muted-foreground gh-mb-6">
                    <?php esc_html_e('It seems we can\'t find what you\'re looking for.', 'greenhaven'); ?>
                </p>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="gh-btn gh-btn-primary">
                    <?php esc_html_e('Go Home', 'greenhaven'); ?>
                </a>
            </div>
            
        <?php endif; ?>
        
    </div>
</main>

<?php
get_footer();
