<?php
/**
 * Storefront functions and definitions
 *
 * @package Storefront-Griselda
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$storefront_griselda = array(
    '/enqueue.php',                         // Enqueue scripts and styles.
    '/safe-svg/safe-svg.php',               // Load support SVG imagen and Saniteze it.
);

foreach ( $storefront_griselda as $file ) {
	require_once get_theme_file_path( 'inc' . $file );
}