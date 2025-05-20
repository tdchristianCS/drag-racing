const car1srcDefault = "https://g.tdchristian.ca/drag-racing/assets/cybertruck_top.png";
const car1srcOnclick = "";

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
