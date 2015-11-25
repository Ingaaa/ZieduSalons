
window.onload =  function() {
    
    var p = document.createElement("p");    
    var div = document.getElementById("vairak");
    div.appendChild(p);
    var text = document.createTextNode("Kooperatīvs pasākums, jauka dzimšanas diena, seminārs,  birojs vai māja, kāzas- ziedu salons ar labāko kvalitāti noformēs šo pasākumu.");
    p.appendChild(text);
    div.style.display = "none";
    var a= document.getElementById("button");
    a.onclick=showhide;
    
    function showhide (){
        if (div.style.display !== "none") {
            div.style.display = "none";
        }
        else {
            div.style.display = "block";
        };
    };
};
$(document).ready(function(){
    var counter = 0, // to keep track of current slide
    items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = items.length; // total number of slides

    // this function is what cycles the slides, showing the next or previous slide and hiding all the others
    var showCurrent = function(){
        var itemToShow =counter%numItems;// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
        items.removeClass('show'); // remove .show from whichever element currently has it
        items.eq(itemToShow).addClass('show');    
        };

    // add click events to prev & next buttons 
    $('.next').on('click', function(){
        counter++;
        showCurrent(); 
    });
    $('.prev').on('click', function(){
        counter--;
        showCurrent(); 
    });
});






