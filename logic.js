$(document).ready(function(){

  $('.card.bg-danger.mb-2').on("click", () => {
    $('.card.bg-danger.mb-2').replaceWith(input_template("fte"));
  });

  $(document).on("input", "#timeInput", () => {
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
  });

});

function card_template (name_of_card, color) {
  return `<div class="card bg-${color} mb-2">
    <div class="card-body">
      <h4>${name_of_card.toUpperCase()}:</h4>
      <div id="${name_of_card}out"></div>
    </div>
  </div>`
}

function input_template(name_of_card) {
  return `<form>
    <div class="form-group">
      <input
      id="timeInput"
      type="number"
      class="form-control form-control-lg"
      placeholder="Enter ${name_of_card.toUpperCase()}s...">
    </div>
  </form>`
}
