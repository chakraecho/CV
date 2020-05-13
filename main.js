//viewport function
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

//listener for navbar
let navbar = document.querySelector(".navbar")
let navbarMinified = document.querySelector(".navbar_minified")
