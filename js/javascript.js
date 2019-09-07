window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("menu").style.top = "0";
    } else {
        document.getElementsByClassName("menu").style.top = "-50px";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("menu").style.top = "0";
    } else {
        document.getElementsByClassName("menu").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}