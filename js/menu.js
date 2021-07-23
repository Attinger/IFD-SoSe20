$('.menu--trigger').click( () => {
    $('.menu-icon').css('display', 'none');
    $('.close-menu').css('display', 'block');
    $('.main-menu').css('transform', 'translateX(0)');
})

$('.close-menu').click( () => {
    $('.close-menu').css('display', 'none');
    $('.menu-icon').css('display', 'block');
    $('.main-menu').css('transform', 'translateX(250px)');
})

$('.widget--trigger').click( () => {
    $('.close-menu').css('display', 'none');
    $('.menu-icon').css('display', 'block');
    $('.main-menu').css('transform', 'translateX(250px)');
    $('.add--widget').css('display', 'block');
})

$('.error-handler').click( () => {
    $('.error-message').css('display', 'block');
})

$('.button--close').click( () => {
    $('.error-message').css('display', 'none');
    $('.add--widget').css('display', 'none');
})


