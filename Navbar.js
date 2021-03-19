$(document).on("scroll", ()=>{
    var a = 110 - $(document).scrollTop();
    if (a < 70){
        a = 70;
    }
    $("#self-image").width(a);
    $("#self-image").height(a);
});

$( document ).ready(function() {
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});