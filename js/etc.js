// Viewport length
if (window.innerWidth < 1450) {
    alert("This site could not work properly in your screen. We recommend to larger your screen over 1450px.")
}

//add cookies
function addCookie(name, value) {
    Cookies.set(name, value, {expires: 7200});
}

// show div popup
function popup(title, paragraph) {
    $("#popup-title").text(title);
    $("#popup-paragraph").text(paragraph);
    $("#popup").attr('style', 'display: block;');
}

function closepopup() {
    $("#popup").attr("style", "display: none;");
}