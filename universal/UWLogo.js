var educationOpacityFunctionality = true;

$(document).on("scroll", ()=>{
    if (educationOpacityFunctionality){
        updateEducationContents();
    }
    updateArrowVisibility();
});

$( window ).resize(function() {
    if (document.documentElement.clientHeight > 1600){
        educationOpacityFunctionality = false;
        var educationElement = getEducationElement();
        educationElement.style.marginTop = "0px";
        educationElement.style.opacity = 1;
    }else{
        educationOpacityFunctionality = true;
        updateEducationContents();
    }
});

function updateArrowVisibility(){
    var arrowScroll = 400 - $(document).scrollTop();
    if (arrowScroll < 0){
        arrowScroll = 0;
    }
    document.getElementById("scroll-arrow").style.opacity = arrowScroll / 400;
}

function updateEducationContents(){
    var p = $(document).scrollTop();
    var educationElement = getEducationElement();

    if (p > 570){
        p = 570;
    }

    educationElement.style.marginTop = (450-p) + "px";
    educationElement.style.opacity = Math.max(Math.min((p / 200) - 1, 1), 0);
}

function getEducationElement(){
    return document.getElementById("education-contents");
}