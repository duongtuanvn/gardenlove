<?php
/**
 * FAQ Section Template
 * Converted from: src/components/home/HomeFAQSection.tsx
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

$faqs = array(
    array(
        'question' => __('Do you ship to my state?', 'greenhaven'),
        'answer'   => __('We ship to all 48 contiguous U.S. states. Unfortunately, we cannot ship to Alaska, Hawaii, or Puerto Rico due to agricultural restrictions and extended transit times.', 'greenhaven'),
    ),
    array(
        'question' => __('When will my order ship?', 'greenhaven'),
        'answer'   => __('Orders placed by 10 AM PST ship the same day (Mon-Wed). Orders placed after 10 AM or Thu-Sun ship the following Monday to avoid weekend warehouse delays.', 'greenhaven'),
    ),
    array(
        'question' => __('What if my plant arrives damaged?', 'greenhaven'),
        'answer'   => __('We\'ve got you covered! Our Live Arrival Guarantee means we\'ll replace any damaged plant for free or issue a full refund. Just send us photos within 48 hours of delivery.', 'greenhaven'),
    ),
    array(
        'question' => __('How big are the plants you ship?', 'greenhaven'),
        'answer'   => __('Plant sizes vary by species and are clearly listed on each product page. We typically ship 4-inch starter plants to 3-gallon established specimens, with photos and measurements for reference.', 'greenhaven'),
    ),
    array(
        'question' => __('Can I choose a delivery date?', 'greenhaven'),
        'answer'   => __('While we can\'t guarantee specific delivery dates, you can add delivery notes at checkout. We ship Mon-Wed and use expedited shipping to minimize transit time.', 'greenhaven'),
    ),
    array(
        'question' => __('How do I track my order?', 'greenhaven'),
        'answer'   => __('You\'ll receive an email with tracking information as soon as your order ships. You can also log into your account anytime to view order status and tracking details.', 'greenhaven'),
    ),
);

// Allow filtering FAQs via theme customizer or custom fields
$faqs = apply_filters('gh_home_faqs', $faqs);
?>

<section id="faq" class="gh-section gh-bg-muted-30">
    <div class="gh-container">
        
        <div style="max-width: 48rem; margin: 0 auto;">
            
            <!-- Section Header -->
            <div class="gh-text-center gh-mb-10">
                <span style="color: hsl(var(--gh-accent)); font-weight: 600; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">
                    <?php esc_html_e('Got Questions?', 'greenhaven'); ?>
                </span>
                <h2 style="font-size: clamp(1.875rem, 3vw, 2.25rem); font-weight: 700; color: hsl(var(--gh-foreground)); margin-top: 0.5rem;">
                    <?php esc_html_e('Frequently Asked Questions', 'greenhaven'); ?>
                </h2>
            </div>

            <!-- FAQ Accordion -->
            <div class="gh-card gh-p-6" style="border-radius: var(--gh-radius-xl);">
                <div class="gh-accordion" id="gh-faq-accordion">
                    <?php foreach ($faqs as $index => $faq) : ?>
                        <div class="gh-accordion-item" data-accordion-item>
                            <button 
                                type="button" 
                                class="gh-accordion-trigger"
                                aria-expanded="false"
                                aria-controls="faq-content-<?php echo esc_attr($index); ?>"
                            >
                                <span><?php echo esc_html($faq['question']); ?></span>
                                <?php echo gh_get_icon('chevron-down', 'w-5 h-5'); ?>
                            </button>
                            <div 
                                class="gh-accordion-content" 
                                id="faq-content-<?php echo esc_attr($index); ?>"
                            >
                                <?php echo esc_html($faq['answer']); ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- View All Link -->
            <div class="gh-text-center gh-mt-8">
                <a href="<?php echo esc_url(home_url('/faq')); ?>" 
                   class="gh-flex gh-items-center gh-justify-center gh-gap-2"
                   style="color: hsl(var(--gh-primary)); font-weight: 500; text-decoration: underline; text-underline-offset: 4px;">
                    <?php echo gh_get_icon('help-circle', 'w-4 h-4'); ?>
                    <?php esc_html_e('View all FAQs', 'greenhaven'); ?> →
                </a>
            </div>
            
        </div>
        
    </div>
</section>
