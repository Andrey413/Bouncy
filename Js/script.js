//Слайдер
$(document).ready(function(){
	$('.services__slider__body').slick({
		arrows:false,
		dots:true,
		
		
	});
});
//Cлайдер вертикальный
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
	});
});
//Слайдер Portfolio
$(document).ready(function(){
	$('.portfolio__slider__body').slick({
		arrows:false,
		dots:true,
	});
});
//Слайдер Team
$(document).ready(function(){
	$('.team__slider__body').slick({
		arrows:false,
		dots:true,
		
	});
});
//Слайдер Testi
 $(document).ready(function(){
	$('.testi__slider__body').slick({
		arrows:false,
		dots:true,
		
	});
});
 //Слайдер News
 $(document).ready(function(){
	$('.news-slider__body').slick({
		arrows:false,
		dots:true,
		
	});
});



// Открытие окна POPUP 
$('.js-content-link').click(function() {
	$('.wrapper').css('filter','blur(10px)');
	$('.js-popup-wrap').fadeIn();
	$('.js-popup-wrap').addClass('disabled');
});
//Закрытие на крестик
$('.js-popup-close').click(function() {
	$('.js-popup-wrap').fadeOut();
	$('.wrapper').css('filter','none');
});
// Открытие окна POPUP 1
$('.js-content-link1').click(function() {
	$('.wrapper').css('filter','blur(10px)');
	$('.js-popup-wrap1').fadeIn();
	$('.js-popup-wrap1').addClass('disabled');
});
//Закрытие на крестик popup1
$('.js-popup-close').click(function() {
	$('.js-popup-wrap1').fadeOut();
	$('.wrapper').css('filter','none');
});
// Открытие окна POPUP 2
$('.js-content-link2').click(function() {
	$('.wrapper').css('filter','blur(10px)');
	$('.js-popup-wrap2').fadeIn();
	$('.js-popup-wrap2').addClass('disabled');
});
//Закрытие на крестик popup2
$('.js-popup-close').click(function() {
	$('.js-popup-wrap2').fadeOut();
	$('.wrapper').css('filter','none');
});
//ЗАкрытие по клику вне окна
$(document).mouseup(function (e) {
	var pop = $('.js-popup-content');
	if (e.target!=pop[0]&&popup.has(e.target).lenght === 0){
		$('.js-popup-wrap').fadeOut();
		$('.wrapper').css('filter','none');
	}
});
//MENU BURGER//
$(document).ready(function() {
/*задаем классу (header__burger) действие при клике*/
	$('.header__burger').click(function(event) {
/*==================================================*/
/*Само действие при клике (.header__burger,.header__menu)-выдается класс ACTIVE*/
		$('.header__burger,.nav').toggleClass('active')
		/*===========================================================================*/
		/*при выдаче класса (Body) блокируется-что не позволяет скролить страницу
		когда открыто меню бургер*/
		$('body').toggleClass('lock');
		/*===========================================================================*/
	});



});
//прокрутка страницы по меню//
$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this)
		var blockid = $this.data('scroll');
		var blockOffset = $(blockid).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset

		},500);
	});
