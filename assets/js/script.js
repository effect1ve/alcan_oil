/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Arckhill = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.scrollTop();
				this.ProjectFilterSlider();
				this.CounterUp();
				this.BeforeAfterImg();
				this.CarouselSliderJS();
				this.ProjectGrid();
				this.ProjectGridFilter();
				this.SkillProgress();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				})
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.archx-header-section').addClass('sticky_on')
					} else {
						jQuery('.archx-header-section').removeClass('sticky_on')
					}
				});
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.arck-header-section').addClass('sticky-on')
					} else {
						jQuery('.arck-header-section').removeClass('sticky-on')
					}
				});
				jQuery(document).ready(function (o) {
					0 < o(".navSidebar-button").length &&
					o(".navSidebar-button").on("click", function (e) {
						e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
					}),
					0 < o(".close-side-widget").length &&
					o(".close-side-widget").on("click", function (e) {
						e.preventDefault(), o(".info-group").removeClass("isActive");
					}),
					o("body").on("click", function (e) {
						o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
					}),
					o(".xs-sidebar-widget").on("click", function (e) {
						e.stopPropagation();
					})
				});
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			ProjectFilterSlider: function (){
				$(".arck-project-slider").slick({
					slidesToShow: 4,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
					responsive: [
					{
						breakpoint: 1500,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 700,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
					]
				});
				$(".filter li").on('click', function(){
					var filter = $(this).data('filter');
					$(".arck-project-slider").slick('slickUnfilter');

					if(filter == 'one'){
						$(".arck-project-slider").slick('slickFilter','.one');
					}
					else if(filter == 'two'){
						$(".arck-project-slider").slick('slickFilter','.two');
					}
					else if(filter == 'three'){
						$(".arck-project-slider").slick('slickFilter','.three');
					}
					else if(filter == 'four'){
						$(".arck-project-slider").slick('slickFilter','.four');
					}
					else if(filter == 'five'){
						$(".arck-project-slider").slick('slickFilter','.five');
					}
					else if(filter == 'six'){
						$(".arck-project-slider").slick('slickFilter','.six');
					}
					else if(filter == 'all'){

						$(".arck-project-slider").slick('slickUnfilter');
					}
				});
				$('.arck-project-filter-btn ul li').on('click', function() {

					$('.arck-project-filter-btn ul li.active').removeClass('active');
					$(this).addClass('active');
				});
			},
			CounterUp: function(){
				$('.counter').counterUp({
					delay: 10,
					time: 1000
				});
			},
			BeforeAfterImg: function (){
				if ($("#beforeafter").length) {
					$(window).load(function() {
						$("#beforeafter").twentytwenty();
					});
				}
				if ($(".beforeafter-wrap").length) {
					$(window).load(function() {
						$(".beforeafter-wrap").twentytwenty();
					});
				}
				$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
					$(".beforeafter-wrap[data-orientation!='vertical']").trigger('resize')
				});
			},
			CarouselSliderJS: function (){
				$('#arck-slider-main_1').slick({
					arrow: false,
					dots: true,
					infinite: false,
					fade:true,
					autoplay: true,
					autoplaySpeed: 5000,
					slidesToShow: 1,
					slidesToScroll: 1,
				});
				$('#arck-slider-main_2').slick({
					arrow: true,
					dots: true,
					infinite: false,
					autoplay: true,
					autoplaySpeed: 4000,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: ".main_left_arrow",
					nextArrow: ".main_right_arrow",
				});

				$('.arck-testimonial-slider').slick({
					arrow: false,
					dots: true,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				});
				$('.arck-project-details-slider').slick({
					arrow: true,
					dots: false,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				});
				$('.arck-testimonial-slider-2').slick({
					arrow: false,
					dots: true,
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.arck-team-slider, .shop-more-slider').slick({
					arrow: false,
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2,
							infinite: true,
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.arck-sponsor-slider').slick({
					arrow: false,
					dots: false,
					infinite: true,
					slidesToShow: 5,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.archx-about-sponsor-wrapper').slick({
					arrow: false,
					dots: false,
					infinite: true,
					slidesToShow: 4,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.arck-service-details-slider').slick({
					arrow: true,
					dots: false,
					infinite: true,
					slidesToShow: 2,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.archx-project-slider').slick({
					arrow: true,
					dots: false,
					infinite: true,
					slidesToShow: 5,
					autoplay: false,
					slidesToScroll: 1,
					prevArrow: ".ar-pro_left_arrow",
					nextArrow: ".ar-pro_right_arrow",
					responsive: [
					{
						breakpoint: 1300,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
						}
					},

					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.archx-work-process-system-slider').slick({
					arrow: false,
					dots: false,
					infinite: true,
					slidesToShow: 3,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.archx-produce-slider').slick({
					arrow: false,
					dots: false,
					infinite: true,
					slidesToShow: 5,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.archx-team-slider-area').slick({
					arrow: false,
					dots: false,
					infinite: false,
					slidesToShow: 4,
					autoplay: false,
					slidesToScroll: 1,
					prevArrow: ".ar-team_left_arrow",
					nextArrow: ".ar-team_right_arrow",
					responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 700,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.archx-testimonial-slider-2').slick({
					arrow: true,
					dots: false,
					infinite: false,
					slidesToShow: 1,
					autoplay: false,
					dots: true,
					customPaging : function(slider, i) {
						var thumb = $(slider.$slides[i]).data();
						return '<a class="dot">'+i+'</a>';
					},
					slidesToScroll: 1,
					prevArrow: ".ar-tst_2_left_arrow",
					nextArrow: ".ar-tst_2_right_arrow",
				});
			},
			ProjectGrid: function (){
				var $grid = $('.grid').imagesLoaded( function() {
					$grid.masonry({
						percentPosition: true,
						itemSelector: '.grid-item',
						columnWidth: '.grid-sizer'
					}); 
				});
				var ltn__active_item = $('.arck-service-item')
				ltn__active_item.mouseover(function() {
					ltn__active_item.removeClass('active');
					$(this).addClass('active');
				});
			},
			ProjectGridFilter:  function (){
				var $grid = $('.grid').imagesLoaded( function() {
					$grid.masonry({
						percentPosition: true,
						itemSelector: '.grid-item',
						columnWidth: '.grid-sizer'
					}); 
				});
				var $grid = $(".grid").isotope({
					itemSelector: ".grid-item",
					layoutMode: "fitRows"
				});
				var filterFns = {
					numberGreaterThan50: function() {
						var number = $(this)
						.find(".number")
						.text();
						return parseInt(number, 10) > 50;
					},
					ium: function() {
						var name = $(this)
						.find(".name")
						.text();
						return name.match(/ium$/);
					}
				};
				$(".button-group").on("click", "button", function() {
					var filterValue = $(this).attr("data-filter");
					filterValue = filterFns[filterValue] || filterValue;
					$grid.isotope({ filter: filterValue });
				});

				$(".button-group").each(function(i, buttonGroup) {
					var $buttonGroup = $(buttonGroup);
					$buttonGroup.on("click", "button", function() {
						$buttonGroup.find(".is-checked").removeClass("is-checked");
						$(this).addClass("is-checked");
					});
				});
			},
			SkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
				if($('.quantity-input-2').length) {
					$('.quantity-input-2').inputarrow({
						renderNext: function(input) {
							return $('<span class="custom-next">+</span>').insertAfter(input);
						},
						renderPrev: function(input) {
							return $('<span class="custom-prev">-</span>').insertBefore(input);
						},
						disabledClassName: 'custom-disabled'
					});
				};
			},
		}
	}
	jQuery(document).ready(function (){
		Arckhill.init();
	});

})();


