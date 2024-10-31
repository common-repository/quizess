<?php
/**
 * The class file that contains method for saving quiz player scores
 *
 * @since   1.0.0
 * @package Quizess\Routes\Route
 */

namespace Quizess\Routes\Route;

use Eightshift_Libs\Routes\Callable_Route;
use Quizess\Routes\Route_Security;

use Quizess\Routes\Base_Route;

use Quizess\Routes\Routes_Security;
use Quizess\Core\Config;

/**
 * Class Post_Score
 */
class Post_Scores extends Base_Route implements Callable_Route, Route_Security {

  const ROUTE_NAME = '/scores';

  /**
   * Options slug
   *
   * @since 1.0.0
   */
  const OPTIONS_SLUG = self::NAMESPACE_NAME . self::VERSION . self::ROUTE_NAME;

  /**
   * Instance variable of rest security.
   *
   * @var object
   *
   * @since 1.0.0
   */
  protected $routes_security;

  /**
   * Initialize the class
   *
   * @param Routes_Security $routes_security Security callbacs.
   * @since 1.0.0
   */
  public function __construct( Routes_Security $routes_security ) {
    // Security.
    $this->routes_security = $routes_security;
  }

  /**
   * Get callback arguments array
   *
   * @return array Either an array of options for the endpoint,
   */
  protected function get_callback_arguments() : array {
    return [
      'methods'             => static::CREATABLE,
      'callback'            => [ $this, 'route_callback' ],
      'permission_callback' => [ $this, 'authentification_check' ],
    ];
  }


  /**
   * Update quiz records upon quiz submit from frontend.
   *
   * This callback is triggered when a front end app
   * goes to the @link https://API-URL/wp-json/quizess/v1/scores
   * endpoint.
   *
   * @api
   *
   * @throws \WP_Error Error if the token is missing or wrong or the password
   * is the same.
   * @param \WP_REST_Request $request Data got from enpoint url.
   * @return \WP_REST_Response|\WP_Error          Developer data array.
   *
   * @since 1.0.0
   */
  public function route_callback( \WP_REST_Request $request ) {

    $body = \json_decode( $request->get_body(), true );

    $quiz_id = $body['id'] ?? '';
    $correct = $body['correct'] ?? '';
    $total   = $body['total'] ?? '';
    $stats   = $body['stats'] ?? '';

    $question_stats = [];
    $answer_stats   = [];

    // create question stats, eg. was answer corrent or incorrect.
    foreach ( $stats as $key => $stat ) {
      $cur_correct      = ( $stat['correct'] === true ) ? 1 : 0;
      $question_stats[] = $cur_correct;
      $answer_stats[]   = [
        'number' => $stat['id'],
        'correct' => $cur_correct,
      ];
    }

    $current_user_id   = get_current_user_id();
    $user_data         = get_userdata( $current_user_id );
    $user_display_name = $user_data->data->display_name;

    // create quiz stats, save player data under players id, which we remove from endpoint for frontend.
    $quiz_stats = [
      'players' => [
        $current_user_id => [
          'name' => $user_display_name,
          'attempts' => 1,
          'correct' => $correct,
          'total' => $total,
          'last' => [
            'correct' => $correct,
            'total' => $total,
            'answers' => $answer_stats,
          ],
        ],
      ],
      'stats' => $question_stats,
    ];

    $scores = get_post_meta( $quiz_id, Config::SCORES_META_KEY, true );

    if ( empty( $scores ) ) {

        delete_post_meta( $quiz_id, Config::SCORES_META_KEY );
        add_post_meta( $quiz_id, Config::SCORES_META_KEY, $quiz_stats );

    } else {
        $user_scores        = [];
        $updated_stats      = [];
        $current_user_stats = $scores['players'][ $current_user_id ];
        $current_stats      = $scores['stats'];

      if ( empty( $current_user_stats ) ) {
        $user_scores = $quiz_stats['players'][ $current_user_id ];
      } else {
        $user_scores['name']     = $current_user_stats['name'];
        $user_scores['attempts'] = $current_user_stats['attempts'] + 1;
        $user_scores['correct']  = $current_user_stats['correct'] + $correct;
        $user_scores['total']    = $current_user_stats['total'] + $total;
        $user_scores['last']     = $quiz_stats['players'][ $current_user_id ]['last'];
      }

      if ( empty( $current_stats ) ) {
        $updated_stats = $quiz_stats['stats'];
      } else {
        foreach ( $quiz_stats['stats'] as $index => $stat ) {
          $updated_stats[] = ( $current_stats[ $index ] ) ? $current_stats[ $index ] + $quiz_stats['stats'][ $index ] : $quiz_stats['stats'][ $index ];
        }
      }

        $scores['players'][ $current_user_id ] = $user_scores;
        $scores['stats']                       = $updated_stats;

        update_post_meta( $quiz_id, Config::SCORES_META_KEY, $scores );

    }

    return \rest_ensure_response( __( 'Scores successfully submitted', 'quizess' ) );
  }

  /**
   * Security callback
   *
   * @api
   *
   * @param \WP_REST_Request $request Full data about the request.
   * @return bool|error               True if user authentication passes, error otherwise.
   *
   * @since 1.0.0
   */
  public function authentification_check( \WP_REST_Request $request ) {
    return $this->routes_security->user_basic_authentication_check( $request );
  }

}
