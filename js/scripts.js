$(document).ready(function () {
    function scrollHandler() {
        let bottomEdge = window.innerHeight + window.scrollY - 100
        if (bottomEdge >= window.innerHeight + 100) {
            $(".back-to-top").addClass("active");
        } else {
            $(".back-to-top").removeClass("active");
        };
        $(".hide").each(function (i, elem) {
            let elementOffset = $(elem).offset().top;
            if (bottomEdge > elementOffset) {
                $(elem).addClass("scroll-top").removeClass("hide");
            };
        });
        $('.click-me').on('click', function () {
            let posY = $('.form').offset().top;
            $('html,body').scrollTop(posY);
        });
    }
    scrollHandler();
    $(window).scroll(scrollHandler);

    var countdown = 30 * 60 * 1000;
    var timerId = setInterval(function () {
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
        if (countdown <= 0) {
            alert("30 min!");
            clearInterval(timerId);
        } else {
            $(".timer").html(min + " : " + sec);
        }
    }, 1000);

    $(document).ready(function () {
        $('[name=Telefon]').bind("change keyup input click", function () {
            if (this.value.match(/[^0-9\+]/g)) {
                this.value = this.value.replace(/[^0-9\+]/g, '');
            }
        });
    });

    $(function () {
        $('.real-show-hint').focus(function (e) {
            e = e || window.event;
            e.preventDefault();
            var RealHint = $(this).data('hint');
            $(RealHint).toggle('fast');
            return;
        });
    });

    $('.real-show-hint').focusout(function (e) {
        if ($(e.target).hasClass('real-hint') == false)
            $('.real-hint').hide('fast');
        return;
    })
});