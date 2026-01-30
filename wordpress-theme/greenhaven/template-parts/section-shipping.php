<?php
/**
 * Shipping Section Template
 * Converted from: src/components/home/HowWeShipSection.tsx
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

$steps = array(
    array(
        'icon'        => 'search',
        'title'       => __('Pick & Inspect', 'greenhaven'),
        'description' => __('Our experts hand-select each plant, inspecting for health, root development, and overall quality before it leaves our nursery.', 'greenhaven'),
    ),
    array(
        'icon'        => 'package',
        'title'       => __('Pack for Transit', 'greenhaven'),
        'description' => __('We carefully wrap roots, secure soil, and cushion plants in custom eco-friendly packaging designed to minimize stress during shipping.', 'greenhaven'),
    ),
    array(
        'icon'        => 'truck',
        'title'       => __('Ship with Care', 'greenhaven'),
        'description' => __('Every order includes tracking and detailed care instructions. We ship Mon-Wed to avoid weekend warehouse delays.', 'greenhaven'),
    ),
);
?>

<section id="how-we-ship" class="gh-section gh-bg-card">
    <div class="gh-container">
        
        <!-- Section Header -->
        <div class="gh-text-center gh-mb-12" style="max-width: 42rem; margin-left: auto; margin-right: auto;">
            <span style="color: hsl(var(--gh-accent)); font-weight: 600; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">
                <?php esc_html_e('Safe & Secure Delivery', 'greenhaven'); ?>
            </span>
            <h2 style="font-size: clamp(1.875rem, 3vw, 2.25rem); font-weight: 700; color: hsl(var(--gh-foreground)); margin-top: 0.5rem;">
                <?php esc_html_e('How We Ship Live Plants', 'greenhaven'); ?>
            </h2>
            <p style="color: hsl(var(--gh-muted-foreground)); margin-top: 1rem;">
                <?php esc_html_e('We treat every plant like it\'s going to our own garden. Here\'s how we ensure your plants arrive healthy and ready to thrive.', 'greenhaven'); ?>
            </p>
        </div>

        <!-- Steps Grid -->
        <div class="gh-grid md:gh-grid-3 gh-gap-8 gh-mb-12" style="position: relative;">
            <?php foreach ($steps as $index => $step) : ?>
                <div class="gh-step-card">
                    <!-- Step Number -->
                    <div class="gh-step-card__number">
                        <?php echo esc_html($index + 1); ?>
                    </div>
                    
                    <!-- Icon -->
                    <div class="gh-step-card__icon">
                        <?php echo gh_get_icon($step['icon'], 'w-8 h-8'); ?>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="gh-step-card__title">
                        <?php echo esc_html($step['title']); ?>
                    </h3>
                    
                    <!-- Description -->
                    <p class="gh-step-card__description">
                        <?php echo esc_html($step['description']); ?>
                    </p>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Guarantee Banner -->
        <div style="background-color: hsl(var(--gh-primary) / 0.05); border: 1px solid hsl(var(--gh-primary) / 0.2); border-radius: var(--gh-radius-xl); padding: 1.5rem 2rem;">
            <div class="gh-flex gh-flex-col md:gh-flex-row gh-items-center gh-gap-6">
                <!-- Icon -->
                <div style="flex-shrink: 0;">
                    <div style="width: 4rem; height: 4rem; border-radius: 9999px; background-color: hsl(var(--gh-primary) / 0.1); display: flex; align-items: center; justify-content: center;">
                        <?php echo gh_get_icon('shield', 'w-8 h-8'); ?>
                    </div>
                </div>
                
                <!-- Text -->
                <div style="flex: 1; text-align: center;" class="md:gh-text-left">
                    <h3 style="font-size: 1.25rem; font-weight: 600; color: hsl(var(--gh-foreground)); margin-bottom: 0.5rem;">
                        <?php esc_html_e('Live Arrival Guarantee', 'greenhaven'); ?>
                    </h3>
                    <p style="color: hsl(var(--gh-muted-foreground));">
                        <?php esc_html_e('Every plant is backed by our 100% Live Arrival Guarantee. If your plant arrives damaged, we\'ll replace it or refund you—no questions asked.', 'greenhaven'); ?>
                    </p>
                </div>
                
                <!-- CTA -->
                <div style="flex-shrink: 0;">
                    <a href="<?php echo esc_url(home_url('/shipping')); ?>" class="gh-btn gh-btn-primary">
                        <?php echo gh_get_icon('file-text', 'w-4 h-4'); ?>
                        <?php esc_html_e('Shipping Policy', 'greenhaven'); ?>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</section>
