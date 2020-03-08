import './scss/style.scss';
import 'bootstrap';
import { WOW } from 'wowjs';
import { Swiper, Pagination, Navigation } from 'swiper/js/swiper.esm.js';

Swiper.use([Navigation]);

var wow = new WOW({
    live: false,
    scrollContainer: null
});

$('footer').load("footer.html", function(response, status, xhr) {
    wow.init();
});

$('.block-contact-us-main').load("block-contact-us-main.html", function(response, status, xhr) {
    wow.init();
});

if ($.contains(document.body, document.getElementById('slider-main'))) {

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });
}

if ($.contains(document.body, document.getElementById('slider-internal'))) {

    var mySwiper = new Swiper('.swiper-container-internal', {
        autoplay: {
            delay: 5000,
        },
        loop: false
    });
}

$(document).on('submit', '#form-contact', function(event) {
    event.preventDefault();

    $('#form-contact .btn-primary').addClass('disabled');

    $.ajax({
        cache: false,
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
        success: function(data) {

            $('.alert').hide();
            $('#form-contact .btn-primary').removeClass('disabled');

            if (data)
            {
                $('.alert-success').fadeIn();
                $("#form-contact")[0].reset();
            }
            else
            {
                $('.alert-danger').fadeIn();
            }

            setTimeout(function() { $('.alert').hide(); }, 5000);
        }
    });
});

wow.init();