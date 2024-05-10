
$("#exampleModalFullscreen").hide();

$(document).ready(function(){
  $("nav > div > button, #exampleModalFullscreen > div > div > div> button").on("click", function () {
    $("#exampleModalFullscreen").toggle();
  });
})

// $("body > nav > div > button, #exampleModalFullscreen > div > div > div> button").on("click", function () {
//   $(".navbar").show(); 
// });

// $("body > nav > div > button, #exampleModalFullscreen > div > div > div> button").on("click", function () {
//   $("#exampleModalFullscreen ").hide(); 
// });

