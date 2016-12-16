$(function() {
  $("#save").click(function () {
    localStorage["domains"] = $("#domains").val();
    localStorage["disabled"] = $("#disabled").prop("checked");
  });

  if (localStorage["domains"]) {
    $("#domains").val(localStorage["domains"]);
  }

  if (localStorage["disabled"] == "true") {
    $("#disabled").prop("checked", true);
  }
});
