<?php get_header(); ?>
<main>
	<?php if( have_rows( 'content' ) ):
			while( have_rows('content') ): the_row();
				$layout = get_row_layout();
				switch( $layout ):
					case 'banner': ?>
						<div class="banner-container">
							<div class="banner-image">
								<img src="<?php echo get_sub_field('image'); ?>">
							</div>
							<div class="banner-text">
								<p> <?php echo get_sub_field('text'); ?> </p>
							</div>
						</div>
			<?php   break;
					case 'general_section': ?>
						<div class="general-container">
							<?php if( get_sub_field( 'heading' ) ): ?>
								<p> <?php echo get_sub_field('heading'); ?> </p>
							<?php endif; ?>
							<?php if( get_sub_field( 'content' ) ): ?>
								<p> <?php echo get_sub_field('content'); ?> </p>
							<?php endif; ?>
							<?php if( get_sub_field( 'cta' ) && get_sub_field( 'url' ) ): ?>
								<a href="<?php echo get_sub_field('url'); ?>"> <?php echo get_sub_field('cta'); ?> </a>
							<?php endif; ?>
						</div>
			<?php	break;
					case 'block_section': ?>
						<div class="block-container">
							<div class="block-image">
								<img src="<?php echo get_sub_field('image'); ?>">
							</div>
							<div class="block-text">
								<a href="<?php echo get_sub_field('url'); ?>"> <?php echo get_sub_field('text'); ?> </a>
							</div>							
						</div>

			<?php   break;
			    endswitch;
			endwhile;
		endif;
	?>
</main>
<?php get_footer(); ?>