$(document).ready(function() {
    "use strict";

    /* ==============================================
        Smooth Scroll on anchors
    =============================================== */


    $('.one-page-nav').find('a').addClass('section-scroll');
    $('.section-scroll').on('click', function(e) {
        var anchor = $(this),
            anchorAttr = anchor.attr('href');

        $('html, body').animate({
            scrollTop: $(anchorAttr).offset().top - 62
        }, 1000);

        e.preventDefault();
    });
})
