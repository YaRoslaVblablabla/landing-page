//бургер менюха

	let t = $('.header').clone()
	function func(){
		t.addClass('dis')
		$('.header').append(t)
		$(this).unbind('click', func);
	}


	$('.header__burger').click(function(ev){
			if (!t.hasClass('active')) {
				func()
				t.css("display","block")
				t.find('.logo, .header__burger, .number').css("display","none")
				t.find('.menu').css("display","flex")
				t.find('.place, .header__place-number').css("display","block")
				if ($(window).width() <= '460'){
					t.find('.number').css("display","block")
				}

				t.toggleClass('active')
			}

			else{
				t.toggleClass('active')
				t.css("display","none")
			}
		
	})

	t.find('.menu .menu__link').click(function(){
		$('.menu__list').toggleClass('.active2')
	})

//скрол
$(window).scroll(function(){
	if ($(this).scrollTop()>200)
		$('a.scroll').fadeIn();
	else
		$('a.scroll').fadeOut(400);
})

$('a.scroll').click(function(){
	$('body, html').animate({
		scrollTop: 0
	}, 800);
	return false;
})

// по кнопке
$('.js-button-campaign').click(function() { 
	$('.js-overlay-campaign').fadeIn()
	$('.js-overlay-campaign').addClass('disabled')
	$('.scroll').fadeOut()
	$('body').addClass('scroll-hidden')
});

$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut()
	$('.scroll').fadeIn()
	$('body').removeClass('scroll-hidden')	
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign')
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut()
		$('.scroll').fadeIn()
		$('body').removeClass('scroll-hidden')	
	}
});

//слайдер

	t.find('.menu__title').click(function(){
		$('.menu__block-text').not($(this).next()).slideUp(400)
		$(this).toggleClass('act-arrow').next().slideToggle(400)
		$('.menu__title').not($(this)).removeClass('act-arrow')
	})

/*
	t.find('.menu__title').click(function(){
		$('.menu__block-text ul').slideToggle(400);
		$(this).toggleClass('qwen')
	})

$('.block-title').click(function(event){
		if ($('.block').hasClass('one') ) {
			$('.block-title').not($(this)).removeClass('active')
			$('.block-text').not($(this).next()).slideUp(400)
		}
		$(this).toggleClass('active').next().slideToggle(400);
	})
*/