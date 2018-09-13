/************* Banner Slider **************/
$(document).ready(function() 
{
  	$("#banner-slider").owlCarousel(
  	{
  		items : 1,
  		nav: true,
      loop: true,
      	// smartSpeed : 2000,      
      	autoplay: true,
      	autoplaySpeed: 3000,
        autoplayHoverPause: true
	  });
	  
  	// $(".product-slider").owlCarousel(
  	// {
  	// 	items : 6,
    //   	loop: true,
    //   	autoplay: true,
    //   	autoplaySpeed: 3000,
    //     autoplayHoverPause: false,
    //     responsive:
    //     {
	//         0:{
	//             items:1,
    //           dots: false,
	//         },
	//         600:{
	//             items:3,
	//         },
	//         1000:{
	//             items:5,
	//         },
	//         1400:{
	//             items:6,
	//             loop:true
	//         }
	//     }
	//   });
	  
	//   $(".has-mega-menu").on("mouseover", function () 
	//   {
	// 	  $(".submenu").fadeIn("200");
	//   });
  
	//   $(".thumbnail").on("click", function () 
	//   {
	// 	  $(".brand-submenu").fadeToggle("slow");
	// 	//   alert('aler');
	//   });
	//   $(".brand-submenu a, .thumbnail-two").on("click", function () 
	//   {
	// 	  $(".submenu").fadeOut("200");
	//   });
});



