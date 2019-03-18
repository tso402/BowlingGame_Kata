function BowlingGame() {
  this.totalScore = 0
}

BowlingGame.prototype.roll = function (pins) {
  this.totalScore += pins
}

BowlingGame.prototype.score = function () {
  return this.totalScore
}