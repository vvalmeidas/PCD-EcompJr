$(document).ready(function () {

    /*  ==========================================
        Navbar effect
        ========================================== */
    (function ($) {
        $(document).ready(function () {

            // hide .navbar first
            $("nav").hide();

            // fade in .navbar
            $(function () {
                $(window).scroll(function () {

                    // set distance user needs to scroll before we start fadeIn
                    if ($(this).scrollTop() > 550) {
                        $('nav').fadeIn();
                    } else {
                        $('nav').fadeOut();
                    }
                });
            });

        });
    }(jQuery));

    /*  ==========================================
        Title appearing effect
        ========================================== */
    var appear = false;
    (function () {
        var node = document.getElementById('message'),
            message = "Programa de Controle Disciplinar";
            current = message.split("").reverse(),
            interval = setInterval(function () {
                if (current.length)
                    node.innerHTML += current.pop();
                else
                    clearInterval(interval);
                appear = true;
            }, 100);
    }());

    var appear2 = false;
    (function () {
        var node2 = document.getElementById('message2'),
            message2 = "O que é o Programa de Controle Disciplinar?";
            current2 = message2.split("").reverse(),
            interval2 = setInterval(function () {
                if (current2.length)
                    node2.innerHTML += current2.pop();
                else
                    clearInterval(interval2);
                appear2 = true;
            }, 100);
    }());

    //$("#logo").hide();

    /*  ======================================
        Description fade in
        ====================================== */

    $("#txtheader").hide();
    $("h1").mouseenter(function () {
        if (appear) {
            //$("#txtheader").show().delay(200);          
            //Sem parâmetros: o efeito é executado em 400ms
            $("#txtheader").fadeIn();
            //Parâmetro com a duração em ms do efeito
            $("#txtheader").fadeIn(1000);
            //Parâmetro slow: o efeito é executado em 600ms
            $("#txtheader").fadeIn("slow");
            //Parâmetro fast: o efeito é executado em 200ms
            $("#txtheader").fadeIn("fast");
        }
    });

    /*  =====================================
        Soft scroll
        ==================================== */
    var $doc = $('html, body');
    $('.scrollSuave').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    /* =====================================
        Modal windown
        ==================================== */

    $("a[rel=modal]").click(function (ev) {
        ev.preventDefault();

        var id = $(this).attr("href");

        var alturaTela = $(document).height();
        var larguraTela = $(window).width();

        $('#mascara').css({ 'width': larguraTela, 'height': alturaTela });

        $('#mascara').fadeIn(1000);
        $('#mascara').fadeTo("slow", 0.8);

        var left = ($(window).width() / 6) - ($(id).width() / 6);
        var top = ($(window).height() / 6) - ($(id).height() / 6);

        $(id).css({ 'top': top, 'left': left });
        $(id).show();
    });

    $("#mascara").click(function () {
        $(this).hide();
        $(".window").hide();
    });

    $('.fechar').click(function (ev) {
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });

    // handle the mouseenter functionality
    $(".img").mouseenter(function () {
        $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    $(".img").mouseleave(function () {
        $(this).removeClass("hover");
    });


});