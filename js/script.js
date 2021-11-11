const swiper1 = new Swiper('.swiper1', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
	mousewheel: {
		releaseOnEdges: true,
	},

	pagination: {
		el: '.swiper-pagination1',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},

});

$('.burger').on('click', function (){
	// $('.menu').removeClass('hide')
	$('.menu').addClass('show')

})
$('.close').on('click', function (){
	$('.menu').removeClass('show')
	// $('.menu').addClass('hide')
})
$('.menu__link').on('click', function (){
	$('.menu').removeClass('show')
})


const swiper2 = new Swiper('.swiper2', {

	slidesPerView: 3,
	spaceBetween: 53,
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination2',
		type: 'fraction',
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},


});
function addZero(num){
	return (num > 9) ? num : '0' + num;
}
const swiper3 = new Swiper('.swiper3', {

	slidesPerView: 4,
	spaceBetween: 31,
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination3',
		type: 'fraction',
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},

});

$('.checkbox__label').each(function () {
	$(this).click(function (){
		$(this).toggleClass('checked');
	})
})

const swiper4 = new Swiper('.swiper4', {

	slidesPerView: 3.5,
	spaceBetween: 52,
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination4',
		type: 'fraction',
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev34',
	},

});

$('.vr-app-link').click(function (){
	$('.vr-app').show()
})

$('.back').click(function (){
	$('.vr-app').hide()
})

$('.vr-business-link').click(function (){
	$('.vr-business').show()
})

$('.back').click(function (){
	$('.vr-business').hide()
})