$(document).ready(function() {

  var knitlyCount = 0;
  var knitlyStep = 1;

  function toggleSteps() {
    $(".btn-previous-step").toggle();
    $(".btn-next-step").toggle();
  };

  $(".step").first().show();

  $(".btn-show-all").on('click', function(){
    $(".step").show();
    $(".showPattern").toggle();
    toggleSteps();
  });

  $(".btn-hide-all").on('click', function(){
    $(".step").hide();
    $(".step").first().show();
    $(".showPattern").toggle();
  });

  $(".btn-next-step").on("click", function(){
    var lastShown = $(".step:visible");
    nextStep = $(lastShown).next();
    if (nextStep.length == 0){
      return;
    };
    nextStep.show();
    $(lastShown).hide();
    knitlyStep++;
  });

  $(".btn-previous-step").on("click", function(){
    var currentStep = $(".step:visible");
    var prevStep = $(currentStep).prev();
    if (prevStep.length == 0){
      return;
    };
    prevStep.show();
    $(currentStep).hide();
    knitlyStep--;
  });

  $('.btn-increment').on("click", function () {
    knitlyCount++;
    $('.count').text(knitlyCount);

    $.getJSON(location.pathname + "/steps/" + knitlyStep, function(json) {
      var stepJSON = json;

      if (knitlyCount > stepJSON.position) {
        var lastShown = $(".step:visible");
        var nextStep = $(lastShown).next();
        nextStep.show();
        $(lastShown).hide();
        knitlyStep++;
      };
    });
  });

  $('.btn-decrease').on("click", function () {
    var currentStep = $(".step:visible");
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