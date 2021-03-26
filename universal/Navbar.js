$(document).on("scroll", ()=>{
    resizeTopBar();
});

$(document).ready(function() {
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");
    resizeTopBar(); 
});

function resizeTopBar(){
    var a = 110 - $(document).scrollTop();
    if (a < 60){
        a = 60;
    }
    $("#self-image").width(a);
    $("#self-image").height(a);
}