var main = function()
{   
$(".hidden").hide();
  $(".content").click(function(){
    $(".hidden").toggle();  
      
  });
};

$(document).ready(main);


