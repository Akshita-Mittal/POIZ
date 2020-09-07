$(".single-item").slick({
	dots: false,
	slidesToShow: 1,
	centerMode: true,
	centerPadding: '60px',
});


$("#quality-slider").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		},
	},
});


//plugin bootstrap minus and plus

$(".btn-number").click(function (e) {
	e.preventDefault();
	fieldName = $(this).attr("data-field");
	type = $(this).attr("data-type");
	var input = $("input[name='" + fieldName + "']");
	var currentVal = parseInt(input.val());
	if (!isNaN(currentVal)) {
		if (type == "minus") {
			if (currentVal > input.attr("min")) {
				input.val(currentVal - 1).change();
			}
			if (parseInt(input.val()) == input.attr("min")) {
				$(this).attr("disabled", true);
			}
		} else if (type == "plus") {
			if (currentVal < input.attr("max")) {
				input.val(currentVal + 1).change();
			}
			if (parseInt(input.val()) == input.attr("max")) {
				$(this).attr("disabled", true);
			}
		}
	} else {
		input.val(0);
	}
});
$(".input-number").focusin(function () {
	$(this).data("oldValue", $(this).val());
});
$(".input-number").change(function () {
	minValue = parseInt($(this).attr("min"));
	maxValue = parseInt($(this).attr("max"));
	valueCurrent = parseInt($(this).val());
	name = $(this).attr("name");
	if (valueCurrent >= minValue) {
		$(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr(
			"disabled"
		);
	} else {
		alert("Sorry, the minimum value was reached");
		$(this).val($(this).data("oldValue"));
	}
	if (valueCurrent <= maxValue) {
		$(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr(
			"disabled"
		);
	} else {
		alert("Sorry, the maximum value was reached");
		$(this).val($(this).data("oldValue"));
	}
});
$(".input-number").keydown(function (e) {
	// Allow: backspace, delete, tab, escape, enter and .
	if (
		$.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
		// Allow: Ctrl+A
		(e.keyCode == 65 && e.ctrlKey === true) ||
		// Allow: home, end, left, right
		(e.keyCode >= 35 && e.keyCode <= 39)
	) {
		// let it happen, don't do anything
		return;
	}
	// Ensure that it is a number and stop the keypress
	if (
		(e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
		(e.keyCode < 96 || e.keyCode > 105)
	) {
		e.preventDefault();
	}
});

$('#check_out_slider').slick({

	dots: false,
	slidesToShow: 2,
	responsive: [{
			breakpoint: 992,
			settings: {
				arrows: false,
				dots: true,


				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				dots: true,

				slidesToShow: 1
			}
		}
	]
});


$(window).scroll(function () {
	var scroll = $(window).scrollTop();


	if (scroll >= 1500) {
		$("#main__pd_wrap").removeClass("fixed__position");
	} else {
		$("#main__pd_wrap").addClass("fixed__position");
	}
});


$(window).scroll(function () {
	var scroll = $(window).scrollTop();


	if (scroll >= 1500) {
		$("#main__pd_wrap").removeClass("fixed__position");
	} else {
		$("#main__pd_wrap").addClass("fixed__position");
	}
});


if (screen.width < 1299) {
	console.log("test");
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();


		if (scroll >= 1200) {
			$("#main__pd_wrap").removeClass("fixed__position");
		} else {
			$("#main__pd_wrap").addClass("fixed__position");
		}
	});
} else {


}


$('.left_btns_bx a').click(function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$('.left_btns_bx a.active').removeClass('active');
		$(this).addClass('active');
	}
});


// js for product banner mobile screen

jQuery(document).ready(function ($) {
	$('.pd_mobile_slider').slick({
		dots: true,
		margin: 0,
		slidesToShow: 1,
	});
});


$(document).ready(function () {
	$('#show-hidden-menu').click(function () {
		$('.hidden-menu').slideToggle("slow");
		// Alternative animation for example
		// slideToggle("fast");
	});
});
$(document).ready(function () {
	$('button.save_change_pwd').click(function () {
		$('.hidden-menu').slideToggle("hide");
		// Alternative animation for example
		// slideToggle("fast");
	});
});

$(".edit__btn").click(function () {
	$(".profile__fields___box  input").prop('disabled', false);
	$(".profile__fields___box  select").prop('disabled', false);
	$("#ch__pwd_btn").prop('disabled', false);


	$(".address-wrap.profile__fields___box").addClass('editable__form');


});

$(".save__Edit_profile").click(function () {
	$(".profile__fields___box  input").prop('disabled', true);
	$(".profile__fields___box  select").prop('disabled', true);
	$("#ch__pwd_btn").prop('disabled', true);
	$(".address-wrap.profile__fields___box").removeClass('editable__form');


});


$(".side__cart_open").click(function () {

	$("body").addClass("hide__scroll");
	$(".overlay__slide_cart").addClass("show");
	$("#side___card__main").addClass("open__slide_card");


});

$(".overlay__slide_cart.show").click(function () {

	$("#side___card__main").removeClass("open__slide_card");
	$(".overlay__slide_cart").removeClass("show");

});

$(".close__slide_cart").click(function () {

	$("body").removeClass("hide__scroll");

	$("#side___card__main").removeClass("open__slide_card");
	$(".overlay__slide_cart").removeClass("show");
});


$(".show__discount__field").click(function () {
	$(".discount__field").show();
	$(".duscount__box h3").hide();

});


$("button.apply__btn").click(function () {
	$(".discount__field").hide();
	$(".duscount__box h3").show();
});


// $('.cbd__Section .slider-main').slick({
//   slidesToShow: 1,
//   arrows: false,
//   dots: true,
//   asNavFor: '.slider-nav',
//   vertical: true,
//   autoplay: false,
//   verticalSwiping: true,
//   centerMode: false
// });

// $('.cbd__Section .slider-nav').slick({
//   slidesToShow: 4,
//   asNavFor: '.slider-main',
//   vertical: true,
//   focusOnSelect: true,
//   autoplay: false,
//   centerMode: false,
//   dots: true,
// });

// $(window).on('resize orientationchange', function() {
//   if ($(window).width() > 1200) {
//     $('.cbd__Section .slider-nav').slick('unslick');
//     $('cbd__Section .slider-nav').slick({
//       slidesToShow: 4,
//       asNavFor: '.slider-main',
//       vertical: true,
//       focusOnSelect: true,
//       autoplay: false,
//       centerMode: false
//     });
//   }
// });


$(".page-id-28 .site-header").removeClass('sticky-header')
$(".page-id-56 .site-header").removeClass('sticky-header')


jQuery(document).ready(function ($) {
	$('.blume__slider__container').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,

	});
});