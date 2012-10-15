$(document).ready(function() {
  //alternating background colors for sidebar
  $(".alternate-bg:odd").css("background-color", "#ebebeb");
  $(".alternate-bg:even").css("background-color", "#fffffff");
  });

  $(".rounded-tb").load(function() {
  $(this).wrap(function(){
    return '<span class="' + $(this).attr('class') + '" style="background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />';
  });
  $(this).css("opacity","0");


});
