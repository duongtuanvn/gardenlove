<?php
/**
 * Single Post Template
 *
 * @package GreenHaven
 */

get_header();
?>

<main id="main" class="site-main">
    
    <!-- Post Header -->
    <div class="gh-bg-muted-30 gh-py-8" style="border-bottom: 1px solid hsl(var(--gh-border));">
        <div class="gh-container">
            <?php gh_breadcrumbs(); ?>
        </div>
    </div>
    
    <div class="gh-container gh-section">
        <div class="gh-grid" style="grid-template-columns: 1fr;">
            
            <?php while (have_posts()) : the_post(); ?>
                
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="max-width: 48rem; margin: 0 auto;">
                    
                    <header class="entry-header gh-mb-8">
                        <?php
                        $categories = get_the_category();
                        if ($categories) :
                        ?>
                            <div class="gh-mb-4">
                                <?php foreach ($categories as $category) : ?>
                                    <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>" 
                                       class="gh-text-sm gh-font-semibold" 
                                       style="color: hsl(var(--gh-accent)); text-transform: uppercase; letter-spacing: 0.05em;">
                                        <?php echo esc_html($category->name); ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        
                        <h1 class="gh-text-4xl gh-font-bold gh-mb-4"><?php the_title(); ?></h1>
                        
                        <div class="gh-flex gh-items-center gh-gap-4 gh-text-sm gh-text-muted-foreground">
                            <span><?php echo get_the_date(); ?></span>
                            <span>•</span>
                            <span><?php echo esc_html(gh_reading_time(get_the_content())); ?> <?php esc_html_e('min read', 'greenhaven'); ?></span>
                        </div>
                    </header>
                    
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="gh-mb-8" style="border-radius: var(--gh-radius-xl); overflow: hidden;">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-auto')); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="entry-content" style="font-size: 1.125rem; line-height: 1.8;">
                        <?php the_content(); ?>
                    </div>
                    
                    <footer class="entry-footer gh-mt-12 gh-pt-8" style="border-top: 1px solid hsl(var(--gh-border));">
                        <?php
                        $tags = get_the_tags();
                        if ($tags) :
                        ?>
                            <div class="gh-flex gh-flex-wrap gh-gap-2 gh-mb-8">
                                <?php foreach ($tags as $tag) : ?>
                                    <a href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>" 
                                       class="gh-text-sm gh-px-3 gh-py-1"
                                       style="background-color: hsl(var(--gh-muted)); border-radius: 9999px;">
                                        #<?php echo esc_html($tag->name); ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        
                        <!-- Post Navigation -->
                        <nav class="gh-grid gh-grid-2 gh-gap-4">
                            <?php
                            $prev_post = get_previous_post();
                            $next_post = get_next_post();
                            ?>
                            
                            <?php if ($prev_post) : ?>
                                <a href="<?php echo esc_url(get_permalink($prev_post)); ?>" class="gh-card gh-p-4">
                                    <span class="gh-text-sm gh-text-muted-foreground">← <?php esc_html_e('Previous', 'greenhaven'); ?></span>
                                    <span class="gh-block gh-font-medium gh-mt-1"><?php echo esc_html($prev_post->post_title); ?></span>
                                </a>
                            <?php else : ?>
                                <div></div>
                            <?php endif; ?>
                            
                            <?php if ($next_post) : ?>
                                <a href="<?php echo esc_url(get_permalink($next_post)); ?>" class="gh-card gh-p-4 gh-text-right">
                                    <span class="gh-text-sm gh-text-muted-foreground"><?php esc_html_e('Next', 'greenhaven'); ?> →</span>
                                    <span class="gh-block gh-font-medium gh-mt-1"><?php echo esc_html($next_post->post_title); ?></span>
                                </a>
                            <?php endif; ?>
                        </nav>
                    </footer>
                    
                </article>
                
                <?php
                // Comments
                if (comments_open() || get_comments_number()) :
                    comments_template();
                endif;
                ?>
                
            <?php endwhile; ?>
            
        </div>
    </div>
    
</main>

<?php
get_footer();
