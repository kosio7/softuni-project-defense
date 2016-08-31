function toggleNav() {    

    var navWidth = document.getElementById("navigation").style.width;
    var elNav = document.getElementById("navigation");
    var elMainContent = document.getElementById("main-content");
    var elHeaderContent = document.getElementById("header-content");
    var elMenuButton = document.getElementById("menuButton");


    if (parseInt(navWidth) > 0) {
        elNav.style.width = "0";
        elMainContent.style.marginLeft = "0px";
        elHeaderContent.style.marginLeft = "0px";
        elMenuButton.style.marginLeft = "0px";        
    } else {
        elNav.style.width = "300px";
        elMainContent.style.marginLeft = "300px";
        elHeaderContent.style.marginLeft = "300px";
        elMenuButton.style.marginLeft = "300px";
    }
}