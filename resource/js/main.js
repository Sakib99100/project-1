$(document) .ready(function(){

 //sticy menu   
    
    $("js--service-section").waypoints(function(direction){
       if (direction == "down"){
              $("nav").addClass("sticky")
           } else{
               $("nav").removeClass("sticky")
           } 
    });
    
   //mixit up 
    var mixer = mixitup('.container')
});