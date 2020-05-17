//viewport function
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

//animations

$('window').on("scroll", function () {
	if (isInViewport(document.querySelector('.progressbar_inline')){
		$('.progressbar_inline').addClass('animation_progress_90')

	}
})