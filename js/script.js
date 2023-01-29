// JS Script

$(document).ready(function () {
    $('.nav-link').on("click", function () {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
    });

    $(".hamburger").on("click",function(){
        $(this).toggleClass("active");
        $(".navbar ul").toggleClass("active");
    });
    $('#produkbutton').on("click", function () {
        $(this).toggleClass("active");
        $('.produk-content h1').addClass("active");
    });
    $("ul li:nth-child(2) , #produkbutton").click(function (){
        $('html, body').animate({
            scrollTop: $("#produk").offset().top
        }, 2000);
    });
})

// Script
$('.main-carousel').flickity({
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
});