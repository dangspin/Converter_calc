$(document).ready(function(){

  var activeEle = NaN;

  $("#output").on("click", '.card.bg-danger.mb-4', function() {
    if (activeEle) {
      back_to_card(activeEle, $("form>.form-group"))
    }
    var ele = $('.card.bg-danger.mb-4');
    activeEle = ele;
    var text = ele.text().trim();
    ele.replaceWith(input_template(text));
  })

  $("#output").on("click", '.card.bg-info.mb-4', function() {
    if (activeEle) {
      back_to_card(activeEle, $("form>.form-group"))
    }
    var ele = $('.card.bg-info.mb-4');
    activeEle = ele;
    var text = ele.text().trim();
    ele.replaceWith(input_template(text));
  })

  $("#output").on("click", '.card.bg-primary.mb-4', function() {
    if (activeEle) {
      back_to_card(activeEle, $("form>.form-group"))
    }
    var ele = $('.card.bg-primary.mb-4');
    activeEle = ele;
    var text = ele.text().trim();
    ele.replaceWith(input_template(text));
  })

  $("#output").on("click", '.card.bg-warning.mb-4', function() {
    if (activeEle) {
      back_to_card(activeEle, $("form>.form-group"))
    }
    var ele = $('.card.bg-warning.mb-4');
    activeEle = ele;
    var text = ele.text().trim();
    ele.replaceWith(input_template(text));
  })

  $(document).on("mouseup", function(e) {
    var container = $("#output");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      if (activeEle) {
        back_to_card(activeEle, $("form>.form-group"));
        activeEle = NaN;
      }
    }
  });

  $("#output").on("keyup", "#timeInput", function() {
    var a = parseFloat($("#timeInput").val());

    if (isNaN(a)) {
      a = 0;
      $('#spout').html(a/0.183);
      $('#pdout').html(a + "  Person Day");
      $('#fout').html(0.2*a);
      $('#shout').html(8*a);
    } else {
      $('#spout').html(a/0.183);
      $('#pdout').html(a + "  Person Day");
      $('#fout').html(0.2*a);
      $('#shout').html(8*a);
    }
  });
  function back_to_card(selector, ele) {
    var text = selector.text().trim();
    var color = selector.get(0).className.split(" ")[1].substring(3)
    ele.replaceWith(card_template(text, color))
  }

});

function card_template (name_of_card, color) {
  let id_name = getName(name_of_card)
  return `<div class="card bg-${color} mb-4">
    <div class="card-body">
      <h4>${name_of_card}</h4>
      <div id="${id_name}out"></div>
    </div>
  </div>`
}

function input_template(name_of_card) {
  return `<form>
    <div class="form-group mb-4">
      <input
      id="timeInput"
      type="number"
      class="form-control form-control-lg"
      placeholder="Enter ${name_of_card} ...">
    </div>
  </form>`
}


function getName(name_of_card) {
  var str = name_of_card.split(" ");

  var res = "";
  for (var i = 0; i < str.length; i++) {
    res = res + str[i].charAt(0);
  }
  return res;
}
