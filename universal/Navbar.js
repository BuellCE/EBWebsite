$(document).on("scroll", ()=>{
    resizeTopBar();
});

$(document).ready(function() {
    $("#header").load("universal/header.html"); 
    $("#footer").load("universal/footer.html");
    resizeTopBar(); 
});

function resizeTopBar(){
    var a = 115 - $(document).scrollTop();
    if (a < 60){
        a = 60;
    }
    $("#self-image").width(a);
    $("#self-image").height(a);
}