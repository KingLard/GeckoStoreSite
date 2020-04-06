$("#snake-btn").on("click", function() {
    event.preventDefault();
    $("#snake-btn").addClass("active");
    $("#lizard-btn, #turtle-btn, #arach-btn").removeClass("active")
    $("#snake-sec").removeClass("hidden");
    $("#lizard-sec, #turtle-sec, #arach-sec").addClass("hidden");
})

$("#lizard-btn").on("click", function() {
    event.preventDefault();
    $("#lizard-btn").addClass("active");
    $("#snake-btn, #turtle-btn, #arach-btn").removeClass("active")
    $("#lizard-sec").removeClass("hidden");
    $("#snake-sec, #turtle-sec, #arach-sec").addClass("hidden");
    

})
