<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<title> <?php echo get_bloginfo(); ?> </title>
		<?php wp_head(); ?>
	</head>
	<body>
		<header id="masthead" class="site-header">
			<div class="wrapper cf">
				<h1 class="site-branding">
					<?php the_custom_logo(); ?>
				</h1>
				<nav id="site-navigation" class="main-navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'header') ); ?>
					
				</nav>
			</div>
			
		</header>

	