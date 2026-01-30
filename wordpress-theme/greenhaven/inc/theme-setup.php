<?php
/**
 * Theme Setup
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function gh_theme_setup() {
    // Make theme available for translation
    load_theme_textdomain('greenhaven', GH_THEME_DIR . '/languages');

    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Custom image sizes
    add_image_size('gh-product-card', 400, 400, true);
    add_image_size('gh-product-large', 800, 800, true);
    add_image_size('gh-category', 600, 750, true);
    add_image_size('gh-hero', 1920, 1080, true);

    // Register Navigation Menus
    register_nav_menus(array(
        'primary'     => esc_html__('Primary Navigation', 'greenhaven'),
        'footer-shop' => esc_html__('Footer - Shop', 'greenhaven'),
        'footer-help' => esc_html__('Footer - Help', 'greenhaven'),
        'footer-learn'=> esc_html__('Footer - Learn', 'greenhaven'),
        'mobile'      => esc_html__('Mobile Navigation', 'greenhaven'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Set up the WordPress core custom background feature
    add_theme_support('custom-background', array(
        'default-color' => 'f7f5f0',
    ));

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Custom logo support
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Block editor support
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');

    // Add editor style
    add_editor_style('assets/css/editor-style.css');
}
add_action('after_setup_theme', 'gh_theme_setup');

/**
 * Set the content width in pixels
 */
function gh_content_width() {
    $GLOBALS['content_width'] = apply_filters('gh_content_width', 1280);
}
add_action('after_setup_theme', 'gh_content_width', 0);

/**
 * Register widget areas
 */
function gh_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Blog Sidebar', 'greenhaven'),
        'id'            => 'sidebar-blog',
        'description'   => esc_html__('Add widgets here to appear in your blog sidebar.', 'greenhaven'),
        'before_widget' => '<section id="%1$s" class="widget gh-card gh-p-6 gh-mb-6 %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title gh-text-lg gh-font-semibold gh-mb-4">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Shop Sidebar', 'greenhaven'),
        'id'            => 'sidebar-shop',
        'description'   => esc_html__('Add widgets here to appear in your shop sidebar.', 'greenhaven'),
        'before_widget' => '<section id="%1$s" class="widget gh-card gh-p-6 gh-mb-6 %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title gh-text-lg gh-font-semibold gh-mb-4">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area', 'greenhaven'),
        'id'            => 'footer-widgets',
        'description'   => esc_html__('Add widgets here to appear in your footer.', 'greenhaven'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title gh-font-semibold gh-mb-4">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'gh_widgets_init');

/**
 * Custom navigation walker for primary menu
 */
class GH_Nav_Walker extends Walker_Nav_Menu {
    /**
     * Start level
     */
    public function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<div class=\"gh-dropdown-menu absolute top-full left-0 pt-2 hidden group-hover:block z-50\">\n";
        $output .= "$indent<ul class=\"bg-white rounded-xl shadow-lg p-2 min-w-[200px] border border-gray-100\">\n";
    }

    /**
     * End level
     */
    public function end_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
        $output .= "$indent</div>\n";
    }

    /**
     * Start element
     */
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $has_children = in_array('menu-item-has-children', $classes);
        
        if ($depth === 0) {
            $class_names = $has_children ? 'relative group' : '';
        } else {
            $class_names = '';
        }
        
        $output .= $indent . '<li class="' . esc_attr($class_names) . '">';
        
        $atts = array();
        $atts['href'] = !empty($item->url) ? $item->url : '';
        
        if ($depth === 0) {
            $atts['class'] = 'flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors py-2';
        } else {
            $atts['class'] = 'block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700 rounded-lg transition-colors';
        }
        
        $attributes = '';
        foreach ($atts as $attr => $value) {
            if (!empty($value)) {
                $value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }
        
        $title = apply_filters('the_title', $item->title, $item->ID);
        
        $item_output = $args->before ?? '';
        $item_output .= '<a' . $attributes . '>';
        $item_output .= ($args->link_before ?? '') . $title . ($args->link_after ?? '');
        
        if ($has_children && $depth === 0) {
            $item_output .= '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
        }
        
        $item_output .= '</a>';
        $item_output .= $args->after ?? '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

/**
 * Mobile Navigation Walker
 */
class GH_Mobile_Nav_Walker extends Walker_Nav_Menu {
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $padding = $depth > 0 ? 'pl-4' : '';
        $text_class = $depth > 0 ? 'text-sm text-gray-500' : 'text-base font-medium text-gray-900';
        
        $output .= $indent . '<li class="' . $padding . '">';
        
        $atts = array();
        $atts['href'] = !empty($item->url) ? $item->url : '';
        $atts['class'] = 'block py-2 ' . $text_class . ' hover:text-green-700 transition-colors';
        
        $attributes = '';
        foreach ($atts as $attr => $value) {
            if (!empty($value)) {
                $value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }
        
        $title = apply_filters('the_title', $item->title, $item->ID);
        
        $item_output = $args->before ?? '';
        $item_output .= '<a' . $attributes . '>';
        $item_output .= ($args->link_before ?? '') . $title . ($args->link_after ?? '');
        $item_output .= '</a>';
        $item_output .= $args->after ?? '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}
