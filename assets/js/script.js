$(function(){
	var tabs = $('.userclienttabs h3');

	tabs.click(function(){
		$('.desktop_tabs .officeimg').toggle();
		$('.desktop_tabs .clientcabinet').toggle();
		$('.desktop_tabs .usercabinet').toggle();
		$('.desktop_tabs .userimg').toggle();
	});
});



var radius = 8;
TweenMax.staggerFromTo('.blob_q', 4 ,{
	cycle: {
		attr:function(i) {
			var r = i*90;
			return {
				transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
			}      
		}
	}  
},{
	cycle: {
		attr:function(i) {
			var r = i*90+360;
			return {
				transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
			}      
		}
	},
	ease:Linear.easeNone,
	repeat:-1
});


$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('.desc_card');
	$(inputs).click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = $(paras).eq(ind);
		
		$(t).add(matchedPara).addClass('active');
		$(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
	});
});




$(document).ready(function(){
	$(".navbar").on("click","a", function (event) {
		
			event.preventDefault();
			var id  = $(this).attr('href'),
					top = $(id).offset().top - 100;
			$('body,html').animate({scrollTop: top}, 300);
	});

	$('.nav-item').click(function(){
		$(".nav-item").removeClass('active');
		$(this).toggleClass('active');
	});
});

$(window).scroll(function(){
	if ($(window).scrollTop() >= 300) {
			$('header').addClass('fixed-header');
	}
	else {
			$('header').removeClass('fixed-header');
	}
});

function windowSize(e){
    if ($(window).width() <= '768'){
        $('.whatdoescrm .button_div').detach().appendTo('.whatdoescrm .mobile_btn');
    } else {
        $('.whatdoescrm .button_div').detach().appendTo('.whatdoescrm .desktop_btn');
    }
}
$(window).on('load resize',windowSize);



  