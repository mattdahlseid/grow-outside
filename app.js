// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// set current year for copyright
let year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();


 // Add smooth scrolling to anchors (used from w3schools https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll)
 $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


// add active class to li when scrolling within corresponding section
// code modified from this stackoverflow answer https://stackoverflow.com/a/43349026
  $(document).ready(function(){
    $(".nav-item").click(function () {
        $("a.active").removeClass('active');
        $(this).addClass('active');
        var active_section = $(this).attr('href'); //get active section id
        $('html, body').animate({
        //and scroll to the section
        scrollTop: $(active_section).offset().top
        }, 1000);  
    }   
  );
  
  
   $(document).scroll(function () {
   //get document scroll position
     var position = $(document).scrollTop(); 
     //get header height
     var nav = $('nav').outerHeight();

     var header = $('header').outerHeight();
     
     //check active section
     $('.section').each(function(i) {
        if($(this).position().top <= (position + nav)) {
            $("a.active").removeClass('active');
            $("a").eq(i + 1).addClass('active');   
        }
        // remove active class when within header area
        if(position <= (header - nav)) {
            $("a.active").removeClass('active');
        }
      });
   });
 });

// triggers button animation on box hover
$('.support__box').each(function(i) {
    $(this).mouseover(function() {
      $(this).find('.support__box--learn-more').addClass('special');
    })
    $(this).mouseleave(function() {
      $(this).find('.support__box--learn-more').removeClass('special');
    })
});

// responsive nav shown/hidden on button icon click
$('.fa-bars').on('click', function() {
  $('.nav__menu').toggleClass('margin');
});

$('a').on('click', function() {
  $('.nav__menu').removeClass('margin');
})