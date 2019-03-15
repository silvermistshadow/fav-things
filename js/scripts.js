$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var favAnimal = $("input#favAnimal").val();
    var iceCream = $("input#iceCream").val();
    var favFood = $("input#favFood").val();
    var hobby = $("input#hobby").val();

    var favThings = [favAnimal, iceCream, favFood, hobby]
    var array2 = [];
    array2.push(favThings[1]);
    array2.push(favThings[2]);
    array2.push(favThings[3]);

    $("#favThingsList").append("<li>" + array2[0] + "</li>")
    $("#favThingsList").append("<li>" + array2[1] + "</li>")
    $("#favThingsList").append("<li>" + array2[2] + "</li>")


    $("#favThings").show()
  });


});
