$(function (){


    $('#header .navbar-nav li a').click(function () {
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    });


//    go-to-top
//scroll page
    $('#header .navbar-nav li a').click(function (){

        let target = $(this).attr('href');
        let position = $(target).offset();
        $('html, body').animate({
            'scrollTop' : position.top + 'px'
        },1000)
        return false;
    });

    $(document).scroll(function () {
        let topScroll   =   $(document).scrollTop();
        if (topScroll>=500) {
            $('#go_top').fadeIn('fast')
        }else{
            $('#go_top').fadeOut('fast')
        }
    });

    $('#go_top').click(function () {
        $('html, body').animate({
            'scrollTop' : 0
        },500)
    })
})

//owl-carousel
$(".owl-carousel").owlCarousel({
    items: 4,
    rtl: true,
    loop: true,
    nav: true,
    navText: ['<i class="fas fa-angle-right"></i>', '<i class="fas fa-angle-left"></i>'],
    rewind: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        576: {
            items:2,
            nav:false
        },
        768: {
            items: 3,
            nav: true
        },
        992: {
            items: 4,
            nav: true,
        },
        // 1200:{
        //     items: 4,
        //     nav: true,
        // }
    }
});

//countDown//flipDown

document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var tenDaysFromNow = (new Date().getTime() / 1000) + 10*(86400) + 1;

    // Set up FlipDown
    var flipdown = new FlipDown(tenDaysFromNow)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });

});