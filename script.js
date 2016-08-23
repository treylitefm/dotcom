$(document).ready(function() {
    $('.row').hover(function() {
        $(this).children('.bottom').addClass('hover');
        $(this).children('.top').addClass('hover');
    }, function() {
        $(this).children('.bottom').removeClass('hover');
        $(this).children('.top').removeClass('hover');
    });
});
