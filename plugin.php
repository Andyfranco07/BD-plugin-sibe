<?php

/*
function wpa_enqueue_scripts() {
	wp_enqueue_script( 'base datos', get_theme_file_uri( 'sibe/dist/main.js' ), [], null, true);
}

add_action( 'admin_enqueue_scripts', 'wpa_enqueue_scripts', 100 );

function shortcode_footer_sibe_plugin($att){
    wp_enqueue_script( 'footer-plugin-shortcode-script-wnb', 'dist/main.js', array( ), '1.0',true );


    return "<div id='footer-derechos-panel-2022'>";
}
add_action( 'admin_enqueue_scripts', 'shortcode_footer_sibe_plugin' );


function pluginDatos() {
    wp_enqueue_script( 'pluginDatos', 'dist/main.js', array( ), '1.0',true );

    return "<div id='footer-derechos-panel-2022'>";
}
add_action( 'admin_enqueue_scripts', 'pluginDatos' );

*/


    wp_enqueue_script( 'pluginDatos',plugins_url('/sibe/dist/main.js' ), array( ), '1.0',true);

	echo "<div id='BaseDatosPlugin'>";


