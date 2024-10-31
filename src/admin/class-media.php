<?php
/**
 * The Media specific functionality.
 *
 * @since   1.0.0
 * @package Quizess\Admin
 */

namespace Quizess\Admin;

use Eightshift_Libs\Core\Service;

/**
 * Class Media
 */
class Media implements Service {

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {
    add_filter( 'upload_mimes', [ $this, 'enable_mime_types' ] );
    add_filter( 'wp_prepare_attachment_for_js', [ $this, 'enable_svg_library_preview' ], 10, 2 );
    add_filter( 'wp_handle_upload_prefilter', [ $this, 'check_svg_on_media_upload' ] );
    add_filter( 'after_setup_theme', [ $this, 'enable_full_width' ] );
    add_filter( 'wp_check_filetype_and_ext', [ $this, 'disable_mime_check' ], 11, 4 );
  }

  /**
   * Enable SVG upload in media
   *
   * @param array $mimes Load all mimes types.
   * @return array       Return original and updated.
   *
   * @since 1.0.0
   */
  public function enable_mime_types( $mimes ) {
    $mimes['svg']  = 'image/svg+xml';
    $mimes['zip']  = 'application/zip';
    $mimes['json'] = 'application/json';
    return $mimes;
  }

  /**
   * Enable Full width images
   *
   * @since 1.0.0
   */
  public function enable_full_width() {
    add_theme_support( 'align-wide' );
  }

  /**
   * Check if json is valid on Add New Media Page.
   *
   * @param array $data data.
   * @param array $file file.
   * @param array $filename filename.
   * @param array $mimes mimes.
   * @return array
   *
   * @since 3.0.0 Replacing file_get_content with file.
   * @since 1.0.0
   */
  public function disable_mime_check( $data, $file, $filename, $mimes ) {
    $wp_filetype = wp_check_filetype( $filename, $mimes );

    $ext             = $wp_filetype['ext'];
    $type            = $wp_filetype['type'];
    $proper_filename = $data['proper_filename'];

    return compact( 'ext', 'type', 'proper_filename' );
  }

  /**
   * Enable SVG preview in Media Library
   *
   * @param array      $response   Array of prepared attachment data.
   * @param int|object $attachment Attachment ID or object.
   *
   * @since 3.0.0 Replacing file_get_content with file.
   * @since 2.0.2 Added checks if xml file is valid.
   * @since 1.0.0
   */
  public function enable_svg_library_preview( $response, $attachment ) {
    if ( $response['type'] === 'image' && $response['subtype'] === 'svg+xml' && class_exists( 'SimpleXMLElement' ) ) {
      try {
        $path = get_attached_file( $attachment->ID );

        if ( file_exists( $path ) ) {
          $svg_content = file( $path );
          $svg_content = implode( ' ', $svg_content );

          if ( ! $this->is_valid_xml( $svg_content ) ) {
            new \WP_Error( sprintf( esc_html__( 'Error: File invalid: %s', 'quizess' ), $path ) );
            return false;
          }

          $svg    = new \SimpleXMLElement( $svg_content );
          $src    = $response['url'];
          $width  = (int) $svg['width'];
          $height = (int) $svg['height'];

          // media gallery.
          $response['image'] = compact( 'src', 'width', 'height' );
          $response['thumb'] = compact( 'src', 'width', 'height' );

          // media single.
          $response['sizes']['full'] = array(
            'height'      => $height,
            'width'       => $width,
            'url'         => $src,
            'orientation' => $height > $width ? 'portrait' : 'landscape',
          );
        }
      } catch ( \Exception $e ) {
        new \WP_Error( sprintf( esc_html__( 'Error: %s', 'quizess' ), $e ) );
      }
    }

    return $response;
  }

  /**
   * Check if svg is valid on Add New Media Page.
   *
   * @param array $response Response array.
   * @return array
   *
   * @since 1.0.0
   */
  public function check_svg_on_media_upload( $response ) {
    if ( $response['type'] === 'image/svg+xml' && class_exists( 'SimpleXMLElement' ) ) {
      $path = $response['tmp_name'];

      $svg_content = file( $path );
      $svg_content = implode( ' ', $svg_content );

      if ( file_exists( $path ) ) {
        if ( ! $this->is_valid_xml( $svg_content ) ) {
          return array(
            'size' => $response,
            'name' => $response['name'],
          );
        }
      }
    }
    return $response;
  }

  /**
   * Check if XML is valid file used for svg.
   *
   * @param xml $xml Full xml document.
   * @return boolean
   *
   * @since 1.0.0
   */
  public function is_valid_xml( $xml ) {
    libxml_use_internal_errors( true );
    $doc = new \DOMDocument( '1.0', 'utf-8' );
    $doc->loadXML( $xml );
    $errors = libxml_get_errors();
    return empty( $errors );
  }
}
