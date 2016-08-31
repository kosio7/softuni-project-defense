var element = document.getElementById('main-content');
element.addEventListener('click', closeNav);

function openNav() {
    document.getElementById("navigation").style.width = "200px";
    document.getElementById("main-content").style.marginLeft = "200px";
    document.getElementById("header-content").style.marginLeft = "200px";
}

function closeNav() {
    var elWidth = document.getElementById("navigation").style.width;

    if (parseInt(elWidth) > 0) {
    	document.getElementById("navigation").style.width = "0";
    }
    document.getElementById("main-content").style.marginLeft = "0px";
    document.getElementById("header-content").style.marginLeft = "0px";
}