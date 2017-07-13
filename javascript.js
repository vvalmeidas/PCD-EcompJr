$(document).ready(function(){
    $("h1").mouseenter(function(){

        $("header").css({'background-image':'url(images/ecomp/logo.png)', 'transition': 'background-image 10s',
                        'background-repeat':'no-repeat', 'background-position' : 'center', 'background-size': '300px'
                        
                        }).show(1000);
    });

    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

        $("a[rel=modal]").click( function(ev){
        ev.preventDefault();
 
        var id = $(this).attr("href");
 


    var alturaTela = $(document).height();
    var larguraTela = $(window).width();

    $('#mascara').css({'width':larguraTela,'height':alturaTela});

        $('#mascara').fadeIn(1000); 
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /6) - ( $(id).width() / 6 );
        var top = ($(window).height() / 6) - ( $(id).height() / 6);
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
 
    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });
 
    $('.fechar').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });

});