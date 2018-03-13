import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#triangle-form").submit(function(event){
    event.preventDefault();
    // var side1 = parseInt($("#side1").val());
    // var side2 = parseInt($("#side2").val());
    // var side3 = parseInt($("#side3").val());
    // triangleType(side1, side2, side3);
  });
});
