// подгрузка картинки
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

// карта
function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(51.5, -0.2),
		zoom: 10
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}

// слайдер
if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		// autoplay: true,
		// infinite: false,
		dots: true,
		arrows: false,
		accessibility: false,
		sliderToShow: 1,
		autoplaySpeed: 3000,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}