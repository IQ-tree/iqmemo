// Check if user has visited before

if (Cookies.get("_visitedbefore") == "true" && Cookies.get("username") != undefined) {
    $("#top-button").text("Launch IQMemo");
    $("#under-button").text("Welcome, " + Cookies.get("username"));
}