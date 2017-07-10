$(document).ready(function(){
    $("h1").mouseenter(function(){

        $("header").css({'background-image':'url(images/ecomp/logo.png)', 'transition': 'background-image 10s',
                        'background-repeat':'no-repeat', 'background-position' : 'center', 'background-size': '300px'
                        
                        }).fadeTo('slow', 1);
    });

    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});