<?php
/**
 * The Menu specific functionality.
 *
 * @since   1.0.0
 * @package Quizess\Admin
 */

namespace Quizess\Admin;

use Eightshift_Libs\Core\Service;

use Quizess\Core\Config;

/**
 * Class Menu
 */
class Menu implements Service {

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {
    add_action( 'after_setup_theme', [ $this, 'register_menu_positions' ], 11 );
    add_filter( 'qz_get_menu_by_position', [ $this, 'get_menu_by_position' ] );
    add_filter( 'qz_get_menus', [ $this, 'get_menus' ] );
  }


  /**
   * Return all menu poistions
   *
   * @since 1.0.0
   *
   * @return array Of menu positions with name and slug.
   */
  private function get_menu_positions() : array {
    return array(
      Config::MENU_NAME => esc_html__( 'Quiz menu', 'quizess' ),
    );
  }

  /**
   * Register All Menu positions
   *
   * @since 1.0.0
   */
  public function register_menu_positions() : void {
    register_nav_menus(
      $this->get_menu_positions()
    );
  }

  /**
   * Return array with all menus and their items.
   *
   * @param string $position    Single or all menu positions.
   * @return array Menu array styled for json-api.
   *
   * @since 1.0.0
   */
  public function get_menus( $position = 'all' ) : array {
    $menu_positions = $this->get_menu_positions();

    $menu_output = array();
    foreach ( $menu_positions as $menu_position_key => $menu_position_value ) {

      $menu_output[] = array(
        'name'          => $this->get_assigned_menu_items( $menu_position_key, true ),
        'position_name' => $menu_position_value,
        'position'      => $menu_position_key,
        'items'         => $this->get_assigned_menu_items( $menu_position_key ),
      );
    }

    return $menu_output;
  }

  /**
   * Return menu with given name.
   *
   * @param string $menu_position    Menu location configured in get_menu_positions() function.
   * @return array Menu array styled for json-api.
   *
   * @since 1.0.0
   */
  public function get_menu_by_position( string $menu_position ) : array {

    $output       = [];
    $custom_menus = $this->get_menus();

    foreach ( $custom_menus as $index => $item ) {
      if ( $item['position'] === $menu_position ) {

        if ( empty( $item['name'] ) ) {
          break;
        }

        if ( empty( $item['items'] ) ) {
          break;
        }
        $output = $item;
      }
    }

    return $output;
  }

  /**
   * Return menu items assigned to menu locations
   * With changed url from absolute to relative path
   *
   * @param string $menu_location    Menu location configured in get_menu_positions() function.
   * @param bool   $output_menu_name If true it will return menu term name.
   * @return array Menu items styled for json-api.
   *
   * @since 1.0.0
   */
  private function get_assigned_menu_items( string $menu_location, bool $output_menu_name = false ) {
    if ( ! $menu_location ) {
      return false;
    }

    // Get menu locations and their IDs.
    $locations = get_nav_menu_locations();

    // Check if menu location provided exists.
    if ( ! $locations || ! isset( $locations[ $menu_location ] ) ) {
      return false;
    }

    // Get menu location data from menu location ID.
    $menu = get_term( $locations[ $menu_location ], 'nav_menu' );
    if ( \is_wp_error( $menu ) ) {
      return false;
    }

    if ( $output_menu_name === true ) {
      return $menu->name;
    }

    // Return menu items as object.
    $menu_items = wp_get_nav_menu_items( $menu->term_id );
    if ( ! isset( $menu_items ) || ! $menu_items ) {
      return false;
    }

    // Filter output to match requirements.
    $output = array();
    foreach ( $menu_items as $menu_item ) {
      $url = '/';

      // If is custom link just output url.
      if ( $menu_item->object === 'custom' ) {
        $url = $menu_item->url;
      } else {

        // If is home page output only slash.
        if ( $menu_item->url === home_url( '/' ) || $menu_item->url === home_url() ) {
          $url = '/';
        } else {
          $url = apply_filters( 'qz_trim_url', $menu_item->url );
        }
      }

      // Remove trashed items and empty URL's.
      if ( empty( $menu_item->url ) || strpos( $menu_item->url, '__trashed' ) !== false ) {
        continue;
      }

      $output[] = array(
        'title'       => $menu_item->title,
        'id'          => $menu_item->ID,
        'url'         => $url,
        'parent'      => (int) $menu_item->menu_item_parent,
      );

    }

    $temp_items = $this->build_tree_menu( $output );

    return $temp_items['children'];
  }

  /**
   * Return tree menu with children from flat menu that is returned by default.
   *
   * @param array $items menu items.
   * @param array $tree object tree.
   */
  private function build_tree_menu( array $items, array $tree = null ) : array {

    if ( ! isset( $tree ) ) {
      $tree = [ 'children' => [] ];
    } elseif ( ! isset( $tree['children'] ) ) {
      $tree['children'] = [];
    }

    foreach ( $items as $index => $item ) {
      if ( isset( $tree['id'] ) === false && $item['parent'] === 0 || isset( $tree['id'] ) && $item['parent'] === $tree['id'] ) {

        array_splice( $items, $index, 1 );
        $output = $this->build_tree_menu( $items, $item );
        array_push( $tree['children'], $output );
      }
    }

    return $tree;

  }
}
