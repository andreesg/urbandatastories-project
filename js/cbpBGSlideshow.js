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


var images = ["<li><img src='images/001-iiig455_2-0000-137-0001.jpg' data-id='001-iiig455_2-0000-137-0001'/></li>",
"<li><img src='images/iiig455_2-0000-136-0001.jpg' data-id='iiig455_2-0000-136-0001'/></li>",
"<li><img src='images/iiig455_2-0000-138-0001.jpg' data-id='iiig455_2-0000-138-0001'/></li>",
"<li><img src='images/iiig455_2-0000-140-0001.jpg' data-id='iiig455_2-0000-140-0001'/></li>",
"<li><img src='images/iiig455_2-0000-142-0001.jpg' data-id='iiig455_2-0000-142-0001'/></li>",
"<li><img src='images/iiig455_2-0000-144-0001.jpg' data-id='iiig455_2-0000-144-0001'/></li>",
"<li><img src='images/iiig455_2-0000-145-0001.jpg' data-id='iiig455_2-0000-145-0001'/></li>",
"<li><img src='images/iiig455_2-0000-147-0001.jpg' data-id='iiig455_2-0000-147-0001'/></li>",
"<li><img src='images/iiig455_2-0000-149-0001.jpg' data-id='iiig455_2-0000-149-0001'/></li>",
"<li><img src='images/001-iiig455_2-0000-137-0001.jpg' data-id='001-iiig455_2-0000-137-0001'/></li>",
"<li><img src='images/iiig455_2-0000-150-0001.jpg' data-id='iiig455_2-0000-150-0001'/></li>",
"<li><img src='images/iiig455_2-0000-152-0001.jpg' data-id='iiig455_2-0000-152-0001'/></li>",
"<li><img src='images/iiig455_2-0000-155-0001.jpg' data-id='iiig455_2-0000-155-0001'/></li>",
"<li><img src='images/iiig455_2-0000-157-0001.jpg' data-id='iiig455_2-0000-157-0001'/></li>",
"<li><img src='images/iiig455_2-0000-158-0001.jpg' data-id='iiig455_2-0000-158-0001'/></li>",
"<li><img src='images/iiig455_2-0000-159-0001.jpg' data-id='iiig455_2-0000-159-0001'/></li>",
"<li><img src='images/iiig455_2-0000-161-0001.jpg' data-id='iiig455_2-0000-161-0001'/></li>",
"<li><img src='images/iiig455_2-0000-162-0001.jpg' data-id='iiig455_2-0000-162-0001'/></li>",
"<li><img src='images/iiig455_2-0000-163-0001.jpg' data-id='iiig455_2-0000-163-0001'/></li>",
"<li><img src='images/iiig455_2-0000-164-0001.jpg' data-id='iiig455_2-0000-164-0001'/></li>",
"<li><img src='images/iiig455_2-0000-165-0001.jpg' data-id='iiig455_2-0000-165-0001'/></li>",
"<li><img src='images/iiig455_2-0000-166-0001.jpg' data-id='iiig455_2-0000-166-0001'/></li>",
"<li><img src='images/iiig455_2-0000-169-0001.jpg' data-id='iiig455_2-0000-169-0001'/></li>",
"<li><img src='images/iiig455_2-0000-171-0001.jpg' data-id='iiig455_2-0000-171-0001'/></li>",
"<li><img src='images/iiig455_2-0000-172-0001.jpg' data-id='iiig455_2-0000-172-0001'/></li>",
"<li><img src='images/iiig455_2-0000-173-0001.jpg' data-id='iiig455_2-0000-173-0001'/></li>",
"<li><img src='images/iiig455_2-0000-174-0001.jpg' data-id='iiig455_2-0000-174-0001'/></li>",
"<li><img src='images/iiig455_2-0000-177-0001.jpg' data-id='iiig455_2-0000-177-0001'/></li>",
"<li><img src='images/iiig455_2-0000-178-0001.jpg' data-id='iiig455_2-0000-178-0001'/></li>",
"<li><img src='images/iiig455_2-0000-179-0001.jpg' data-id='iiig455_2-0000-179-0001'/></li>",
"<li><img src='images/iiig455_2-0000-180-0001.jpg' data-id='iiig455_2-0000-180-0001'/></li>",
"<li><img src='images/iiig455_2-0000-181-0001.jpg' data-id='iiig455_2-0000-181-0001'/></li>",
"<li><img src='images/iiig455_2-0000-182-0001.jpg' data-id='iiig455_2-0000-182-0001'/></li>",
"<li><img src='images/iiig455_2-0000-183-0001.jpg' data-id='iiig455_2-0000-183-0001'/></li>",
"<li><img src='images/iiig455_2-0000-185-0001.jpg' data-id='iiig455_2-0000-185-0001'/></li>",
"<li><img src='images/iiig455_2-0000-186-0001.jpg' data-id='iiig455_2-0000-186-0001'/></li>",
"<li><img src='images/iiig455_2-0000-187-0001.jpg' data-id='iiig455_2-0000-187-0001'/></li>",
"<li><img src='images/iiig455_2-0000-188-0001.jpg' data-id='iiig455_2-0000-188-0001'/></li>",
"<li><img src='images/iiig455_2-0000-204-0001.jpg' data-id='iiig455_2-0000-204-0001'/></li>",
"<li><img src='images/iiig455_2-0000-205-0001.jpg' data-id='iiig455_2-0000-205-0001'/></li>",
"<li><img src='images/iiig455_2-0000-206-0001.jpg' data-id='iiig455_2-0000-206-0001'/></li>",
"<li><img src='images/iiig455_2-0000-210-0001.jpg' data-id='iiig455_2-0000-210-0001'/></li>",
"<li><img src='images/iiig455_2-0000-211-0001.jpg' data-id='iiig455_2-0000-211-0001'/></li>",
"<li><img src='images/iiig455_2-0000-213-0001.jpg' data-id='iiig455_2-0000-213-0001'/></li>",
"<li><img src='images/iiig455_2-0000-214-0001.jpg' data-id='iiig455_2-0000-214-0001'/></li>",
"<li><img src='images/iiig455_2-0000-216-0001.jpg' data-id='iiig455_2-0000-216-0001'/></li>",
"<li><img src='images/iiig455_2-0000-217-0001.jpg' data-id='iiig455_2-0000-217-0001'/></li>",
"<li><img src='images/iiig455_2-0000-218-0001.jpg' data-id='iiig455_2-0000-218-0001'/></li>",
"<li><img src='images/iiig455_2-0000-219-0001.jpg' data-id='iiig455_2-0000-219-0001'/></li>",
"<li><img src='images/iiig455_2-0000-220-0001.jpg' data-id='iiig455_2-0000-220-0001'/></li>",
"<li><img src='images/iiig455_2-0000-221-0001.jpg' data-id='iiig455_2-0000-221-0001'/></li>",
"<li><img src='images/iiig455_2-0000-223-0001.jpg' data-id='iiig455_2-0000-223-0001'/></li>",
"<li><img src='images/iiig455_2-0000-225-0001.jpg' data-id='iiig455_2-0000-225-0001'/></li>",
"<li><img src='images/iiig455_2-0000-228-0001.jpg' data-id='iiig455_2-0000-228-0001'/></li>",
"<li><img src='images/iiig455_2-0000-229-0001.jpg' data-id='iiig455_2-0000-229-0001'/></li>",
"<li><img src='images/iiig455_2-0000-230-0001.jpg' data-id='iiig455_2-0000-230-0001'/></li>",
"<li><img src='images/iiig455_2-0000-234-0001.jpg' data-id='iiig455_2-0000-234-0001'/></li>",
"<li><img src='images/iiig455_2-0000-237-0001.jpg' data-id='iiig455_2-0000-237-0001'/></li>",
"<li><img src='images/iiig455_2-0000-238-0001.jpg' data-id='iiig455_2-0000-238-0001'/></li>",
"<li><img src='images/iiig455_2-0000-241-0001.jpg' data-id='iiig455_2-0000-241-0001'/></li>",
"<li><img src='images/iiig455_2-0000-243-0001.jpg' data-id='iiig455_2-0000-243-0001'/></li>",
"<li><img src='images/iiig455_2-0000-244-0001.jpg' data-id='iiig455_2-0000-244-0001'/></li>",
"<li><img src='images/iiig455_2-0000-246-0001.jpg' data-id='iiig455_2-0000-246-0001'/></li>",
"<li><img src='images/iiig455_2-0000-249-0001.jpg' data-id='iiig455_2-0000-249-0001'/></li>",
"<li><img src='images/iiig455_2-0000-250-0001.jpg' data-id='iiig455_2-0000-250-0001'/></li>",
"<li><img src='images/iiig455_2-0000-251-0001.jpg' data-id='iiig455_2-0000-251-0001'/></li>",
"<li><img src='images/iiig455_2-0000-252-0001.jpg' data-id='iiig455_2-0000-252-0001'/></li>",
"<li><img src='images/iiig455_2-0000-253-0001.jpg' data-id='iiig455_2-0000-253-0001'/></li>",
"<li><img src='images/iiig455_2-0000-255-0001.jpg' data-id='iiig455_2-0000-255-0001'/></li>",
"<li><img src='images/iiig455_2-0000-256-0001.jpg' data-id='iiig455_2-0000-256-0001'/></li>",
"<li><img src='images/iiig455_2-0000-257-0001.jpg' data-id='iiig455_2-0000-257-0001'/></li>",
"<li><img src='images/iiig455_2-0000-259-0001.jpg' data-id='iiig455_2-0000-259-0001'/></li>",
"<li><img src='images/iiig455_2-0000-264-0001.jpg' data-id='iiig455_2-0000-264-0001'/></li>",
"<li><img src='images/iiig455_2-0000-266-0001.jpg' data-id='iiig455_2-0000-266-0001'/></li>",
"<li><img src='images/iiig455_2-0000-267-0001.jpg' data-id='iiig455_2-0000-267-0001'/></li>",
"<li><img src='images/iiig455_2-0000-268-0001.jpg' data-id='iiig455_2-0000-268-0001'/></li>",
"<li><img src='images/iiig455_2-0000-272-0001.jpg' data-id='iiig455_2-0000-272-0001'/></li>",
"<li><img src='images/iiig455_2-0000-274-0001.jpg' data-id='iiig455_2-0000-274-0001'/></li>",
"<li><img src='images/iiig455_2-0000-275-0001.jpg' data-id='iiig455_2-0000-275-0001'/></li>",
"<li><img src='images/iiig455_2-0000-276-0001.jpg' data-id='iiig455_2-0000-276-0001'/></li>",
"<li><img src='images/ivr828_6-0000-0033.jpg' data-id='ivr828_6-0000-0033'/></li>",
"<li><img src='images/ivr828_6-0000-0035.jpg' data-id='ivr828_6-0000-0035'/></li>",
"<li><img src='images/ivr828_6-0000-0039.jpg' data-id='ivr828_6-0000-0039'/></li>",
"<li><img src='images/ivr828_6-0000-0041.jpg' data-id='ivr828_6-0000-0041'/></li>",
"<li><img src='images/ivr828_6-0000-0042.jpg' data-id='ivr828_6-0000-0042'/></li>",
"<li><img src='images/ivr828_6-0000-0043.jpg' data-id='ivr828_6-0000-0043'/></li>",
"<li><img src='images/ivr828_6-0000-0044.jpg' data-id='ivr828_6-0000-0044'/></li>",
"<li><img src='images/ivr828_6-0000-0067.jpg' data-id='ivr828_6-0000-0067'/></li>",
"<li><img src='images/ivr828_6-0000-0069.jpg' data-id='ivr828_6-0000-0069'/></li>",
"<li><img src='images/ivr828_6-0000-0070.jpg' data-id='ivr828_6-0000-0070'/></li>",
"<li><img src='images/ivr828_6-0000-0071.jpg' data-id='ivr828_6-0000-0071'/></li>",
"<li><img src='images/ivr828_6-0000-0075.jpg' data-id='ivr828_6-0000-0075'/></li>",
"<li><img src='images/ivr828_6-0000-0080.jpg' data-id='ivr828_6-0000-0080'/></li>",
"<li><img src='images/ivr828_6-0000-0083.jpg' data-id='ivr828_6-0000-0083'/></li>"]

