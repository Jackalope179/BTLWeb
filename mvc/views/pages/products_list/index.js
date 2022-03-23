$(document).ready(function() {
    $(".item_figure").mouseover(function() {
        $(this).find("img").attr("src", "https://e7.pngegg.com/pngimages/991/940/png-clipart-apple-logo-apple-heart-logo.png")
    });
    $(".item_figure").mouseout(function() {
        $(this).find("img").attr("src", "https://www.hcmut.edu.vn/images/hcmut/logoBK.png")
    });
    $(".heart_icon_chose").click(function() {
        if ($(this).css("display") === "block") {
            $(this).css("display", "none");
            $(this).prev().css("display", "block");
        }
    });
    $(".heart_icon_not_chose").click(function() {
        if ($(this).css("display") === "block") {
            $(this).css("display", "none");
            $(this).next().css("display", "block");
        }
    });
});