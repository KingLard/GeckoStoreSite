$("#snake-btn").on("click", function() {
    event.preventDefault();
    $("#snake-btn").addClass("active");
    $("#lizard-btn").removeClass("active")
    $("#snake-sec").removeClass("hidden");
    $("#lizard-sec").addClass("hidden");
    $(".reptile-jumbo").removeClass("lizard-bg");
    $(".reptile-jumbo").addClass("snake-bg");
})

$("#lizard-btn").on("click", function() {
    event.preventDefault();
    $("#lizard-btn").addClass("active");
    $("#snake-btn").removeClass("active")
    $("#lizard-sec").removeClass("hidden");
    $("#snake-sec").addClass("hidden");
    $(".reptile-jumbo").addClass("lizard-bg");
    $(".reptile-jumbo").removeClass("snake-bg");
    

})
