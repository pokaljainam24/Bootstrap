
$(document).ready(function(){
    $('.accordion-content').hide();

    $('.accordion-header').click(function(){
        $(this).siblings('.accordion-content').slideDown();
        $(this).find('.accordion-content').slideDown();
    });

    $('.accordion-header').click(function(){
        $(this).siblings('.accordion-content').slideDown();
        $(this).find('.accordion-content').slideUp();
    });
});
