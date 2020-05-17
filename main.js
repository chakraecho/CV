//viewport function
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

//animations
//profil animations
window.addEventListener('scroll', function () {
	if (isInViewport(document.querySelector('.profil_container'))) {
		for (let i=1; i <= 6; i++) {
			$('.profil_block_' + i).addClass('animation_showUp_' + i)
        }

	}
})

//skills animations
window.addEventListener('scroll',function() {
	if (isInViewport(document.querySelector('.progressbar_inline'))) {
		$('.progressbar_90').addClass('animation_progress_90')
		$('.progressbar_95').addClass('animation_progress_95')
		$('.progressbar_85').addClass('animation_progress_85')
		$('.progressbar_70').addClass('animation_progress_70')
		$('.progressbar_20').addClass('animation_progress_20')
		$('.progressbar_25').addClass('animation_progress_25')
	}
	if (isInViewport(document.querySelector('.level'))) {
		for (let i = 1; i <= 5; i++) {
			setTimeout(function () { $('.level_master_' + i).addClass('level_on') }, 400*i)
		}
		setTimeout(function () { $('.level_beginner_1').addClass('level_on') },400)
    }
	if (isInViewport(document.querySelector('.progressbar_frameworks_55'))) {
		$('.progressbar_frameworks_55').addClass('animation_progress_55')
		$('.progressbar_frameworks_90').addClass('animation_progress_90')
	}
	if (isInViewport(document.querySelector('.diploma_animation_1'))) {
		$('.diploma_animation_1').addClass('diploma_slide_left')
	}
	if (isInViewport(document.querySelector('.diploma_animation_2'))) {
		$('.diploma_animation_2').addClass('diploma_slide_right')
	}
	if (isInViewport(document.querySelector('.diploma_animation_3'))) {
		$('.diploma_animation_3').addClass('diploma_slide_left')
	}
})

