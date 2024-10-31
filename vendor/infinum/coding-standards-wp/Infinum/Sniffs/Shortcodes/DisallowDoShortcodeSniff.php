<?php
/**
 * Infinum coding standards for WordPress
 *
 * @package Infinum\Sniffs\Shortcodes
 *
 * @author  Infinum <info@infinum.co>
 * @license MIT https://github.com/infinum/coding-standards-wp/blob/master/LICENSE
 * @link    https://github.com/infinum/coding-standards-wp
 *
 * @since 0.3.0 Updated sniff to be compatible with latest PHPCS and WPCS
 * @since 1.0.0
 */

namespace Infinum\Sniffs\Shortcodes;

use WordPress\Sniff;
use PHP_CodeSniffer_Tokens as Tokens;

/**
 * Ensures do_shortcode() function is not being used.
 *
 * Don’t use do_shortcode when you can use your callback function directly,
 * which is much more efficient.
 *
 * @link https://konstantin.blog/2013/dont-do_shortcode/
 */
class DisallowDoShortcodeSniff extends Sniff {
  /**
   * Returns an array of tokens this test wants to listen for.
   *
   * @return array
   */
  public function register() {
    return Tokens::$functionNameTokens;
  }

  /**
   * Processes this test, when one of its tokens is encountered.
   *
   * @param int $stackPtr The position of the current token in the token stack.
   *
   * @return void|int
   */
  public function process_token( $stackPtr ) {

    $token = $this->tokens[ $stackPtr ];

    if ( preg_match( '`^do_shortcode`i', $token['content'] ) > 0 ) {
      $this->phpcsFile->addWarning( 'Do not include do_shortcode() function in theme files. Use shortcode callback function instead.', $stackPtr, 'do_shortcodeDetected' );
    }
  }
}
