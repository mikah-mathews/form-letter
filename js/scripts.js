$(document).ready(function() {
  $("#formLetter").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const subject = $("#subject").val();

    $(".letterName").text(name);
    $(".letterSubject").text(subject);
    $(".response").show();
  });
});