/************************************************
GENERAL
/************************************************/
$(document).ready(function(){

  //SMOOTH SCROLLING FOR HASH LINKS
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
        scrollTop: $(hash).offset().top - navHeight
      }, 800);
    } // End if

  });



  /************************************************
   NAVIGATION
  ************************************************/

  //PREVENT FIXED NAVBAR OVERLAPPING CONTENT AREA ON PAGE LOAD
  var navHeight = $('nav').outerHeight();
  $('header.hero-banner').css('margin-top', navHeight); //Add top margin to content area so nav bar doesn't overlap

  //Adjust content area offset whenever navbar changes height
  $( window ).resize(function() {
    if( $('nav').outerHeight() != navHeight ) {
      navHeight = $('nav').css('height');
      $('header.hero-banner').css('margin-top', navHeight);
    }
  });



  /************************************************
   FEATURED PRODUCTS
  ************************************************/

  //INITIALISE PRODUCT CAROUSEL
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false,
  });

  // ADD-TO-CART EVENT
  var shoppingCartCount = 0;

  $(".add-to-cart").on("click", function() {
    let shoppingCartBubble = $(".shopping-cart-count-bubble");

    /*Show cart counter if hidden*/
    if( shoppingCartBubble.is(':hidden') ) {
      shoppingCartBubble.show();
      shoppingCartBubble.css("display", "flex");
    }
    
    /*Increment cart counter*/
    shoppingCartBubble.text( String(++shoppingCartCount) );
  });



  /************************************************
   * NEWSLETTER SIGN UP
   ************************************************/

  //EMAIL SUBMIT EVENT
  $('#email-signup').on('submit', function(event) {
    event.preventDefault(event);
    let submittedEmail = $('#email').val();
    
    //Validate email format
    if( submittedEmail.length === 0 )
    {
      alert('Please enter an email address');
      return;
    }

    isEmail( submittedEmail ) ? 
      alert('Thank you for subscribing!') : 
      alert('Please check your email address and try again.');
      $('#email').val("");
  });

  //EMAIL SYNTAX VALIDATION
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

});