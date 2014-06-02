/**
 * cbpBGSlideshow.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpBGSlideshow = (function() {

	var $slideshow = $( '#cbp-bislideshow' ),
		$items = $slideshow.children( 'li' ),
		itemsCount = $items.length,
		$controls = $( '#cbp-bicontrols' ),
		navigation = {
			$navPrev : $controls.find( 'span.cbp-biprev' ),
			$navNext : $controls.find( 'span.cbp-binext' ),
			$navPlayPause : $controls.find( 'span.cbp-bipause' )
		},
		// current item´s index
		current = 0,
		// timeout
		slideshowtime,
		// true if the slideshow is active
		isSlideshowActive = true,
		// it takes 3.5 seconds to change the background image
		interval = 3500;

	function init( config ) {
		var currentState = history.state;
		if (currentState) {
			current = currentState.current;
		}
		console.log(currentState);

		// preload the images
		$slideshow.imagesLoaded()
			.always( function( instance ) {

			})
			.progress( function( instance, image ) {
				if (image.img.alt == "middle") {
					if( Modernizr.backgroundsize ) {
						$items.each( function() {
							var $item = $( this );
							$item.css( 'background-image', 'url(' + $item.find( 'img' ).attr( 'src' ) + ')' );
						} );
					}
					else {
						$slideshow.find( 'img' ).show();
						// for older browsers add fallback here (image size and centering)
					}
					// show first item
					$items.eq( current ).css( 'opacity', 1 );
					// initialize/bind the events
					initEvents();
					// start the slideshow
					startSlideshow();
				}
			});
	}

	function initEvents() {

		navigation.$navPlayPause.on( 'click', function() {

			var $control = $( this );
			if( $control.hasClass( 'cbp-biplay' ) ) {
				$control.removeClass( 'cbp-biplay' ).addClass( 'cbp-bipause' );
				startSlideshow();
			}
			else {
				$control.removeClass( 'cbp-bipause' ).addClass( 'cbp-biplay' );
				stopSlideshow();
			}

		} );

		navigation.$navPrev.on( 'click', function() { 
			navigate( 'prev' ); 
			if( isSlideshowActive ) { 
				startSlideshow(); 
			} 
		} );
		navigation.$navNext.on( 'click', function() { 
			navigate( 'next' ); 
			if( isSlideshowActive ) { 
				startSlideshow(); 
			}
		} );

		document.onkeydown = function(e) {
			e = e || window.event;
			if (e.keyCode == '39') {
				navigate( 'next' );
				if( isSlideshowActive ) { 
					startSlideshow(); 
				}
			} else if (e.keyCode == '37') {
				navigate( 'prev' );
				if( isSlideshowActive ) { 
					startSlideshow(); 
				}
			}
		}

		window.onpopstate = function(state) {
			console.log(state);
		}

	}

	function navigate( direction ) {

		// current item
		var $oldItem = $items.eq( current );
		
		if( direction === 'next' ) {
			current = current < itemsCount - 1 ? ++current : 0;
		}
		else if( direction === 'prev' ) {
			current = current > 0 ? --current : itemsCount - 1;

		}

		var slide_id = $items.eq(current).find('img').attr('data-id');
		var state = {
			data_id: slide_id, 
			current: current
	    }
	    var stateToPush = slide_id+"#"+current;
		history.pushState(state, "Image", stateToPush);

		// new item
		var $newItem = $items.eq( current );
		// show / hide items
		$oldItem.css( 'opacity', 0 );
		$newItem.css( 'opacity', 1 );

	}

	function startSlideshow() {

		isSlideshowActive = true;
		clearTimeout( slideshowtime );
		slideshowtime = setTimeout( function() {
			navigate( 'next' );
			startSlideshow();
		}, interval );

	}

	function stopSlideshow() {
		isSlideshowActive = false;
		clearTimeout( slideshowtime );
	}

	return { init : init };

})();