var setup = (function($){
  function setup(){
    $('.calc-input').on('change', updateValues);
  }

  function updateValues(){
    var cost = $('#num-dev-staff').val() * $('#average-salary').val() * $('#overhead').val();
    $('#estimated-cx-cost').text(cost);

    var capacity = $('#num-dev-staff').val() * 173;
    $('#hours-capacity').text(capacity);

    $('#capacity-lost').text(capacity * $('#unplanned-work').val() / 100);

    $('#current-capacity').text(capacity);

    var cycle_capacity = capacity / 0.6;
    $('#new-output-cycle').text(Math.round(cycle_capacity));

    $('#new-output-unplanned').text(Math.round(cycle_capacity * 0.125));

    var new_output = Math.round($('#new-output-unplanned').text());
    $('#total-additional-capacity').text(cycle_capacity + new_output);

  }
  return setup;
})(jQuery);
