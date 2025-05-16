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
  $('#btnStartWrap').css('margin-left', '-15px');
  $('btnInsight').css('margin-left', 0);
  $('#btnInsightWrap').css('margin-left', '-15px');
  $('btnsettings').css('margin-left', 0);
  $('#btnsettingsWrap').css('margin-left', '-15px');
  $('#drag-strip').css('margin-right', '-210px');
}

$(document).ready(moveItemsIn);

const rulescreen = () => {
  $("ruleScreen").removeClass("hide");
  $("#startScreen").addClass("hide");
};

const backtoStart = () => {
  $("#rulecreen").addClass("hide");
  $("#startScreen").removeClass("hide");
};

$("#btnInsight").click(startGame);
$("#btnBackToStart").click(backToStart);

const intiate_game = () => {
  var stage = 0;
  if (stage === 0) {
    $('car').mouseover(init_car_1);
    const init_car_1 = (e) => {
    
    }
  }

}

$('car').mouseover(intiate_game);