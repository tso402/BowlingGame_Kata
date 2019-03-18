"use strict";

describe ("BowlingGame", function (){
  var game;

  beforeEach(function () {
    game = new BowlingGame;
  })

  it("should be able to create a new instance of BowlingGame", function(){
    game = new BowlingGame;
  });

  it('able to call the .roll() method', function() {
    game.roll(0);
  });


});