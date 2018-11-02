$(document).ready(function(){
    // Materialize jquery for Modals
    $('.modal').modal();
    // Materialize jquery for Collapsable
    $('.collapsible').collapsible();

    $('.dropdown-trigger').dropdown();

    $('input#topic, textarea#sideA').characterCounter();
  });