$(document).ready(function(){
  let div = "<div class='interior'></div>";
  let div2 = "<div class='interior' id='ficogay'>Fico gay</div>"
  for (let i=0; i<255;i++){
    if (i === 20){
      $(".exterior").append(div2)
    }else{
      $(".exterior").append(div)
    };

  };

  $(".interior").hover(function(){
    $(this).css("background-color","red")
  });


});
