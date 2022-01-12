$(document).ready(function() {
  $("#formLetter").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const subject = $("#subject").val();

    $(".letterName").text(name);
    $(".letterSubject").text(subject);
    $(".response").slideDown();
    $("#formLetter").hide();
    $("#formLetter")[0].reset();
    $(".respond").click(function(){
      $("#formLetter").slideDown();
      $(".response").hide();
    })
  });
});