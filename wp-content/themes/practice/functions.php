<?php
function practice_enqueue_scripts() {
	wp_enqueue_style('practice-style', get_template_directory_uri() . 'dist/styles/style.min.css', array(), null, null);
	wp_enqueue_script('practice-script', get_template_directory_uri(). 'dist/js/main.js', array(), null, true);
}