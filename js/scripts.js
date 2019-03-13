$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var favAnimal = $("input#favAnimal").val();
    var iceCream = $("input#iceCream").val();
    var favFood = $("input#favFood").val();
    var hobby = $("input#hobby").val();

    var favThings = [favAnimal, iceCream, favFood, hobby]

    $('ul#favThingsList').children('li').first().text(favThings[0]);
    $('ul#favThingsList').children('li').second().text(favThings[1]);
    $('ul#favThingsList').children('li').third().text(favThings[2]);
    $('ul#favThingsList').children('li').last().text(favThings[3]);

    $("#favThings").show();
  });


});
