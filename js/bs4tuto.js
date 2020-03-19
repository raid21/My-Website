$(function (){
    'use strict';
    // set the height of header's slider
    var windowHeight = $(window).height(),
        navH  = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(windowHeight - navH);

    // start of scroll to top button
    var btn = $('#button');
    $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } 
    else 
    {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    // end of scroll to top button

    // smooth scroll to the desired div
    $('.navbar-nav li a').click(function () {
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
    });
})