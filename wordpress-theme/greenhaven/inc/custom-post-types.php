<?php
/**
 * Custom Post Types
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

/**
 * Register Custom Post Types
 */
function gh_register_post_types() {
    
    // Plant Care Guides CPT
    $labels = array(
        'name'               => _x('Plant Care Guides', 'post type general name', 'greenhaven'),
        'singular_name'      => _x('Plant Care Guide', 'post type singular name', 'greenhaven'),
        'menu_name'          => _x('Plant Care', 'admin menu', 'greenhaven'),
        'add_new'            => _x('Add New', 'plant care guide', 'greenhaven'),
        'add_new_item'       => __('Add New Guide', 'greenhaven'),
        'edit_item'          => __('Edit Guide', 'greenhaven'),
        'new_item'           => __('New Guide', 'greenhaven'),
        'view_item'          => __('View Guide', 'greenhaven'),
        'search_items'       => __('Search Guides', 'greenhaven'),
        'not_found'          => __('No guides found', 'greenhaven'),
        'not_found_in_trash' => __('No guides found in Trash', 'greenhaven'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'plant-care'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'menu_icon'          => 'dashicons-carrot',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'revisions'),
        'show_in_rest'       => true,
    );

    register_post_type('plant_care', $args);

    // FAQs CPT
    $faq_labels = array(
        'name'               => _x('FAQs', 'post type general name', 'greenhaven'),
        'singular_name'      => _x('FAQ', 'post type singular name', 'greenhaven'),
        'menu_name'          => _x('FAQs', 'admin menu', 'greenhaven'),
        'add_new'            => _x('Add New', 'faq', 'greenhaven'),
        'add_new_item'       => __('Add New FAQ', 'greenhaven'),
        'edit_item'          => __('Edit FAQ', 'greenhaven'),
        'new_item'           => __('New FAQ', 'greenhaven'),
        'view_item'          => __('View FAQ', 'greenhaven'),
        'search_items'       => __('Search FAQs', 'greenhaven'),
        'not_found'          => __('No FAQs found', 'greenhaven'),
        'not_found_in_trash' => __('No FAQs found in Trash', 'greenhaven'),
    );

    $faq_args = array(
        'labels'             => $faq_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'faq'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 21,
        'menu_icon'          => 'dashicons-editor-help',
        'supports'           => array('title', 'editor'),
        'show_in_rest'       => true,
    );

    register_post_type('faq', $faq_args);

    // Testimonials CPT
    $testimonial_labels = array(
        'name'               => _x('Testimonials', 'post type general name', 'greenhaven'),
        'singular_name'      => _x('Testimonial', 'post type singular name', 'greenhaven'),
        'menu_name'          => _x('Testimonials', 'admin menu', 'greenhaven'),
        'add_new'            => _x('Add New', 'testimonial', 'greenhaven'),
        'add_new_item'       => __('Add New Testimonial', 'greenhaven'),
        'edit_item'          => __('Edit Testimonial', 'greenhaven'),
        'new_item'           => __('New Testimonial', 'greenhaven'),
        'view_item'          => __('View Testimonial', 'greenhaven'),
        'search_items'       => __('Search Testimonials', 'greenhaven'),
        'not_found'          => __('No testimonials found', 'greenhaven'),
        'not_found_in_trash' => __('No testimonials found in Trash', 'greenhaven'),
    );

    $testimonial_args = array(
        'labels'             => $testimonial_labels,
        'public'             => false,
        'publicly_queryable' => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => false,
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => 22,
        'menu_icon'          => 'dashicons-format-quote',
        'supports'           => array('title', 'editor', 'thumbnail'),
        'show_in_rest'       => true,
    );

    register_post_type('testimonial', $testimonial_args);
}
add_action('init', 'gh_register_post_types');

/**
 * Register Custom Taxonomies
 */
function gh_register_taxonomies() {
    
    // Plant Care Categories
    $labels = array(
        'name'              => _x('Care Categories', 'taxonomy general name', 'greenhaven'),
        'singular_name'     => _x('Care Category', 'taxonomy singular name', 'greenhaven'),
        'search_items'      => __('Search Categories', 'greenhaven'),
        'all_items'         => __('All Categories', 'greenhaven'),
        'parent_item'       => __('Parent Category', 'greenhaven'),
        'parent_item_colon' => __('Parent Category:', 'greenhaven'),
        'edit_item'         => __('Edit Category', 'greenhaven'),
        'update_item'       => __('Update Category', 'greenhaven'),
        'add_new_item'      => __('Add New Category', 'greenhaven'),
        'new_item_name'     => __('New Category Name', 'greenhaven'),
        'menu_name'         => __('Categories', 'greenhaven'),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'care-category'),
        'show_in_rest'      => true,
    );

    register_taxonomy('care_category', array('plant_care'), $args);

    // FAQ Categories
    $faq_labels = array(
        'name'              => _x('FAQ Categories', 'taxonomy general name', 'greenhaven'),
        'singular_name'     => _x('FAQ Category', 'taxonomy singular name', 'greenhaven'),
        'search_items'      => __('Search FAQ Categories', 'greenhaven'),
        'all_items'         => __('All FAQ Categories', 'greenhaven'),
        'edit_item'         => __('Edit FAQ Category', 'greenhaven'),
        'update_item'       => __('Update FAQ Category', 'greenhaven'),
        'add_new_item'      => __('Add New FAQ Category', 'greenhaven'),
        'new_item_name'     => __('New FAQ Category Name', 'greenhaven'),
        'menu_name'         => __('Categories', 'greenhaven'),
    );

    $faq_args = array(
        'hierarchical'      => true,
        'labels'            => $faq_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'faq-category'),
        'show_in_rest'      => true,
    );

    register_taxonomy('faq_category', array('faq'), $faq_args);
}
add_action('init', 'gh_register_taxonomies');

/**
 * Flush rewrite rules on theme activation
 */
function gh_flush_rewrite_rules() {
    gh_register_post_types();
    gh_register_taxonomies();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'gh_flush_rewrite_rules');
