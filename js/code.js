$(function(){
    //wow library

    new WOW().init();
    //-------------------------------------------------------------------------
    //sitcky navbar
    $(window).on(scroll , function(){
         var scrt = "100px";
         //var sticky = $(this).scrollTop;
        if($(this).offset().top > scrt)
        {
           
            $('nav').addClass("fixed");
           
        }
        /*else
        {
            $('nav').removeClass("fixed");
        }*/

    });
    //------------------------------------------------------------------------
    //start selectric
    $('.selectbox').selectric();

    //time picker
    $('.time').clockTimePicker();
    //---------------------------------------------------------------------------
    

   
   

})
$(function(){
    $('select').selectric();
  });
  $(function(){
    $('.time').clockTimePicker();
  });