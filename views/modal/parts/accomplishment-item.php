<?php
/**
 * Last score item
 *
 * @package Quizess\Views\Modal\Parts
 * @since 1.0.0
 */

$success = apply_filters( 'qz_get_gercentage', $correct, $total );

$last_score_info = [
  $correct,
  $total,
  "{$success}%",
];

?>

<?php foreach ( $last_score_info as $index => $info ) { ?>
  <div class="quiz-accomplishment__inner">
    <?php echo esc_html( $info ); ?>
  </div>
<?php } ?>
