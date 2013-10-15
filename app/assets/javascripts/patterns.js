$(document).ready(function() {

  var knitlyCount = 0;
  var knitlyStep = 1;

  function showFirst() {
    $(".step").first().show();  
  }

  function nextStep() {
    var lastShown = $(".step:visible");
    var nextStep = $(lastShown).next();
    if (nextStep.length == 0) {
      return;
    };
    nextStep.show();
    $(lastShown).hide();
    knitlyStep++;
  };

  showFirst();

  $(".btn-show-all").on('click', function(){
    $(".step").show();
    $(".showPattern").toggle();
  });

  $(".btn-hide-all").on('click', function(){
    $(".step").hide();
    showFirst();
    $(".showPattern").toggle();
  });

  $(".btn-next-step").on("click", function(){
    nextStep();
  });

  $(".btn-previous-step").on("click", function(){
    var lastShown = $(".step:visible");
    var prevStep = $(lastShown).prev();
    if (prevStep.length == 0){
      return;
    };
    prevStep.show();
    $(lastShown).hide();
    knitlyStep--;
  });

  $('.btn-increment').on("click", function () {
    $.getJSON(location.pathname + "/steps/" + knitlyStep, function(json) {
      var stepJSON = json;
      knitlyCount++;
      $('.count').text(knitlyCount);
      if (knitlyCount > stepJSON.position) {
        nextStep();
      };
    });
  });

  $('.btn-decrease').on("click", function () {
    var lastShown = $(".step:visible");
    knitlyCount--;
    $('.count').text(knitlyCount)

    $.getJSON(location.pathname + "/steps/" + knitlyStep, function(json) {
    var stepJSON = json;

      if (knitlyCount < stepJSON.position) {
        var lastShown = $(".step:visible");
        var prevStep = $(lastShown).prev();
        prevStep.show();
        $(lastShown).hide();
        knitlyStep--;
      };
    });
  });
});

// make the counter reset to zero at each new step and then count up again