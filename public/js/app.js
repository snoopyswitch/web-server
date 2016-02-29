//Problem: User when clicking on image goes toa dead end
//Solution: Create an overlay with large image - Lightbox

var $overlay = $('<div id="overlay"></div)');
var $image = $("<img>");
var $caption = $("<p></p>");



//2.1. An image to overlay
$overlay.append($image);


//2.2. A caption
$overlay.append($caption);



//2.Add overlay
$("body").append($overlay);






//1. Capture the click event on a link to an image
$("#gallery a").click(function (event) {

  event.preventDefault();

  var imageLocation = $(this).attr("href");

  //Update overlay with image linked in the link
  $image.attr("src", imageLocation);


  //Show the overlay
  $overlay.show();


  //Get childs alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
});



//When overlay is clicked
$overlay.click(function () {

  //Hide overlay
  $overlay.hide();

});
