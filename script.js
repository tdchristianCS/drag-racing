const hideAllScreens = () => {
  $("#startScreen").addClass("hide");
  $("#gameScreen").addClass("hide");
  $("#ruleScreen").addClass("hide");
  $("#settingsScreen").addClass("hide");
}

const startGame = () => {
  hideAllScreens();
  $("#gameScreen").removeClass("hide");
};

const backToStart = () => {
  hideAllScreens();
  $("#startScreen").removeClass("hide");
};


const rulescreen = () => {
  hideAllScreens();
  $("#ruleScreen").removeClass("hide");
};

const settingsScreen = () => {
  hideAllScreens();
  $("#settingsScreen").removeClass("hide");
};

$("#btnsettings").click(settingsScreen);
$("#btnStart").click(startGame);
$("#btnInsight").click(rulescreen);
$("#btnBackToStart_1").click(backToStart);
$("#btnBackToStart_2").click(backToStart);
$("#btnBackToStart_3").click(backToStart);


const moveItemsIn = () => {
  $('#title').css('margin-left', 0);
  $('#btnStart').css('margin-left', 0);
  $('#btnStartWrap').css('margin-left', '-45px');
  $('#btnInsight').css('margin-left', 0);
  $('#btnInsightWrap').css('margin-left', '-20px');
  $('#btnsettings').css('margin-left', 0);
  $('#btnsettingsWrap').css('margin-left', '-15px');
  $('#drag-strip').css('margin-right', '-210px');
}

$(document).ready(moveItemsIn);



const intiate_game = () => {
  var stage = 0;
  if (stage === 0) {
    $('car').mouseover(init_car_1);
    const init_car_1 = (e) => {
    
    }
  }

}

$('car').mouseover(intiate_game);