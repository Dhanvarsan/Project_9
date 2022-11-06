var bannerHeight = $('.banner-wrapper').height() - 150
$(document).on('scroll', function() {
    if ($(window).scrollTop() > bannerHeight) {
        $('.scroll-header').addClass('black-bg')
        $('.scroll-header').addClass('hide-nav')
    } else {
        $('.scroll-header').removeClass('black-bg')
        $('.scroll-header').removeClass('hide-nav')
    }
})