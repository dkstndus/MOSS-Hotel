$(function(){
    $("#gnbbtn").click(function(){
      if( $("#gnbbtn").hasClass("on") == false ){
          $("#gnbbtn").addClass("on");
          $("#gnb").addClass("down");
          $("span").addClass("line");
          $("span").removeClass("lineout");
          $("#gnb").removeClass("up");

      }else{
          $("#gnbbtn").removeClass("on");
          $("#gnb").removeClass("down");
          $("span").removeClass("line");
          $("span").addClass("lineout");
          $("#gnb").addClass("up");
      }
    });
});
