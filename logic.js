$(document).ready(function(){

  $("#timeInput").on("input", () => {
    var a = parseFloat($("#timeInput").val());

    if (isNaN(a)) {
      a = 0;
      $('#spout').html(a/0.183);
      $('#pdout').html(a + "  Person Day");
      $('#fteout').html(0.2*a);
      $('#shout').html(8*a);
    } else {
      $('#spout').html(a/0.183);
      $('#pdout').html(a + "  Person Day");
      $('#fteout').html(0.2*a);
      $('#shout').html(8*a);
    }
  })


});
