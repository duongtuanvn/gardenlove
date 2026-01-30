<?php
/**
 * Footer Template
 * Converted from: src/components/layout/Footer.tsx
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;
?>

</div><!-- #content -->

<footer id="colophon" class="site-footer" style="background-color: hsl(var(--gh-primary)); color: hsl(var(--gh-primary-foreground));">
    
    <!-- Main Footer -->
    <div class="gh-container gh-py-12">
        <div class="gh-grid" style="grid-template-columns: repeat(2, 1fr); gap: 2rem;">
            
            <!-- Brand -->
            <div style="grid-column: span 2;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="gh-flex gh-items-center gh-gap-2 gh-mb-4">
                    <div style="width: 2.5rem; height: 2.5rem; border-radius: 9999px; background-color: hsl(var(--gh-primary-foreground)); display: flex; align-items: center; justify-content: center;">
                        <?php echo gh_get_icon('leaf', 'w-6 h-6'); ?>
                    </div>
                    <div>
                        <span style="font-size: 1.25rem; font-family: 'Playfair Display', serif; font-weight: 700;">
                            <?php bloginfo('name'); ?>
                        </span>
                        <span style="font-size: 0.75rem; display: block; opacity: 0.7; margin-top: -0.25rem;">
                            <?php bloginfo('description'); ?>
                        </span>
                    </div>
                </a>
                
                <p style="font-size: 0.875rem; opacity: 0.7; margin-bottom: 1rem; max-width: 20rem;">
                    <?php echo esc_html(gh_get_option('footer_description', 'Family-owned nursery delivering healthy, happy plants to homes across America since 2015.')); ?>
                </p>
                
                <!-- Social Links -->
                <div class="gh-flex gh-gap-3">
                    <?php
                    $social_links = array(
                        'facebook'  => gh_get_option('social_facebook', '#'),
                        'instagram' => gh_get_option('social_instagram', '#'),
                        'youtube'   => gh_get_option('social_youtube', '#'),
                        'twitter'   => gh_get_option('social_twitter', '#'),
                    );
                    
                    foreach ($social_links as $platform => $url) :
                        if (!empty($url)) :
                    ?>
                        <a href="<?php echo esc_url($url); ?>" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           style="width: 2.25rem; height: 2.25rem; border-radius: 9999px; background-color: hsl(var(--gh-primary-foreground) / 0.1); display: flex; align-items: center; justify-content: center; transition: background-color 0.3s;"
                           aria-label="<?php echo esc_attr(ucfirst($platform)); ?>">
                            <?php echo gh_get_icon($platform, 'w-4 h-4'); ?>
                        </a>
                    <?php 
                        endif;
                    endforeach; 
                    ?>
                </div>
            </div>

            <!-- Shop Links -->
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem;"><?php esc_html_e('Shop', 'greenhaven'); ?></h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-shop',
                    'container'      => false,
                    'menu_class'     => 'gh-footer-menu',
                    'fallback_cb'    => function() {
                        echo '<ul class="gh-footer-menu">';
                        echo '<li><a href="' . esc_url(home_url('/shop')) . '">' . esc_html__('All Plants', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/collections/indoor')) . '">' . esc_html__('Indoor Plants', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/collections/trees')) . '">' . esc_html__('Trees & Shrubs', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/collections/new')) . '">' . esc_html__('New Arrivals', 'greenhaven') . '</a></li>';
                        echo '</ul>';
                    },
                    'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
                ));
                ?>
            </div>

            <!-- Help Links -->
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem;"><?php esc_html_e('Help', 'greenhaven'); ?></h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-help',
                    'container'      => false,
                    'menu_class'     => 'gh-footer-menu',
                    'fallback_cb'    => function() {
                        echo '<ul class="gh-footer-menu">';
                        echo '<li><a href="' . esc_url(home_url('/shipping')) . '">' . esc_html__('Shipping Info', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/returns')) . '">' . esc_html__('Returns & Refunds', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/guarantee')) . '">' . esc_html__('Live Arrival Guarantee', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/faq')) . '">' . esc_html__('FAQ', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/contact')) . '">' . esc_html__('Contact Us', 'greenhaven') . '</a></li>';
                        echo '</ul>';
                    },
                    'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
                ));
                ?>
            </div>

            <!-- Learn Links -->
            <div>
                <h4 style="font-weight: 600; margin-bottom: 1rem;"><?php esc_html_e('Learn', 'greenhaven'); ?></h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-learn',
                    'container'      => false,
                    'menu_class'     => 'gh-footer-menu',
                    'fallback_cb'    => function() {
                        echo '<ul class="gh-footer-menu">';
                        echo '<li><a href="' . esc_url(home_url('/plant-care')) . '">' . esc_html__('Plant Care Guides', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/blog')) . '">' . esc_html__('Blog', 'greenhaven') . '</a></li>';
                        echo '<li><a href="' . esc_url(home_url('/about')) . '">' . esc_html__('About Us', 'greenhaven') . '</a></li>';
                        echo '</ul>';
                    },
                    'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
                ));
                ?>
            </div>

            <!-- Contact Info (GMC Compliant) -->
            <div style="grid-column: span 2;">
                <h4 style="font-weight: 600; margin-bottom: 1rem;"><?php esc_html_e('Contact Us', 'greenhaven'); ?></h4>
                <ul style="font-size: 0.875rem; opacity: 0.7;">
                    <li class="gh-flex gh-items-start gh-gap-2 gh-mb-3">
                        <?php echo gh_get_icon('map-pin', 'w-4 h-4 mt-0.5 flex-shrink-0'); ?>
                        <div>
                            <span style="display: block; font-weight: 500; color: hsl(var(--gh-primary-foreground));">
                                <?php echo esc_html(gh_get_option('business_name', 'Green Haven Nursery LLC')); ?>
                            </span>
                            <span style="display: block;">
                                <?php echo esc_html(gh_get_option('address_line1', '1234 Garden Way')); ?>
                            </span>
                            <span style="display: block;">
                                <?php echo esc_html(gh_get_option('address_line2', 'Portland, OR 97201')); ?>
                            </span>
                        </div>
                    </li>
                    <li class="gh-flex gh-items-start gh-gap-2 gh-mb-3">
                        <?php echo gh_get_icon('phone', 'w-4 h-4 mt-0.5 flex-shrink-0'); ?>
                        <a href="tel:<?php echo esc_attr(gh_get_option('phone', '+15551234567')); ?>" style="transition: opacity 0.3s;">
                            <?php echo esc_html(gh_get_option('phone_display', '(555) 123-4567')); ?>
                        </a>
                    </li>
                    <li class="gh-flex gh-items-start gh-gap-2 gh-mb-3">
                        <?php echo gh_get_icon('mail', 'w-4 h-4 mt-0.5 flex-shrink-0'); ?>
                        <a href="mailto:<?php echo esc_attr(gh_get_option('email', 'support@greenhaven.com')); ?>" style="transition: opacity 0.3s;">
                            <?php echo esc_html(gh_get_option('email', 'support@greenhaven.com')); ?>
                        </a>
                    </li>
                    <li class="gh-flex gh-items-start gh-gap-2">
                        <?php echo gh_get_icon('clock', 'w-4 h-4 mt-0.5 flex-shrink-0'); ?>
                        <div>
                            <span style="display: block;"><?php echo esc_html(gh_get_option('hours_weekday', 'Mon - Fri: 8AM - 6PM PST')); ?></span>
                            <span style="display: block;"><?php echo esc_html(gh_get_option('hours_weekend', 'Sat: 9AM - 4PM PST')); ?></span>
                            <span style="display: block;"><?php echo esc_html(gh_get_option('hours_sunday', 'Sun: Closed')); ?></span>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>

    <!-- Bottom Bar -->
    <div style="border-top: 1px solid hsl(var(--gh-primary-foreground) / 0.1);">
        <div class="gh-container gh-py-6">
            <div class="gh-flex gh-flex-col md:gh-flex-row gh-justify-between gh-items-center gh-gap-4" style="font-size: 0.875rem; opacity: 0.6;">
                <p>
                    © <?php echo esc_html(date('Y')); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('All rights reserved.', 'greenhaven'); ?>
                </p>
                <div class="gh-flex gh-gap-6">
                    <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" style="transition: opacity 0.3s;">
                        <?php esc_html_e('Privacy Policy', 'greenhaven'); ?>
                    </a>
                    <a href="<?php echo esc_url(home_url('/terms-of-service')); ?>" style="transition: opacity 0.3s;">
                        <?php esc_html_e('Terms of Service', 'greenhaven'); ?>
                    </a>
                    <a href="<?php echo esc_url(home_url('/accessibility')); ?>" style="transition: opacity 0.3s;">
                        <?php esc_html_e('Accessibility', 'greenhaven'); ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
</footer>

<?php wp_footer(); ?>

<style>
/* Footer Menu Styles */
.gh-footer-menu {
    list-style: none;
    margin: 0;
    padding: 0;
}

.gh-footer-menu li {
    margin-bottom: 0.625rem;
}

.gh-footer-menu a {
    font-size: 0.875rem;
    opacity: 0.7;
    transition: opacity 0.3s;
    display: block;
}

.gh-footer-menu a:hover {
    opacity: 1;
}

@media (min-width: 768px) {
    .site-footer .gh-grid {
        grid-template-columns: 1.5fr repeat(3, 1fr) 1.5fr;
    }
    
    .site-footer .gh-grid > div:first-child,
    .site-footer .gh-grid > div:last-child {
        grid-column: span 1;
    }
}
</style>

</body>
</html>
