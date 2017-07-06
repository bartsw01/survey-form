$(document).ready(function(){
  $("#formSurvey").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $("#survey").show();
    event.preventDefault();
  });
});
