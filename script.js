// const hideAllScreens = () => {
const car1srcDefault = `https://g.tdchristian.ca/drag-racing/assets/${e.target.id}_top.png`;


const hideAllScreens = () => {
  $("#gameScreen").addClass("hide");
  $("#ruleScreen").addClass("hide");
  $("#startScreen").addClass("hide");
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



const intiate_game = (e) => {
  var stage = 0;
  if (stage === 0) {
    var car1id = `${e.target.id}_top`;
    var car1el = `<img id="${car1id}" class="leftDisplay" src="${car1srcDefault}">`;
    console.log(car1id);

    $('#racearea').append(car1el);
    console.log(car1.id);
    console.log(classNames);
    }
  }



$('.car').click(intiate_game);
