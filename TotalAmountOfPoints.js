// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    // loop the games
    //  each game is str; split on ':'
    //    compare game[0] to game[1], pt accordingly
    
    
    let total = 0;
    
    for (let game of games) {
      let us = game.split(':')[0]
      let them = game.split(':')[1]
      if (us > them) {
        total += 3
      } else if (us === them) {
        total += 1
      }
    }
    
    return total
  }