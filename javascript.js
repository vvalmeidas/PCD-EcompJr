$(document).ready(function () {
/*    $("h1").mouseenter(function () {

        $("header").css({
            'background-image': 'url(images/ecomp/logo.png)', 'transition': 'background-image 10s',
            'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': '300px'

        }).show(1000);
    });
*/
    var appear = false;
    (function() {
    var node = document.getElementById('message'),
        message = "Programa de Controle Disciplinar",
        current = message.split("").reverse(),
        interval = setInterval(function() {
        if (current.length)
            node.innerHTML += current.pop();
        else
            clearInterval(interval);
            appear = true;
        }, 100);
    }());

    $("#logo").hide();
    $("#txtheader").hide();

    $("h1").mouseenter(function(){ 
        if(appear){
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

    var $doc = $('html, body');
    $('.scrollSuave').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

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




});