$(document).ready(function() {

  var knitlyCount = 1;
  var knitlyStep = 1;

  function resetCounter() {
    knitlyCount = 1;
    $('.count').text(knitlyCount);
  };

  function showFirst() {
    $(".step").first().show();  
  };

  function goToNextStep() {
    var currentStep = $(".step:visible");
    var nextStep = $(currentStep).next();
    if (nextStep.length == 0) {
      return;
    }; 
    nextStep.show();
    $(currentStep).hide();
    knitlyStep++;
    resetCounter();
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
    goToNextStep();
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
    resetCounter();
  });

  $('.btn-increment').on("click", function () {
    $.getJSON(location.pathname + "/steps/" + knitlyStep, function(json) {
      var stepJSON = json;
      if (knitlyCount > stepJSON.position) {
        goToNextStep();
      }
      else { 
        knitlyCount++;
        $('.count').text(knitlyCount);
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
        var currentStep = $(".step:visible");
        var prevStep = $(currentStep).prev();
        prevStep.show();
        $(currentStep).hide();
        knitlyStep--;
      };
    });
  });
});
