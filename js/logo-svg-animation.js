/* jQuery(document).ready(function ($) {

    $("#logo").each(() => {

        let path;
        let paths = $('path', this);
        for (iter = 0; iter < paths.length; iter++) {
            path = paths[iter];
            length = path.getTotalLength();

            $(path)
            .attr('data-length', length)
            .css({
                "stroke-dasharray": length,
                "stroke-dashoffset": length,
                "animation": "animateLine 2s ease forwards 0.6s infinite"
            });
        }

    });

    let count = 0;

    function writeText() {

        $('#writing').each(function () {

            let length, path, paths;
            paths = $('path', this);
            path = paths[count];
            length = $(path).attr('data-length');

            $(path).animate({
                'stroke-dashoffset': 0
            }, {

                duration: 2 * length,
                easing: 'linear',
                complete: function () {
                    if (count == paths.length) count = 0;
                    else {
                        count++;
                        writeText()
                    }
                }
            });
        });
    }

}); */

(function ($) {

    $(document).ready(function() {

        setAttributes();
        vectorInit();
    });
    
    $(window).on('load', function() {
    
        drawCurves();
        //$('#button').click(function() {
        $(document).ready(function() {
        $(this).hide();
        vectorInit();
        drawCurves();
        });
    });
    
    var target = '#writing';
    
    function setAttributes() {
    
        $(target).find('path').attr({'fill': 'none', 'stroke-width': '3'});
    }
    
    function vectorInit() {
    
        $(target).each(function() {
    
        var sequence = $('path', this);
        var iter, vector, length;
    
        for (iter = 0; iter < sequence.length; iter++) {
        vector = sequence[iter];
        length = vector.getTotalLength();
        $(vector).attr('data-length', length).css({'stroke-dashoffset': length, 'stroke-dasharray': length});
        }
        });
    }
    
    var count = 0;
    
    function drawCurves() {
    
    var sequence = $(target).find('path');
    var total = sequence.length-1;
    var vector = sequence.eq(count);
    var length = vector.attr('data-length');
    
        vector.animate({'stroke-dashoffset': 0}, {
     
            duration: 1.5*length,
            easing: 'linear',
            complete: function() {
            vector.stop(true, true);
            //if (count == total) {count = 0; $('#button').fadeIn()}
            //else {count++; drawCurves()}
            count++; 
            drawCurves()
            }
        });
    }

 }(jQuery));