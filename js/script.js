/*===========================
drawer
============================*/
jQuery('.header_icon_sp').on('click', function(e) { //クリックされた時の動きを書く//
    e.preventDefault();

    jQuery('.header_icon_sp').toggleClass('is-active');
    jQuery('.drawer_content').toggleClass('is-active');

    return false;
});

/*===========================
wow.js
============================*/
new WOW().init();

/*===========================
スムーススクロール
============================*/
jQuery('a[href^="#"]').on('click', function() { 
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this). attr('href');
    var position = 0;
    if ( id != '#') {
      position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);

    jQuery('.header_icon_sp').removeClass('is-active');
    jQuery('.drawer_content').removeClass('is-active');

});