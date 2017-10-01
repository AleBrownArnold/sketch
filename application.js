$(document).ready(function(){
  let div = "<div class='interior'></div>";
  let div2 = "<div class='interior' id='ficogay'>Fico gay</div>";
  let div3 = "<div class='interior' id='ficogay'>Toto gay</div>";
  let witdh = $(".exterior").css("width");
  let Size = 960;
  let squareSize = 960/10 + 'px';

  $(".interior").css({"width": squareSize,"height": squareSize});

  for (let i=0; i<255;i++){

      let e = document.createElement("div");
      e.className = "interior";

      document.getElementsByClassName('exterior')[0].appendChild(e);


  };

  $("button").on("click", function(){
    let amountSquares = prompt("Choose the amount of squares per side",8);
    let newSquareSize = 960/amountSquares + 'px';
    $(".exterior").empty()

    for (let i=0; i< (amountSquares * amountSquares);i++){
      let e = document.createElement("div");
      e.className = "interior";

      document.getElementsByClassName('exterior')[0].appendChild(e);

    };
    $(".interior").css({"width": newSquareSize,"height": newSquareSize});
    $(".interior").hover(function(){
      $(this).css("background-color","red")
    });
  });

  $(".interior").hover(function(){
    $(this).css("background-color","red")
  });
});
