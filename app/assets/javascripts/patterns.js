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
    var nextStep = $(lastShown).next();
    if (nextStep.length == 0){
      return;
    };
    nextStep.show();
    $(lastShown).hide();
  });

  $(".btn-previous-step").on("click", function(){
    var currentStep = $(".step:visible");
    var prevStep = $(currentStep).prev();
    if (prevStep.length == 0){
      return;
    };
    prevStep.show();
    $(currentStep).hide();
  });

    $('.btn-increment').click(function () {
      // be consistent--change this to onClick
        knitlyCount++;
        var lastShown = $(".step:visible");
        $('.count').text(knitlyCount);

        // make an ajax request, get the current step, get the next step 
        $.getJSON(location.pathname + "/" + "steps/" + knitlyStep, function(data) {
          console.log(data);

          // every time it's click ++ the knitlyStep? 
        });

        // if (knitlyCount === 1) {
        //   var nextStep = $(lastShown).next();
        //   nextStep.show();
        //   $(lastShown).hide();
        // }
        // else if (knitlyCount === 6) {
        //   var nextStep = $(lastShown).next();
        //   nextStep.show();
        //   $(lastShown).hide();
        // }
        // else {
        //   return;
        // };
    });

   $('.btn-decrease').click(function () {
      var currentStep = $(".step:visible");
      knitlyCount--;
      $('.count').text(knitlyCount)
   });
});