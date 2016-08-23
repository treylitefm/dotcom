$(document).ready(function() {
    $('.row').hover(function() {
        $(this).children('.inner').addClass('hover');
        $(this).children('.content').addClass('hover');
    }, function() {
        $(this).children('.inner').removeClass('hover');
        $(this).children('.content').removeClass('hover');
    });
});
