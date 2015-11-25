
$(document).ready(function(){
    $('#Noteikumi').hide();

    $("#button1").mouseover(function(){
        $("#Noteikumi").slideDown();
    });
    $("#button1").mouseleave(function(){
        $("#Noteikumi").slideUp();
    });
});
