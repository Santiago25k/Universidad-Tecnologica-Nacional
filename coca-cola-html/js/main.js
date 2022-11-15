$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

    if(!$('.disclaimer').is (':hidden')){
        $('.disclaimer').hide();
    }

    $(window).scroll(function(event) {
        //var scrollLeft = $(window).scrollLeft();
        var scrollTop = $(window).scrollTop();
        console.log("Vertical "+scrollTop);
        //console.log("Horizontal "+scrollLeft);
        if(scrollTop > 0){
            $('#flecha').show()
        } else {
            $('#flecha').hide()
        }
    });
});

$(".nav-link").click(function (e) { 
    e.preventDefault();
    if($("#navbarSupportedContent").hasClass("show")){
        $("#navbarSupportedContent").removeClass("show");
        window.location = $(this).attr('href');
    } else {
        window.location = $(this).attr('href');
    }
});