$(document).ready(function(){
  $("#form").submit(function(event){
    var animal = $("#animal").val();
    if(animal === "Dolphins") {
      $("#dolphin").show();
      $("#turtle").hide();
      $("#giraffe").hide();
    } else if(animal === "Turtles") {
      $("#turtle").show();
      $("#dolphin").hide();
      $("#giraffe").hide();
    } else if(animal === "Giraffes") {
      $("#giraffe").show();
      $("#dolphin").hide();
      $("#turtle").hide();
    } else {
      console.log("Something went wrong with form submission");
    }
    event.preventDefault();
  }); 
});

