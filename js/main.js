$(function() {

	let liked = false,
			numberOfComs = 1;

	function like () {
		if (!liked) {
			$('.like-icon').css('background-position', '16px');
			$('.like-stats').text('25 Likes');
			$('.amount-liked').text('+25')
			liked = true;
		} else {
			$('.like-icon').css('background-position', '0');
			$('.like-stats').text('24 Likes');
			$('.amount-liked').text('+24')
			liked = false;
		}
	}

	function showHideComments () {
		$('.publish-comm').removeClass('show-publish-comm');
		setTimeout(() => {
			$('.add-comment').removeClass('hide-add-comment');
		}, 200);

		$('.user-comments').removeClass('comments-hide');
	}

	$('.like-icon').click(() => { like() });

	$('.share-icon').click(() => { $('.share-links').toggleClass('show-links'); });

	$('.close-share').click(() => { $('.share-links').removeClass('show-links'); });

	$('.more-info, .comments').click(() => {
		$('.photo-info-detailed').addClass('show-more');
		$('.more-info-base').css('position', 'absolute');
		$('.back-arrow').addClass('more-info-arrow');
		$('.show-location').addClass('more-info-location');
		if ( $('.share-links').hasClass('show-links') ) {
			$('.share-links').removeClass('show-links')
		}
	});

	$('.back-arrow').click(function() {
		$('.photo-info-detailed').removeClass('show-more');
		setTimeout(() => {
			$(this).removeClass('more-info-arrow');
		}, 200);
		$('.show-location').removeClass('more-info-location');
		showHideComments();
	});

	$('.add-comment').click(function() {
		$(this).addClass('hide-add-comment');
		setTimeout(() => {
			$('.publish-comm').addClass('show-publish-comm');
		}, 200);
		$('.user-comments').addClass('comments-hide');
	});

	$('.publish-comm').click(function() {
		let usersComment = $('.actual-comment').val();
		$('.actual-comment').val('');

		if (usersComment.length > 0) {
			numberOfComs++;
			$('.com').css('overflow', 'auto').prepend(`<div class="com-holder" style="margin-bottom: .8em; min-height: 60px"> <img class="face-lg" src="images/face-you.svg" alt="Commenter Profile Picture"><div class="comment-container">	<div class="commenter-name">you <span class="time">just now</span></div> <div class="users-comment"> <p>${usersComment}</p>	</div></div></div>`)
			$('.main-comms-head h4').text(`comments (${numberOfComs})`);
			$('.comments .stats-text').text(`${numberOfComs} Comments`);
			showHideComments();
		}

	});

	$('.close-comments').click(() => { showHideComments(); })

	$('.show-location').click(() => {
		$('.map').addClass('show-map');
		setTimeout(() => {
			$('.map-back').fadeIn();
		}, 200);
	});

	$('.map-back').click(() =>{
		$('.map').removeClass('show-map');
		$('.map-back').fadeOut('show-map-back');
	});

});
