function boredom(staff){
  let deptCounts = Object.values(staff)

  let boredomScore = 0
  
  deptCounts.forEach(function(element) {
     switch(element) {
      case "accounts":
        boredomScore += 1
        break;
      case "finance":
        boredomScore += 2
        break;
      case "canteen":
        boredomScore += 10
        break;
      case "regulation":
        boredomScore += 3
        break;
      case "trading":
        boredomScore += 6
        break;
      case "change":
        boredomScore += 6
        break;
      case "IS":
        boredomScore += 8
        break;
      case "retail":
        boredomScore += 5
        break;
      case "cleaning":
        boredomScore += 4
        break;
      case "pissing about":
        boredomScore += 25
        break;
      default:
        break;
    }      
  })

    if (boredomScore <= 80) {
      return "kill me now"
    }
    else if (boredomScore < 100 && boredomScore > 80) {
      return "i can handle this"
    }
    else return "party time!!"
}