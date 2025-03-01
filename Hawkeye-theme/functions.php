<?php
// Theme Support
function hawkeye_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'hawkeye')
    ));
}
add_action('after_setup_theme', 'hawkeye_theme_setup');

// Enqueue Styles and Scripts
function hawkeye_enqueue_assets() {
    // Bootstrap and Main Styles
    wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/css/bootstrap.min.css');
    wp_enqueue_style('hawkeye-style', get_template_directory_uri() . '/css/style.css');

    // Libraries
    wp_enqueue_style('hawkeye-animate', get_template_directory_uri() . '/lib/animate/animate.min.css');
    wp_enqueue_style('hawkeye-owlcarousel', get_template_directory_uri() . '/lib/owlcarousel/assets/owl.carousel.min.css');
    wp_enqueue_style('hawkeye-owltheme', get_template_directory_uri() . '/lib/owlcarousel/assets/owl.theme.default.min.css');

    // jQuery and JavaScript Files
    wp_enqueue_script('jquery');
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/js/bootstrap.bundle.min.js', array('jquery'), null, true);
    wp_enqueue_script('hawkeye-main', get_template_directory_uri() . '/js/main.js', array('jquery'), null, true);
    wp_enqueue_script('hawkeye-easing', get_template_directory_uri() . '/lib/easing/easing.min.js', array('jquery'), null, true);
    wp_enqueue_script('hawkeye-owlcarousel', get_template_directory_uri() . '/lib/owlcarousel/owl.carousel.min.js', array('jquery'), null, true);
    wp_enqueue_script('hawkeye-waypoints', get_template_directory_uri() . '/lib/waypoints/waypoints.min.js', array('jquery'), null, true);
    wp_enqueue_script('hawkeye-counterup', get_template_directory_uri() . '/lib/counterup/counterup.min.js', array('jquery'), null, true);
    wp_enqueue_script('hawkeye-wow', get_template_directory_uri() . '/lib/wow/wow.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'hawkeye_enqueue_assets');

// Auto Create Menu
function hawkeye_auto_create_menu() {
    // Menu Name
    $menu_name = 'Primary Menu';
    $menu_exists = wp_get_nav_menu_object($menu_name);

    if (!$menu_exists) {
        // Create the menu
        $menu_id = wp_create_nav_menu($menu_name);
        
        // Get all published pages
        $pages = get_pages();

        // Loop through each page and add it to the menu
        foreach ($pages as $page) {
            wp_update_nav_menu_item($menu_id, 0, array(
                'menu-item-title'  => esc_attr($page->post_title),
                'menu-item-object' => 'page',
                'menu-item-object-id' => $page->ID,
                'menu-item-type'   => 'post_type',
                'menu-item-status' => 'publish'
            ));
        }

        // Assign menu to theme location
        $locations = get_theme_mod('nav_menu_locations');
        $locations['primary'] = $menu_id;
        set_theme_mod('nav_menu_locations', $locations);

        // Debugging: Log the menu creation
        error_log('Primary Menu created and assigned.');
    } else {
        // Debugging: Log that the menu already exists
        error_log('Primary Menu already exists.');
    }
}
// Run only when the theme is activated
function hawkeye_theme_activation() {
    hawkeye_auto_create_menu();
}
add_action('after_switch_theme', 'hawkeye_theme_activation');

// Register Custom Post Type: Services
function hawkeye_register_services_post_type() {
    $args = array(
        'labels'      => array('name' => 'Services', 'singular_name' => 'Service'),
        'public'      => true,
        'has_archive' => true,
        'supports'    => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'   => 'dashicons-hammer',
    );
    register_post_type('service', $args);
}
add_action('init', 'hawkeye_register_services_post_type');

// Register Custom Post Type: Projects
function hawkeye_register_projects_post_type() {
    $args = array(
        'labels'      => array('name' => 'Projects', 'singular_name' => 'Project'),
        'public'      => true,
        'has_archive' => true,
        'supports'    => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'   => 'dashicons-portfolio',
    );
    register_post_type('project', $args);
}
add_action('init', 'hawkeye_register_projects_post_type');

// Widget Areas (Sidebar & Footer)
function hawkeye_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'hawkeye'),
        'id'            => 'sidebar-1',
        'description'   => __('Main Sidebar', 'hawkeye'),
        'before_widget' => '<div class="widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Widget', 'hawkeye'),
        'id'            => 'footer-1',
        'description'   => __('Footer Widget Area', 'hawkeye'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'hawkeye_widgets_init');

// Custom Excerpt Length
function hawkeye_custom_excerpt_length($length) {
    return 20; // Set excerpt length to 20 words
}
add_filter('excerpt_length', 'hawkeye_custom_excerpt_length', 999);

// Add Theme Support for Contact Form 7
function hawkeye_add_cf7_support() {
    add_theme_support('contact-form-7');
}
add_action('after_setup_theme', 'hawkeye_add_cf7_support');

// Allow Upload of SVG Files
function hawkeye_enable_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'hawkeye_enable_svg_upload');
?>