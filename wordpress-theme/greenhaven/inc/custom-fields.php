<?php
/**
 * Custom Meta Fields
 *
 * @package GreenHaven
 */

defined('ABSPATH') || exit;

/**
 * Register meta boxes for custom fields
 */
function gh_register_meta_boxes() {
    
    // Testimonial Author Info
    add_meta_box(
        'gh_testimonial_info',
        __('Testimonial Details', 'greenhaven'),
        'gh_testimonial_meta_box_callback',
        'testimonial',
        'normal',
        'high'
    );

    // Product Plant Care Info (WooCommerce)
    if (class_exists('WooCommerce')) {
        add_meta_box(
            'gh_plant_care_info',
            __('Plant Care Information', 'greenhaven'),
            'gh_plant_care_meta_box_callback',
            'product',
            'normal',
            'default'
        );
    }
}
add_action('add_meta_boxes', 'gh_register_meta_boxes');

/**
 * Testimonial meta box callback
 */
function gh_testimonial_meta_box_callback($post) {
    wp_nonce_field('gh_testimonial_meta', 'gh_testimonial_meta_nonce');

    $author_name = get_post_meta($post->ID, '_gh_author_name', true);
    $author_location = get_post_meta($post->ID, '_gh_author_location', true);
    $rating = get_post_meta($post->ID, '_gh_rating', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="gh_author_name"><?php esc_html_e('Author Name', 'greenhaven'); ?></label></th>
            <td>
                <input type="text" id="gh_author_name" name="gh_author_name" 
                       value="<?php echo esc_attr($author_name); ?>" class="regular-text">
            </td>
        </tr>
        <tr>
            <th><label for="gh_author_location"><?php esc_html_e('Location', 'greenhaven'); ?></label></th>
            <td>
                <input type="text" id="gh_author_location" name="gh_author_location" 
                       value="<?php echo esc_attr($author_location); ?>" class="regular-text"
                       placeholder="e.g., Portland, OR">
            </td>
        </tr>
        <tr>
            <th><label for="gh_rating"><?php esc_html_e('Rating', 'greenhaven'); ?></label></th>
            <td>
                <select id="gh_rating" name="gh_rating">
                    <?php for ($i = 5; $i >= 1; $i--) : ?>
                        <option value="<?php echo esc_attr($i); ?>" <?php selected($rating, $i); ?>>
                            <?php echo esc_html($i); ?> <?php echo esc_html(_n('star', 'stars', $i, 'greenhaven')); ?>
                        </option>
                    <?php endfor; ?>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Plant care meta box callback
 */
function gh_plant_care_meta_box_callback($post) {
    wp_nonce_field('gh_plant_care_meta', 'gh_plant_care_meta_nonce');

    $usda_zone = get_post_meta($post->ID, '_gh_usda_zone', true);
    $sunlight = get_post_meta($post->ID, '_gh_sunlight', true);
    $soil_type = get_post_meta($post->ID, '_gh_soil_type', true);
    $planting_time = get_post_meta($post->ID, '_gh_planting_time', true);
    $features = get_post_meta($post->ID, '_gh_features', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="gh_usda_zone"><?php esc_html_e('USDA Zone', 'greenhaven'); ?></label></th>
            <td>
                <input type="text" id="gh_usda_zone" name="gh_usda_zone" 
                       value="<?php echo esc_attr($usda_zone); ?>" class="regular-text"
                       placeholder="e.g., 9-11">
            </td>
        </tr>
        <tr>
            <th><label for="gh_sunlight"><?php esc_html_e('Sunlight Requirements', 'greenhaven'); ?></label></th>
            <td>
                <select id="gh_sunlight" name="gh_sunlight">
                    <option value=""><?php esc_html_e('Select...', 'greenhaven'); ?></option>
                    <option value="Full sun" <?php selected($sunlight, 'Full sun'); ?>><?php esc_html_e('Full sun', 'greenhaven'); ?></option>
                    <option value="Partial shade" <?php selected($sunlight, 'Partial shade'); ?>><?php esc_html_e('Partial shade', 'greenhaven'); ?></option>
                    <option value="Full shade" <?php selected($sunlight, 'Full shade'); ?>><?php esc_html_e('Full shade', 'greenhaven'); ?></option>
                    <option value="Bright indirect light" <?php selected($sunlight, 'Bright indirect light'); ?>><?php esc_html_e('Bright indirect light', 'greenhaven'); ?></option>
                    <option value="Low light" <?php selected($sunlight, 'Low light'); ?>><?php esc_html_e('Low light', 'greenhaven'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="gh_soil_type"><?php esc_html_e('Soil Type', 'greenhaven'); ?></label></th>
            <td>
                <input type="text" id="gh_soil_type" name="gh_soil_type" 
                       value="<?php echo esc_attr($soil_type); ?>" class="regular-text"
                       placeholder="e.g., Well-draining potting mix">
            </td>
        </tr>
        <tr>
            <th><label for="gh_planting_time"><?php esc_html_e('Best Planting Time', 'greenhaven'); ?></label></th>
            <td>
                <input type="text" id="gh_planting_time" name="gh_planting_time" 
                       value="<?php echo esc_attr($planting_time); ?>" class="regular-text"
                       placeholder="e.g., Spring or Fall">
            </td>
        </tr>
        <tr>
            <th><label for="gh_features"><?php esc_html_e('Key Features', 'greenhaven'); ?></label></th>
            <td>
                <textarea id="gh_features" name="gh_features" rows="4" class="large-text"
                          placeholder="<?php esc_attr_e('One feature per line', 'greenhaven'); ?>"><?php echo esc_textarea(is_array($features) ? implode("\n", $features) : $features); ?></textarea>
                <p class="description"><?php esc_html_e('Enter one feature per line (e.g., "Drought tolerant", "Pet-friendly").', 'greenhaven'); ?></p>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Save testimonial meta
 */
function gh_save_testimonial_meta($post_id) {
    if (!isset($_POST['gh_testimonial_meta_nonce']) || 
        !wp_verify_nonce($_POST['gh_testimonial_meta_nonce'], 'gh_testimonial_meta')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['gh_author_name'])) {
        update_post_meta($post_id, '_gh_author_name', sanitize_text_field($_POST['gh_author_name']));
    }

    if (isset($_POST['gh_author_location'])) {
        update_post_meta($post_id, '_gh_author_location', sanitize_text_field($_POST['gh_author_location']));
    }

    if (isset($_POST['gh_rating'])) {
        update_post_meta($post_id, '_gh_rating', absint($_POST['gh_rating']));
    }
}
add_action('save_post_testimonial', 'gh_save_testimonial_meta');

/**
 * Save plant care meta
 */
function gh_save_plant_care_meta($post_id) {
    if (!isset($_POST['gh_plant_care_meta_nonce']) || 
        !wp_verify_nonce($_POST['gh_plant_care_meta_nonce'], 'gh_plant_care_meta')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array('gh_usda_zone', 'gh_sunlight', 'gh_soil_type', 'gh_planting_time');
    
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }

    // Handle features (textarea to array)
    if (isset($_POST['gh_features'])) {
        $features = sanitize_textarea_field($_POST['gh_features']);
        $features_array = array_filter(array_map('trim', explode("\n", $features)));
        update_post_meta($post_id, '_gh_features', $features_array);
    }
}
add_action('save_post_product', 'gh_save_plant_care_meta');
