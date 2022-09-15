var collapse = true;
var gauge_gap = 135;

$(document).ready(function () {
    $("body")
        .on("click", ".expand_btn", flipButtonIcon)
        .on("click", ".gauge_btn", gaugeProgress)
    $('.collapse').collapse();
});

function flipButtonIcon(){
    let expand_btn = $(this);

    if(collapse) {
        expand_btn.find(".arrow_logo").css("transform", "rotate(180deg)");
    }
    else {
        expand_btn.find(".arrow_logo").css("transform", "rotate(0)");
    }

    collapse = !collapse;
}

function gaugeProgress(){
    let gauge_btn = $(this);
    let saved_value = 0;
    let gauge_indicator = 0;
    let selected_gauge_btn = gauge_btn.attr("class").split(" ")[1];

    if(selected_gauge_btn === "early_reg_btn") {
        saved_value = 250;
        gauge_indicator = 130;
        $(".gauge_btn").removeClass("active");
    }
    if(selected_gauge_btn === "open_house_btn") {
        saved_value = 350;
        gauge_indicator = 265;
        gauge_btn.addClass("active");
        $(".scholarship_btn").removeClass("active");
        $(".pay_in_full_btn").removeClass("active");
    }
    if(selected_gauge_btn === "scholarship_btn") {
        saved_value = 1850;
        gauge_indicator = 400;
        $(".open_house_btn").addClass("active");
        $(".pay_in_full_btn").removeClass("active");
        gauge_btn.addClass("active");
    }
    if(selected_gauge_btn === "pay_in_full_btn") {
        saved_value = 3350;
        gauge_indicator = 535;
        $(".scholarship_btn").addClass("active");
        $(".open_house_btn").addClass("active");
        gauge_btn.addClass("active");
    }

    gauge_btn.closest(".savings_gauge").find(".savings_value").text(`$${saved_value}`);
    gauge_btn.closest(".savings_gauge").find(".gauge_indicator").css("left", `${gauge_indicator}px`);
};