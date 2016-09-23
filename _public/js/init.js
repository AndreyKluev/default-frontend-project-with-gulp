
$(document).ready(function(){
    $('a.js-langs-handler', '.js-langs').on('click', function(){
        var obj = $(this).closest('.js-langs');
        obj.toggleClass('active');

        return false;
    });

    $('ul', '.js-langs').on('click', function(){
        return false;
    });

    /* * */

    $('a.js-modal').on('click', function(){
        $('#modal').show();
    });

    $('.js-modal-close').on('click', function(){
        $('#modal').hide();
    });

    /* * */

    $('body').on('click', function(){
        $('.js-langs').removeClass('active');
        return false;
    });
});
