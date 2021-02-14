$(document).ready(function(){
    $(".dropdown").click(function(){
        $(".dropdown-content").toggle()
    });
});
$(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-content").hide();
    }
});