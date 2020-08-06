var pw1 = document.getElementById("pw-firsts");
var pw2 = document.getElementById("pw-seconds");
var pw3 = document.getElementById("pw-thirds");
var pw4 = document.getElementById("pw-fourths");
var pw1_v, pw2_v, pw3_v, pw4_v;
pw1.onchange = function() {
    pw1_v = pw1.value;
    $("#pw-first").attr("src", "images/pass/" + pw1_v + ".png");
}
pw2.onchange = function() {
    pw2_v = pw2.value;
    $("#pw-second").attr("src", "images/pass/" + pw2_v + ".png");
}
pw3.onchange = function() {
    pw3_v = pw3.value;
    $("#pw-third").attr("src", "images/pass/" + pw3_v + ".png");
}
pw4.onchange = function() {
    pw4_v = pw4.value;
    $("#pw-fourth").attr("src", "images/pass/" + pw4_v + ".png");
}

$("#nextbutton").on("click", function() {
    if (pw1_v == undefined || pw2_v == undefined || pw3_v == undefined || pw4_v == undefined) {
        Cookies.set("passcode", "none", {expires: 7200});
        return;
    }
    else {
        Cookies.set("passcode", "true", {expires: 7200});
        addCookie("passcode_1", pw1_v);
        addCookie("passcode_2", pw2_v);
        addCookie("passcode_3", pw3_v);
        addCookie("passcode_4", pw4_v);
    }
})