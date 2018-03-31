$( document ).ready(function() {

    $('.leftmenutrigger').on('click', function(e) {
    
    	$('.side-nav').toggleClass("open");

    	/*$('html, body').animate({
	        scrollTop: $("#wrapper").offset().top
	    }, { duration: "fast", queue: false });
    	
	    */
	    e.preventDefault();
	});

    $('.carousel').carousel({interval: 5000 });

    $(".lets-connect").on("click", "label", function(e){
    	$(this).parents(".form-group").find("input, textarea").focus();
    	e.preventDefault();
    })

    $(document).on("scroll",function(){
    	if ($(".side-nav.open").length > 0) {
    		$(".leftmenutrigger").click();
    	}
    })

    $(document).on("click", ".btn-search", function (e) {
    	if($(".search-box").hasClass("hidden")){
    		$(".search-box").removeClass("hidden")
    		$(this).find(".fa").addClass("fa-close").removeClass("fa-search");
	    }else {
	    	$(".search-box").addClass("hidden")
	    	$(this).find(".fa").removeClass("fa-close").addClass("fa-search");
	    }
    })

    $('#sub-menu').on('show.bs.collapse', function (e) {
		$(".has-sub-menu").addClass("active")
		$('.has-sub-menu').find(".nav-caret").removeClass("fa-angle-down").addClass("fa-angle-up");
	})

    $('#sub-menu').on('hide.bs.collapse', function (e) {
		$(".has-sub-menu").removeClass("active")
		$('.has-sub-menu').find(".nav-caret").removeClass("fa-angle-up").addClass("fa-angle-down");
	})

    $('#search-dropdown').parents(".col-md-4").on('show.bs.dropdown', function (e) {
    	$("#search-dropdown .fa").addClass("fa-angle-up").removeClass("fa-angle-down");
    	$(".services-banner").css({"background-image" :" url('../images/service-banner-green.png')"})
	})

	$('#search-dropdown').parents(".col-md-4").on('hide.bs.dropdown', function (e) {
    	$("#search-dropdown .fa").addClass("fa-angle-down").removeClass("fa-angle-up");
	})

	$('#social-dropdown').parents(".col-md-4").on('show.bs.dropdown', function (e) {
		$("#social-dropdown .fa").addClass("fa-angle-up").removeClass("fa-angle-down");
		$(".services-banner").css({"background-image" :" url('../images/service-banner-blue.png')"})
	})

	$('#social-dropdown').parents(".col-md-4").on('hide.bs.dropdown', function (e) {
		$("#social-dropdown .fa").addClass("fa-angle-down").removeClass("fa-angle-up");
	})

	$('#visual-dropdown').parents(".col-md-4").on('show.bs.dropdown', function (e) {
		$("#visual-dropdown .fa").addClass("fa-angle-up").removeClass("fa-angle-down");
		$(".services-banner").css({"background-image" :" url('../images/service-banner-red.png')"})
	})

	$('#visual-dropdown').parents(".col-md-4").on('hide.bs.dropdown', function (e) {
		$("#visual-dropdown .fa").addClass("fa-angle-down").removeClass("fa-angle-up");
	})
});