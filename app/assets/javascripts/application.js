// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//= require cocoon

$(document).ready(function() {

  var count = 0;

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
        count++;
        var lastShown = $(".step:visible");
        $('.count').text(count)
        if (count === 1) {
          var nextStep = $(lastShown).next();
          nextStep.show();
          $(lastShown).hide();
        }
        else if (count === 6) {
          var nextStep = $(lastShown).next();
          nextStep.show();
          $(lastShown).hide();
        }
        else {
          return;
        };
    });

    // 

   $('.btn-decrease').click(function () {
   		var currentStep = $(".step:visible");
   		count--;
   		$('.count').text(count)
   });
});