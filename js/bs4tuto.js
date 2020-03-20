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

// start of portfolio images modal
var ids_tab = ["img/port/boat.png","img/port/uipage.png",
               "img/port/login.png","img/port/regis.png"];

function openModel (id) {

    switch(id) {
        case 'port1':
            create_ele(ids_tab[0]);
        break;

        case 'port2':
            create_ele(ids_tab[1]);
        break;

        case 'port3':
            create_ele(ids_tab[2]);
        break;

        case 'port4':
            create_ele(ids_tab[3]);
        break;

    }
}

// function to create img ele for the modal
function create_ele(t) {
    var ele = document.getElementById('addPicture');
    var img = document.createElement('img');
    img.src = t;
    img.id = "modl-img";
    ele.appendChild(img);
    document.getElementById("modl-img").classList.add('img-fluid')
}

// function to remove the img after closing the modal
function deletefunc(){
    var rem = document.getElementById('modl-img');
    rem.remove();
}
// end of portfolio images modal

