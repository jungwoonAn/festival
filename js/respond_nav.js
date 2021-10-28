      //respond nav
      $(function(){
        $("#nav_icon").click(function(){
          $("#hide_nav").slideToggle();
        });
      });

      $(window).resize(function(){
        if(window.innerWidth>=1100){
          $('#hide_nav').hide();
        }
      });

      var currentScrollTop=0;
      $(document).ready(function(){
      	scrollController();
      	$(window).scroll(function(){
      		scrollController();
      	});
      });

      function scrollController(){
      	currentScrollTop = $(window).scrollTop();
      	if(currentScrollTop > 300){
      		$("nav").addClass("fixed");
      	}
      	else {
      		$("nav").removeClass("fixed");
      	}
      }