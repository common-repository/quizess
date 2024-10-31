<?php
/**
 * The class for admind dashboard menu page. Here we register dashboard option page.
 *
 * @since 1.0.0
 * @package Quizess\Admin
 */

namespace Quizess\Admin;

use Eightshift_Libs\Core\Service;

use Quizess\Core\Config;

/**
 * Class Menu_Page
 */
class Menu_Page implements Service {

  /**
   * Parent menu page slug.
   *
   * @since 1.0.0
   */
  const PARENT_MENU_SLUG = 'quizess_dashboard';

  /**
   * Default capability.
   *
   * @since 1.0.0
   */
  const USER_CAPABILITY = 'edit_posts';


  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {
    add_action( 'admin_menu', [ $this, 'register_menu_page' ] );
    add_action( 'admin_menu', [ $this, 'register_submenu_pages' ] );
    add_filter( 'parent_file', [ $this, 'parent_menu_focus' ] );
  }


  /**
   * Registers new menu page.
   *
   * @since 1.4.0
   */
  public function register_menu_page() {

    $page_title  = esc_html__( 'Quizess', 'quizess' );
    $menu_string = esc_html__( 'Quizess', 'quizess' );
    $callback    = [ $this, 'dashboard_callback' ];

    add_menu_page( $page_title, $menu_string, static::USER_CAPABILITY, static::PARENT_MENU_SLUG, $callback, 'dashicons-welcome-learn-more', 50 );

  }

  /**
   * Registers new menu page. And add all subpages.
   *
   * @since 1.4.0
   */
  public function register_submenu_pages() {

    $parent_callback = [ $this, 'dashboard_callback' ];

    $submenu_pages = array(

        // Dashboard.
      array(
        'parent_slug' => static::PARENT_MENU_SLUG,
        'page_title'  => esc_html__( 'Dashboard', 'quizess' ),
        'menu_title'  => esc_html__( 'Dashboard', 'quizess' ),
        'capability'  => static::USER_CAPABILITY,
        'menu_slug'   => static::PARENT_MENU_SLUG,
        'function'    => $parent_callback,
      ),

        // Quiz :: All Quizess.
      array(
        'parent_slug' => static::PARENT_MENU_SLUG,
        'page_title'  => esc_html__( 'Quizess', 'quizess' ),
        'menu_title'  => esc_html__( 'All Quizess', 'quizess' ),
        'capability'  => static::USER_CAPABILITY,
        'menu_slug'   => 'edit.php?post_type=' . Config::QUIZESS_POST_SLUG,
        'function'    => null,
      ),

        // Quiz :: Add New Quiz.
      array(
        'parent_slug' => static::PARENT_MENU_SLUG,
        'page_title'  => esc_html__( 'New Quiz', 'quizess' ),
        'menu_title'  => esc_html__( 'Add New Quiz', 'quizess' ),
        'capability'  => static::USER_CAPABILITY,
        'menu_slug'   => 'post-new.php?post_type=' . Config::QUIZESS_POST_SLUG,
        'function'    => null,
      ),

        // Quiz :: Quiz Topics.
      array(
        'parent_slug' => static::PARENT_MENU_SLUG,
        'page_title'  => esc_html__( 'Quiz Topics', 'quizess' ),
        'menu_title'  => esc_html__( 'Quiz Topics', 'quizess' ),
        'capability'  => static::USER_CAPABILITY,
        'menu_slug'   => 'edit-tags.php?taxonomy=' . Config::QUIZESS_CATEGORY_SLUG . '&post_type=' . Config::QUIZESS_POST_SLUG,
        'function'    => null,
      ),

        // Question :: All Questions.
      array(
        'parent_slug' => static::PARENT_MENU_SLUG,
        'page_title'  => esc_html__( 'Questions', 'quizess' ),
        'menu_title'  => esc_html__( 'All Questions', 'quizess' ),
        'capability'  => static::USER_CAPABILITY,
        'menu_slug'   => 'edit.php?post_type=' . Config::QUESTION_POST_SLUG,
        'function'    => null,
      ),

        // Question :: Add New Question.
      array(
        'parent_slug' => static::PARENT_MENU_SLUG,
        'page_title'  => esc_html__( 'New Question', 'quizess' ),
        'menu_title'  => esc_html__( 'Add New Question', 'quizess' ),
        'capability'  => static::USER_CAPABILITY,
        'menu_slug'   => 'post-new.php?post_type=' . Config::QUESTION_POST_SLUG,
        'function'    => null,
      ),

        // Question :: Question Topics.
      array(
        'parent_slug' => static::PARENT_MENU_SLUG,
        'page_title'  => esc_html__( 'Question Topics', 'quizess' ),
        'menu_title'  => esc_html__( 'Question Topics', 'quizess' ),
        'capability'  => static::USER_CAPABILITY,
        'menu_slug'   => 'edit-tags.php?taxonomy=' . Config::QUESTION_CATEGORY_SLUG . '&post_type=' . Config::QUESTION_POST_SLUG,
        'function'    => null,
      ),

    );

    // Add each submenu item to custom admin menu.
    foreach ( $submenu_pages as $submenu ) {

      add_submenu_page(
        $submenu['parent_slug'],
        $submenu['page_title'],
        $submenu['menu_title'],
        $submenu['capability'],
        $submenu['menu_slug'],
        $submenu['function']
      );

    }

  }

  /**
   * Fixes parent menu focus for custom post type and custom taxonomies.
   *
   * @param string $parent_file parent file string.
   * @since 1.1.0
   */
  public function parent_menu_focus( string $parent_file ) : string {

    global $submenu_file, $current_screen, $pagenow;

    // Set the submenu as active/current while anywhere in your Custom Post Type.
    if ( $current_screen->post_type === Config::QUIZESS_POST_SLUG || $current_screen->post_type === Config::QUESTION_POST_SLUG ) {

      $post_type     = '';
      $taxonomy_type = '';

      // switches between quiz and question post type and their custom taxonomies.
      switch ( $current_screen->post_type ) {
        case Config::QUIZESS_POST_SLUG:
          $post_type     = Config::QUIZESS_POST_SLUG;
          $taxonomy_type = Config::QUIZESS_CATEGORY_SLUG;
              break;
        default:
          $post_type     = Config::QUESTION_POST_SLUG;
          $taxonomy_type = Config::QUESTION_CATEGORY_SLUG;
              break;
      }

      if ( $pagenow === 'post.php' ) {
          // phpcs:ignore WordPress.WP.GlobalVariablesOverride.OverrideProhibited
          $submenu_file = "edit.php?post_type={$post_type}";
      }

      if ( $pagenow === 'edit-tags.php' ) {
          // phpcs:ignore WordPress.WP.GlobalVariablesOverride.OverrideProhibited
          $submenu_file = "edit-tags.php?taxonomy={$taxonomy_type}&post_type={$post_type}";
      }

        $parent_file = static::PARENT_MENU_SLUG;

    }

    return $parent_file;

  }

  /**
   * Menu page callback.
   *
   * @since 1.4.0
   */
  public function dashboard_callback() {

    $dashboard_template = apply_filters( 'qz_get_base_url', 'path' ) . 'views/admin/dashboard.php';
    if ( ! empty( $dashboard_template ) ) {
      include $dashboard_template;
    }

  }

}
