"use strict";

describe ("BowlingGame", function (){
  var game;
  var i;

  beforeEach(function () {
    game = new BowlingGame;
  })

  it('able to call the .score() method and return a score', function(){
    game = new BowlingGame;
    game.roll(0);
    expect(game.score()).toEqual(0);
  });

  it('able to return the total score from a number of rolls', function(){
    for (i = 0 ; i < 20 ; i++)
      game.roll(1);
      expect(game.score()).toEqual(20);
  })
});