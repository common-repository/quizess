<?php
/**
 * Title content
 *
 * @package Quizess\Views\Sections
 * @since 1.0.0
 */

$welcome_message = apply_filters( 'qz_get_quiz_options', $post->post_content, 'welcome' );

?>

<div class="quiz__welcome--outer">
  <h1 class="quiz__welcome--message">
    <?php
    if ( ! empty( $welcome_message ) ) {
      ?>
      <?php echo esc_html( $welcome_message ); ?>
      <?php } else { ?>
      <?php echo esc_html__( 'Welcome to our quiz', 'quizess' ); ?>
    <?php } ?>
  </h1>
</div>
