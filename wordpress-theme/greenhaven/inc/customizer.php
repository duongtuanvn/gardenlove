<?php
/**
 * Customizer Settings
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

/**
 * Register customizer settings
 */
function gh_customize_register($wp_customize) {
    
    // ============================================
    // Theme Options Panel
    // ============================================
    
    $wp_customize->add_panel('gh_theme_options', array(
        'title'       => __('Green Haven Theme Options', 'greenhaven'),
        'description' => __('Customize your Green Haven theme settings.', 'greenhaven'),
        'priority'    => 30,
    ));

    // ============================================
    // Hero Section
    // ============================================
    
    $wp_customize->add_section('gh_hero_section', array(
        'title'    => __('Hero Section', 'greenhaven'),
        'panel'    => 'gh_theme_options',
        'priority' => 10,
    ));

    // Hero Title
    $wp_customize->add_setting('gh_hero_title', array(
        'default'           => 'Healthy Plants Delivered to Your Door',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control('gh_hero_title', array(
        'label'   => __('Hero Title', 'greenhaven'),
        'section' => 'gh_hero_section',
        'type'    => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('gh_hero_subtitle', array(
        'default'           => 'From our greenhouse to your home — expertly grown plants shipped with care to thrive in your space.',
        'sanitize_callback' => 'sanitize_textarea_field',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control('gh_hero_subtitle', array(
        'label'   => __('Hero Subtitle', 'greenhaven'),
        'section' => 'gh_hero_section',
        'type'    => 'textarea',
    ));

    // Hero Badge
    $wp_customize->add_setting('gh_hero_badge', array(
        'default'           => 'Family-Owned Since 2015',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control('gh_hero_badge', array(
        'label'   => __('Hero Badge Text', 'greenhaven'),
        'section' => 'gh_hero_section',
        'type'    => 'text',
    ));

    // Hero Image
    $wp_customize->add_setting('gh_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'gh_hero_image', array(
        'label'   => __('Hero Background Image', 'greenhaven'),
        'section' => 'gh_hero_section',
    )));

    // Hero CTA Text
    $wp_customize->add_setting('gh_hero_cta_text', array(
        'default'           => 'Shop Plants',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control('gh_hero_cta_text', array(
        'label'   => __('Primary Button Text', 'greenhaven'),
        'section' => 'gh_hero_section',
        'type'    => 'text',
    ));

    // Hero CTA URL
    $wp_customize->add_setting('gh_hero_cta_url', array(
        'default'           => '/shop',
        'sanitize_callback' => 'esc_url_raw',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control('gh_hero_cta_url', array(
        'label'   => __('Primary Button URL', 'greenhaven'),
        'section' => 'gh_hero_section',
        'type'    => 'url',
    ));

    // ============================================
    // Announcement Bar
    // ============================================
    
    $wp_customize->add_section('gh_announcement_section', array(
        'title'    => __('Announcement Bar', 'greenhaven'),
        'panel'    => 'gh_theme_options',
        'priority' => 5,
    ));

    // Announcement Text
    $wp_customize->add_setting('gh_announcement_text', array(
        'default'           => '🌿 Free Shipping on Orders $75+ | 100% Live Arrival Guarantee',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control('gh_announcement_text', array(
        'label'   => __('Announcement Text', 'greenhaven'),
        'section' => 'gh_announcement_section',
        'type'    => 'text',
    ));

    // Show Announcement Bar
    $wp_customize->add_setting('gh_show_announcement', array(
        'default'           => true,
        'sanitize_callback' => 'wp_validate_boolean',
        'transport'         => 'refresh',
    ));

    $wp_customize->add_control('gh_show_announcement', array(
        'label'   => __('Show Announcement Bar', 'greenhaven'),
        'section' => 'gh_announcement_section',
        'type'    => 'checkbox',
    ));

    // ============================================
    // Contact Information (GMC Compliant)
    // ============================================
    
    $wp_customize->add_section('gh_contact_section', array(
        'title'       => __('Contact Information', 'greenhaven'),
        'description' => __('Business contact info displayed in footer (required for Google Merchant Center).', 'greenhaven'),
        'panel'       => 'gh_theme_options',
        'priority'    => 20,
    ));

    // Business Name
    $wp_customize->add_setting('gh_business_name', array(
        'default'           => 'Green Haven Nursery LLC',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('gh_business_name', array(
        'label'   => __('Business Name', 'greenhaven'),
        'section' => 'gh_contact_section',
        'type'    => 'text',
    ));

    // Address Line 1
    $wp_customize->add_setting('gh_address_line1', array(
        'default'           => '1234 Garden Way',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('gh_address_line1', array(
        'label'   => __('Address Line 1', 'greenhaven'),
        'section' => 'gh_contact_section',
        'type'    => 'text',
    ));

    // Address Line 2
    $wp_customize->add_setting('gh_address_line2', array(
        'default'           => 'Portland, OR 97201',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('gh_address_line2', array(
        'label'   => __('Address Line 2 (City, State, ZIP)', 'greenhaven'),
        'section' => 'gh_contact_section',
        'type'    => 'text',
    ));

    // Phone
    $wp_customize->add_setting('gh_phone', array(
        'default'           => '(555) 123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('gh_phone', array(
        'label'   => __('Phone Number', 'greenhaven'),
        'section' => 'gh_contact_section',
        'type'    => 'text',
    ));

    // Email
    $wp_customize->add_setting('gh_email', array(
        'default'           => 'support@greenhaven.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('gh_email', array(
        'label'   => __('Email Address', 'greenhaven'),
        'section' => 'gh_contact_section',
        'type'    => 'email',
    ));

    // Business Hours - Weekday
    $wp_customize->add_setting('gh_hours_weekday', array(
        'default'           => 'Mon - Fri: 8AM - 6PM PST',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('gh_hours_weekday', array(
        'label'   => __('Weekday Hours', 'greenhaven'),
        'section' => 'gh_contact_section',
        'type'    => 'text',
    ));

    // Business Hours - Weekend
    $wp_customize->add_setting('gh_hours_weekend', array(
        'default'           => 'Sat: 9AM - 4PM PST',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('gh_hours_weekend', array(
        'label'   => __('Weekend Hours', 'greenhaven'),
        'section' => 'gh_contact_section',
        'type'    => 'text',
    ));

    // ============================================
    // Social Media
    // ============================================
    
    $wp_customize->add_section('gh_social_section', array(
        'title'    => __('Social Media Links', 'greenhaven'),
        'panel'    => 'gh_theme_options',
        'priority' => 25,
    ));

    $social_networks = array(
        'facebook'  => 'Facebook URL',
        'instagram' => 'Instagram URL',
        'youtube'   => 'YouTube URL',
        'twitter'   => 'Twitter/X URL',
    );

    foreach ($social_networks as $network => $label) {
        $wp_customize->add_setting('gh_social_' . $network, array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control('gh_social_' . $network, array(
            'label'   => __($label, 'greenhaven'),
            'section' => 'gh_social_section',
            'type'    => 'url',
        ));
    }

    // ============================================
    // Footer Settings
    // ============================================
    
    $wp_customize->add_section('gh_footer_section', array(
        'title'    => __('Footer Settings', 'greenhaven'),
        'panel'    => 'gh_theme_options',
        'priority' => 30,
    ));

    // Footer Description
    $wp_customize->add_setting('gh_footer_description', array(
        'default'           => 'Family-owned nursery delivering healthy, happy plants to homes across America since 2015.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('gh_footer_description', array(
        'label'   => __('Footer Description', 'greenhaven'),
        'section' => 'gh_footer_section',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'gh_customize_register');

/**
 * Get customizer option with theme_mod fallback
 */
function gh_get_option($key, $default = '') {
    return get_theme_mod('gh_' . $key, $default);
}
