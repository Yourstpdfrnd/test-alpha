$('.brands__menu').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    arrows: true,
    focusOnSelect: true,
    initialSlide: 2,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 690,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

function changeSlide(prefix) {
    let brandSlide =  '.brands__slider-item_' + prefix;

    $('.brands__slider-item.visible').removeClass('visible').css({'opacity': '0'});
    $(brandSlide).addClass('visible').animate({
        opacity: 1
    }, 500);
}


$('.brands__menu').on('afterChange', function(){
    let $item = $('.brands__menu .slick-center .brands__menu-img');
    let $bg = $('.brands');
    let cover = window.innerWidth > 1920? '/ cover': '';
    if($item.hasClass('brands__menu-img_eu')){
        changeSlide('eu');
        $bg.css('background', 'url(./img/brands-bg/eu-slot.png) center top '+ cover +' no-repeat #1c1c1c')
    } else if($item.hasClass('brands__menu-img_loki')){
        changeSlide('loki');
        $bg.css('background', 'url(./img/brands-bg/loki.jpg) center top '+ cover +' no-repeat #1c1c1c')
    } else if($item.hasClass('brands__menu-img_gb')){
        changeSlide('gb');
        $bg.css('background', 'url(./img/brands-bg/gb.png) center top '+ cover +' no-repeat #1c1c1c')
    } else if($item.hasClass('brands__menu-img_webby')){
        changeSlide('webby');
        $bg.css('background', 'url(./img/brands-bg/webby.png) center top '+ cover +' no-repeat #1c1c1c')
    } else if($item.hasClass('brands__menu-img_gs')) {
        changeSlide('gs');
        $bg.css('background', 'url(./img/brands-bg/gs.png) center top '+ cover +' no-repeat #1c1c1c')
    } else if($item.hasClass('brands__menu-img_mp')) {
        changeSlide('mp');
        $bg.css('background', 'url(./img/brands-bg/megapari.jpg) center top '+ cover +' no-repeat #1c1c1c')
    } else if($item.hasClass('brands__menu-img_sav')) {
        changeSlide('sav');
        $bg.css('background', 'url(./img/brands-bg/sav.jpg) center top '+ cover +' no-repeat #1c1c1c')
    } else if($item.hasClass('brands__menu-img_roku')) {
        changeSlide('roku');
        $bg.css('background', 'url(./img/brands-bg/roku.jpg) center top '+ cover +' no-repeat #1c1c1c')
    } else {
        changeSlide('cf');
        $bg.css('background', 'url(./img/brands-bg/crazyfox.jpg) center top '+ cover +' no-repeat #1c1c1c')
    }
});

