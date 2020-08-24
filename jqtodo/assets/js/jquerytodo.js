// Check Off Specific To DOs By CLicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

// Click on X  to Delete To DOs
$("span").click(function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // Grabbing NEw To Do Text from Input
        var todoText = $(this).val();
        $(this).val("");
        // Create New li and ADD to ul
        $("ul").append("<li>" + todoText  + "</li>");
    }

});