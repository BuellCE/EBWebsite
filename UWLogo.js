var educationOpacityFunctionality = true;

$(document).on("scroll", ()=>{
    if (educationOpacityFunctionality){
        updateEducationContents();
    }
    updateUWLogo();
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

function updateUWLogo(){
    var a = 400 - ($(document).scrollTop() / 3);
    if (a < 250){
        a = 250;
    }
    if (a > 350){
        a = 350;
    }
    $("#uw-logo").width(a * 1.3);
    $("#uw-logo").height(a);
}

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

    if (p > 500){
        p = 500;
    }

    educationElement.style.marginTop = (450-p) + "px";
    educationElement.style.opacity = (p / 200) - 1;
}

function getEducationElement(){
    return document.getElementById("education-contents");
}