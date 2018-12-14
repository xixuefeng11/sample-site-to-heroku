
(function ($) {
    "use strict";



  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    $('.control-exp-content').click( function (e) {
        $('.mobile-content').animate({left: '100%'}, 500);
    })

    $('.open-exp-mobile').click( function (e) {
        // alert('here');
        $('.mobile-content').animate({left: '0%'}, 500);
        // console.log($('.mobile-content').css('left'));
        // $('.mobile-content').css('left','0%');
    });

    $('.open-exp-mobile').click( function (e) {
        // alert('here');
        $('.mobile-content').animate({left: '0%'}, 500);
        // console.log($('.mobile-content').css('left'));
        // $('.mobile-content').css('left','0%');
    });

    $(input).keyup( function (e) {
        var length = $(this).val().length;
        var str = $(this).val();
        // is_number(this);
        if(is_number(this) == false)
            $(this).val(str.substring(0, length - 1));
    });

    function is_number(input) {
        // if($(input).val().trim().match(/^([0-9]*[.])?[0-9]+$/) == null)
            if(isNaN($(input).val()))
                return false;
        return true;
    }

    function validate (input) {

        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);