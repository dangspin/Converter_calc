$(document).ready(function(){

  $("#timeInput").on("input", function() {
    var num = parseFloat($(this).val());

    $('#spout').html(num*0.183);
    $('#fout').html(`<i>${0.2*num}</i>`);
  })

});