// отправка формы

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение отправки формы
        
        var name = form.elements['name'].value.trim();
        var phone = form.elements['phone'].value.trim();
        var email = form.elements['email'].value.trim();
        var subject = form.elements['subject'].value.trim();
        var message = form.elements['message'].value.trim();
        
        // Проверка заполнения обязательных полей
        if (name === '' || phone === '' || email === '' || subject === '' || message === '') {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        var formData = new FormData(form); // Получаем данные формы
        
        // Отправка данных на сервер
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit_form.php'); // Укажите путь к вашему PHP-скрипту, который будет обрабатывать отправку формы
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert(xhr.responseText); // Выводим сообщение об успешной отправке
                form.reset(); // Очищаем форму
            } else {
                console.error(xhr.responseText); // Выводим сообщение об ошибке в консоль
            }
        };
        xhr.onerror = function() {
            console.error('Произошла ошибка при отправке запроса');
        };
        xhr.send(formData);
    });
});


// каталог

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".filter-button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var list = button.nextElementSibling;
            var arrow = button.querySelector('.arrow'); // Находим стрелку
            var otherLists = document.querySelectorAll(".catalog-filter-list.show");
            otherLists.forEach(function(otherList) {
                if (otherList !== list) {
                    otherList.classList.remove("show");
                    // Удалить класс поворота для других стрелок
                    var otherArrow = otherList.previousElementSibling.querySelector('.arrow');
                    otherArrow.classList.remove('rotate');
                }
            });
            list.classList.toggle("show");
            // Переключить класс поворота для текущей стрелки
            arrow.classList.toggle('rotate');
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const productItems = document.querySelectorAll(".col-lg-4");

    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const filterValue = button.getAttribute("data-filter");

            productItems.forEach(function(item) {
                if (filterValue === "*" || item.getAttribute("data-category") === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом .arck-shop-product-item
    const productItems = document.querySelectorAll('.arck-shop-product-item');

    // Добавляем обработчики событий для каждого элемента
    productItems.forEach(function(item) {
        const productImage = item.querySelector('img'); // Получаем изображение текущего элемента

        // Добавляем обработчик события для увеличения изображения при клике
        productImage.addEventListener('click', function() {
            const imageUrl = this.src; // Получаем URL изображения
            const overlay = document.querySelector('.overlay');
            const enlargedImage = overlay.querySelector('img');
            enlargedImage.src = imageUrl; // Устанавливаем URL изображения в оверлей
            overlay.classList.add('active'); // Показываем оверлей
        });
    });

    // Добавляем обработчик события для закрытия увеличенного изображения при клике на оверлей
    document.querySelector('.overlay').addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.remove('active'); // Скрываем оверлей при клике на пустое пространство
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var thumbnailImages = document.querySelector('.thumbnail-images');
    var mainImageSlider = document.querySelector('.main-image');
    var mainImage = mainImageSlider.querySelector('img');
    var thumbnails = thumbnailImages.querySelectorAll('.thumbnail');

    // Присваиваем класс selected миниатюре №1
    thumbnails[0].classList.add('selected');

    // Инициализация главного слайдера
    var mainSlider = new Slider(mainImageSlider, {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: thumbnailImages // Связь с миниатюрами
    });

    // Инициализация слайдера миниатюр
    var thumbnailSlider = new Slider(thumbnailImages, {
        slidesToShow: thumbnails.length, // Показываем все миниатюры
        slidesToScroll: 1,
        asNavFor: mainImageSlider, // Связь с основным изображением
        dots: false,
        centerMode: true, // Центрируем миниатюры
        focusOnSelect: true,
        fixedWidth: false, // Оставляем миниатюры на месте
        slideBy: 'page' // Перелистывание по странице
    });

    // Обработчик клика на миниатюру
    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            var thumbnailImage = thumbnail.querySelector('img');
            var imagePath = thumbnailImage.getAttribute('src');
            mainImage.setAttribute('src', imagePath);

            // Удаляем класс selected у всех миниатюр
            thumbnails.forEach(function(thumb) {
                thumb.classList.remove('selected');
            });

            // Добавляем класс selected к выбранной миниатюре
            thumbnail.classList.add('selected');
        });
    });
});

