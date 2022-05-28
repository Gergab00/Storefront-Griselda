<?php

/**
 * Aquí se agregan los archvios css y js
 * 
 * @package Storefront-Griselda
 * @author Gerardo Gonzalez <gergab00@gmail.com>
 * @version 1.1.3
 * 
 */

// Incluir Bootstrap CSS
function bootstrap_css()
{
	wp_enqueue_style(
		'bootstrap_css',
		'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
		array(),
		'5.1.3'
	);

	wp_enqueue_style(
		'custom_css',
		get_stylesheet_directory_uri().'/css/custom.css',
		array(),
		wp_get_theme()->get('Version')
	);

	wp_enqueue_style(
		'custom_css',
		get_stylesheet_directory_uri().'/css/textLighting.css',
		array(),
		wp_get_theme()->get('Version')
	);
}
add_action('wp_enqueue_scripts', 'bootstrap_css');


// Incluir Bootstrap Bundle JS 
function bootstrap_js()
{

	wp_enqueue_script(
		'bootstrap_js',
		'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
		array('jquery'),
		'5.1.3',
		true
	);
}
add_action('wp_enqueue_scripts', 'bootstrap_js');
