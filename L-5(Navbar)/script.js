$('#xmark').hide()

$('.navbar-toggler-icon').on("click",function(){
  $('#xmark').show()
  $('.navbar-toggler-icon').hide()
})


$('#xmark').on("click",function(){
 
  $('.navbar-toggler-icon').show()
  $('#xmark').hide() 

})