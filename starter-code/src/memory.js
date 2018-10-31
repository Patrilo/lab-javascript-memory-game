var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};



MemoryGame.prototype.shuffleCards = function () {
  

    var m = this.cards.length, t, i;
       while (m) {
         i = Math.floor(Math.random() * m--);
         t = this.cards[m];
         this.cards[m] = this.cards[i];
         this.cards[i] = t;
       };
   
   };
  
 


MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  if (firstCard !== secondCard) {
    this.pairsClicked++;
    return false;
  } else if (firstCard === secondCard) {
    this.pairsGuessed++;
  }
  return true;
};

MemoryGame.prototype.isFinished = function() {
 if (this.pairsGuessed === (this.cards.length) / 2) return true ;

 
    return false;
  
 
};


$(document).ready(function(){



});

$('.back').click(function(){

  
});
