$(document).ready(function(){
    $(".menu-button").click(function(){
        if($(this).next().is(':visible')) {
            $(this).next().slideUp();
            $(this).css("transform", "rotate(0deg)")
        }
        else {
             $(this).next().slideDown();
            $(this).css("transform", "rotate(180deg)")
        }
        });
});