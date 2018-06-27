<?php
/*
Plugin Name: wp-emojidex-tinymce-plugin
Plugin URI: https://github.com/emojidex/wp-emojidex-tinymce-plugin
Description: emojidex plugin for wordpress tinymce
Version: 0.0.1
Author: emojidex
Author URI: https://www.emojidex.com
License: emojiOL
License URI: https://www.emojidex.com/emojidex/emojidex_open_license
*/

if ( ! class_exists('Emojidex_Tinymce_Plugin') ) :

class Emojidex_Tinymce_Plugin {

  function __construct() {
    if ( is_admin() ) {
      add_action( 'init', array(  $this, 'setup_tinymce_plugin' ) );
    }
  }

  public function setup_tinymce_plugin() {
    if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
      return;
    }

    if ( get_user_option( 'rich_editing' ) !== 'true' ) {
      return;
    }

    add_filter( 'mce_external_plugins', array( &$this, 'add_tinymce_plugin' ) );
    add_filter( 'mce_buttons', array( &$this, 'add_tinymce_toolbar_button' ) );
  }

  public function add_tinymce_plugin( $plugin_array ) {
    $plugin_array['emojidex'] = plugin_dir_url( __FILE__ ) . 'js/plugin.js';
    return $plugin_array;
  }

  public function add_tinymce_toolbar_button( $buttons ) {
    array_push( $buttons, '|', 'emojidex' );
    return $buttons;
  }
}

new Emojidex_Tinymce_Plugin;
endif;