// Конструктор слайдера
function Slider(element, options) {
    var self = this;
    self.element = element;
    self.options = options;
    self.slider = null;
    self.init = function() {
        self.slider = new Siema({
            selector: element,
            duration: 200,
            easing: 'ease-out',
            perPage: options.slidesToShow,
            startIndex: 0,
            draggable: true,
            multipleDrag: false,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: function() {},
            onChange: function() {},
        });
    };
    self.init();
}






document.addEventListener("DOMContentLoaded", function() {
    var mainImage = document.getElementById('mainImage');
    var overlaySingle = document.querySelector('.single-overlay');
    var expandedImageContainer = document.getElementById('expandedImageContainer');
    var expandedImage = document.getElementById('expandedImage');
    var closeButton = document.querySelector('.expanded-image-container .close');

    mainImage.addEventListener('click', function() {
        document.body.classList.add('overlay-open'); // Добавляем класс для остановки скролла
        overlaySingle.style.display = 'block';
        expandedImage.src = this.src;
        expandedImageContainer.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        closeExpandedImage();
    });

    overlaySingle.addEventListener('click', function(event) {
        if (event.target === overlaySingle) {
            closeExpandedImage();
        }
    });

    // Добавляем обработчик события для закрытия оверлея при клике на любое место на экране
    document.addEventListener('click', function(event) {
        if (!expandedImageContainer.contains(event.target) && !mainImage.contains(event.target)) {
            closeExpandedImage();
        }
    });

	// function removeOverlayClass() {
	// 	document.body.classList.remove('overlay-open');
	// 	overlaySingle.style.display = 'none';
    //     expandedImageContainer.style.display = 'none';
	// }
	
	// document.addEventListener('click', removeOverlayClass);
	

    function closeExpandedImage() {
        document.body.classList.remove('overlay-open'); // Удаляем класс для возобновления скролла
        overlaySingle.style.display = 'none';
        expandedImageContainer.style.display = 'none';
    }
});










