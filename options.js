$(function(){

  $("#save").click(function () {
    localStorage["domains"] = $("#domains").val();
  });

  if (localStorage["domains"]) {
    $("#domains").val(localStorage["domains"]);
  }
});
