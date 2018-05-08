<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<title> <?php echo get_bloginfo(); ?> </title>
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<header id="masthead" class="site-header">
			<div class="wrapper cf">
				<h1 class="site-branding">
					<?php the_custom_logo(); ?>
				</h1>
				<nav id="site-navigation" class="main-navigation">
					<span class="hamburger"> </span>
					<?php wp_nav_menu( array( 'theme_location' => 'header') ); ?>					
				</nav>
			</div>			
		</header>

	