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