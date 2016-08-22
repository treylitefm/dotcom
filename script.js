$(document).ready(function() {
    $('.row').hover(function() {
        console.log('omarrr');
        $(this).children('.inner').addClass('hover');
    }, function() {
        $(this).children('.inner').removeClass('hover');
    });
});
