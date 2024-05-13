
$(document).ready(function(){
    $('.accordion-content').hide();

    $('.accordion-header').click(function(){
        $(this).siblings('.accordion-content').slideDown();
    });

    $('.accordion-header').click(function(){
        $(this).find('.accordion-content').slideUp();
    });
});