function getItems(limit) {
	var items = "";
	for (var i = 0; i < limit; i++) {
		items += images[i];
	};
	return $( items );
}

function getItem(index) {
	var item = "";
	item += images[index];
	return $( item );
}

var cbpBGSlideshow = (function() {

	var $slideshow = $( '#cbp-bislideshow' ),
		$controls = $( '#cbp-bicontrols' ),
		navigation = {
			$navPrev : $controls.find( 'span.cbp-biprev' ),
			$navNext : $controls.find( 'span.cbp-binext' ),
			$navPlayPause : $controls.find( 'span.cbp-bipause' )
		},
		// current item´s index
		current = 9,
		lastLimit = 20,
		// timeout
		slideshowtime,
		// true if the slideshow is active
		isSlideshowActive = true,
		// it takes 3.5 seconds to change the background image
		interval = 3500;

	function init( config ) {
		first = null;
		state = null;
		var pathname = window.location.pathname.split("/")[1];

		state = history.state;

		if (state) {
			first = state.id;
		} else if (pathname != "") {
			current = 0;
			pathItem = "<li><img src='images/"+pathname+".jpg' data-id='"+pathname+"'></li>";
			images = pathItem += images;
		}

		$items = getItems(lastLimit);

		$slideshow.append( $items );
		itemsCount = $items.length;

		// preload the images
		$slideshow.imagesLoaded()
			.always( function( instance ) {
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
			})
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
		var $itemToRemove = null;
		var $oldItem = $items.eq( current );
		
		if( direction === 'next' ) {
			current = current < itemsCount - 1 ? ++current : 0;
		}
		else if( direction === 'prev' ) {
			current = current > 0 ? --current : itemsCount - 1;
		}

		if (lastLimit + 1 < images.length) {
			$addItem = getItem(lastLimit+1);
			$items = $items.add($addItem);
			$slideshow.append($addItem);
			if ( Modernizr.backgroundsize ) {
				$addItem.each( function() {
					var $item = $( this );
					$item.css( 'background-image', 'url(' + $item.find( 'img' ).attr( 'src' ) + ')' );
				});
			}
			lastLimit += 1;
		}

		var slide_id = $items.eq(current).find('img').attr('data-id');
		var state = {
			id: slide_id, 
	    }
		var stateToPush = slide_id;
		history.pushState(state, "Image", stateToPush);

		itemsCount = $items.length;
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