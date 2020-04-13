$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});
$("input").keypress(function(event) {
  if (event.which === 13) {
    var todotext = $(this).val();
    $(this).val("")
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todotext + "</li> ");
  }

});
$("#jiddi").click(function() {
  $("input").fadeToggle();
})
