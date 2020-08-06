//if user has visited before, get username and launch
//else create account

$("#navbutton").on("click", function() {
    if (Cookies.get("_visitedbefore") == "true" && Cookies.get("username") != undefined) {
        //Launch
    }
    else {
        createAccount();
    }
})