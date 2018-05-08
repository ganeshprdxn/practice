<?php
function practice_scripts() {
	wp_enqueue_style( 'practice-style', get_template_directory_uri() . '/dist/styles/style.min.css', array(), null, null );
	wp_enqueue_script( 'practice-script', get_template_directory_uri(). '/dist/scripts/main.min.js', array('jquery'), null, true );
}
add_action( 'wp_enqueue_scripts', 'practice_scripts' );



function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function practice_setup() {

	add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );

	add_theme_support( 'custom-logo' );

	register_nav_menus( array(
		'header' => 'Header Navigation',
		'footer' => 'Footer Navigation',
	));
}
add_action( 'after_setup_theme', 'practice_setup' );