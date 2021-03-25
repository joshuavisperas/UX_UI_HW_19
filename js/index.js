$(".navAbout").on("click", function() {
    $(".myName").fadeOut(500);
    $("#aboutMe").delay("slow").fadeIn(500);
});

$(".logo").on("click", function(){
    $("#aboutMe").fadeOut(500);
    $(".myName").delay("slow").fadeIn(500);
});

$(".navProjects").on("click", function() {
    var targetDiv = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
