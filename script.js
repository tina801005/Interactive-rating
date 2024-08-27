$(function(){
    $(".thanks_state").hide();
    $(".submit_btn").click(function(){
        $(".thanks_state").show();
    });
    $(".grade_level").on("mouseenter",function(){
        $(this).addClass("grade_level_hover");
        $(".grade_level").click(function(){
            $(this).css({"background-color":"white","color":"hsl(213, 19%, 18%)"});
            $(".rating_result_text").text("You selected "+$(this).text()+" out of 5");
        });
        $(this).mouseleave(function () { 
            $(this).removeClass("grade_level_hover");
        });
    });

});