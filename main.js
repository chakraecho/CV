//viewport function
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

//animations
const app = new Vue(
	{
		el:'#app',
		data:{
			caracteres: ['motivé', 'curieux', 'sérieux']
		}
	}
)