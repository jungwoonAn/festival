//testmonials slideshow
      function slides(){
        $('.slides').animate({left:-1000}, function(){
          $('.slides li:first').appendTo('.slides');
          $('.slides').css({left:0});
        });
      }

      setInterval(slides, 3000);