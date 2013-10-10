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

  $(".step").first().show();

  $(".btn-show-all").on('click', function(){
    $(".step").show();
    $(".showPattern").toggle();
  });

  $(".btn-hide-all").on('click', function(){
    $(".step").hide();
    $(".step").first().show();
    $(".showPattern").toggle();
  });

  $(".btn-next-step").on("click", function(){
    var lastShown = $(".step:visible");
    $(lastShown).next().show();
    $(lastShown).hide();
  });

  $(".btn-previous-step").on("click", function(){
    var currentStep = $(".step:visible");
    $(currentStep).prev().show();
    $(currentStep).hide();
  });

   var count = 0;
    $('.btn-increment').click(function (e) {
        e.preventDefault();
        count++;
        console.log(count)
        $('.count').text(count)
    });
});

