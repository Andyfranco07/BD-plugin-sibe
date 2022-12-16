<?php
/**
 * @package Base de datos
 * @version 1.0.0
 */
/*
Plugin Name: Base de datos sibe
Description: Plugin para api de articulos sibe
Author: Andy Franco
Version: 1.0.0
Author URI: @Andyfranco07
*/

/*
function my_custom_menu($att) {
	add_menu_page ( 'Base de Datos', 'Base de Datos', 'read', 'sibe/plugin.php', '', '', 101);
	
	
}
	add_action( 'admin_menu', 'my_custom_menu');

*/

/*
function my_custom_menu($att){
global $customMenu;
        
       $customMenu = add_menu_page( 'Base de Datos', 'Base de Datos', 'administrator', 'basedatos', 'pluginDatos', '', 101);
        
}
add_action( 'admin_menu', 'my_custom_menu');

function pluginDatos() {
    wp_enqueue_script( 'pluginDatos',plugins_url('/sibe/dist/main.js', dirname( __FILE__ ) ), array( ), '1.0',true);

	echo "<div id='footer-derechos-panel-2022'>";
}
add_action( 'admin_enqueue_scripts', 'pluginDatos' );
*/

function my_custom_menu(){

	add_menu_page( 'Base de Datos', 'Base de Datos', 'administrator', '/sibe/plugin.php', '', '', 101);
			
}
add_action( 'admin_menu', 'my_custom_menu');