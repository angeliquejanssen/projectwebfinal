/* BRON : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show */
/*jslint browser:true */







/* NIGHT STORIES TOGGLE */

function myFunction() {
    "use strict";
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

