function createAccount() {
    $(".main").addClass("blur");
    $(".navbar").addClass("blur");
    $(".account").css("display", "block");
    $(".account-main").css("display", "block");
}

function closeAccount() {
    $(".main").removeClass("blur");
    $(".navbar").removeClass("blur");
    $(".account").css("display", "none");
    $(".account-main").css("display", "none");
}

$("#nextbutton").on("click", function() {
    var user = document.getElementById("username").value;
    if (user == "") {
        alert("Please provide a valid username.");
        return;
    }
    else {
        addCookie("username", user);
        $(".account-one").css("display", "none");
        $(".account-two").css("display", "block");
    }
});

$("#finishbutton").on("click", function() {
    if($("#account-two-tos").prop("checked") == true && $("#account-two-privacy").prop("checked") == true){
        var lang = document.getElementById("language").value;
        addCookie('lang', lang);
        addCookie('_visitedbefore', "true");
        location.reload();
    }
    else {
        alert("Make sure you checked all the checkboxes.");
    }
})