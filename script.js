const startGame = () => {
  $("#gameScreen").removeClass("hide");
  $("#startScreen").addClass("hide");
};

const backToStart = () => {
  $("#gameScreen").addClass("hide");
  $("#startScreen").removeClass("hide");
};

$("#btnStart").click(startGame);
$("#btnBackToStart").click(backToStart);

const moveItemsIn = () => {
  $('#title').css('margin-left', 0);
  $('#btnStart').css('margin-left', 0);
  $('#btnStartWrap').css('margin-left', 0);
  $('btnInsight').css('margin-left', 0 );
  $('#btnInsightWrap').css('margin-left', 0);
}

const intiate_game = () => {
  var stage = 0;
  if (stage === 0) {
    $('car').mouseover(init_car_1);
    const init_car_1 = (e) => {
      
    }
  }

}

$(document).ready(moveItemsIn);

$('car').mouseover(intiate_game);