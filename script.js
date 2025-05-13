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

const moveTitleIn = () => {
  $('#title').css('margin-left', 0);
}

$(document).ready(moveTitleIn);

const movestartin = () => {
  $('#btnStart').css('margin-left', 0);
}

$(document).ready(movestartin)