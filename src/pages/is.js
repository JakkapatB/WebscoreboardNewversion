export function plus(count) {
  count += 2;
  return count;
}

export function minus(count) {
  return count -= 2;

}

export class GameScore {

   static haveWinner = false;
   static setPoint = 21; // default is badminton
  static numOfSetToWin = 2;

   static sport_name  = 'Badminton';

  // const car: { type: string, model: string, year: } = {
  //   type: "Toyota",
  //   model: "Corolla",
  //   year: 2009
  // };
  static setPointByTypeOfSport = {
    'Badminton': 21,
    'Table tennis': 11,
    'Volleyball': 25,
    'Sepak takraw': 21
  }

  static numOfSetToWinByTypeOfSport = {
    'Badminton': 2,
    'Table tennis': 3,
    'Volleyball': 3,
    'Sepak takraw': 2
  }


   static totalScore;

   score = 0;
   winSet = 0;

   teamName = '';



  constructor(teamName) {
    this.setTeamName(teamName);
    this.score = 0;
    this.winSet = 0;
  }



  getScore() {
    return this.score;
  }

  setScore(score) {
    this.score = score;
  }

  getTeamName() {
    return this.teamName;
  }

  setTeamName(teamName) {
    this.teamName = teamName;
  }



  static getHaveWinner() {
    return GameScore.haveWinner;
  }

  static setHaveWinner(haveWinner) {
    GameScore.haveWinner = haveWinner;
  }

  static getSetPoint() {
    return GameScore.setPoint;
  }

  static setSetPoint(setPoint) {
    GameScore.setPoint = setPoint;
  }


  static getNumOfSetToWin() {
    return GameScore.numOfSetToWin;
  }

  static setNumOfSetToWin(numOfSetToWin) {
    GameScore.numOfSetToWin = numOfSetToWin;
  }

  static setSportName(sportName) {
    GameScore.sport_name = sportName;
  }

  static getSportName() {
    return GameScore.sport_name;
  }

  addScore() {
    if (this.score < GameScore.setPoint) {
      this.score += 1;
    }
    // else if (GameScore.#setPoint == this.getScore()) {
    //   this.addSet();
    // }
    // this.#score += 1;
  }

  subtractScore() {
    if (this.score > 0) {
      this.score -= 1;
    }
  }

  addSet() {
    if (this.winSet < GameScore.numOfSetToWin) {

      this.winSet += 1;
    }
  
  }

  getWinSet() {
    return this.winSet;
  }

  setWinSet(winSet) {
    this.winSet = winSet;
  }

  // static updateScoreAndSet(team) {
  //   document.getElementById().innerText = getScore();
  //   document.getElementById('score-b').innerHTML = getScore();
  // }

  static selectSportAndSetPointToWin(typeOfSport) {
    GameScore.setSetPoint(Object(GameScore.setPointByTypeOfSport)[typeOfSport]);
    GameScore.setNumOfSetToWin(Object(GameScore.numOfSetToWinByTypeOfSport)[typeOfSport]);
    console.log("Num of set to win" + GameScore.getNumOfSetToWin());

  }

  static checkWinner(player1, player2) {
    console.log(player1.getWinSet());
    if (player1.getWinSet() == GameScore.numOfSetToWin) {
      // timePaused();
      GameScore.haveWinner = true;
      // // player1.addSet();
      // // GameScore.updateSet(player1 ,player2);
      console.log("p1 win");
      // // document.getElementById("sport-type").innerHTML = "The winner is Team A";
      // document.getElementById("sport-type").innerHTML = `The winner is ${teamA.getTeamName()}`;
      // // console.log(document.getElementById("result"));
      // console.log("p----1 win");
      // modal.style.display = "block";
      // // document.getElementsByClassName("modal-content")[0].innerHTML = "The winner is Team A";
      // // document.getElementById("winnerTeamText").innerHTML = "The winner is Team A";
      // document.getElementById("winnerTeamText").innerHTML = `The winner is ${teamA.getTeamName()}`;


    } else if (player2.getWinSet() == GameScore.numOfSetToWin) {
      // timePaused();
      GameScore.haveWinner = true;
      // // player2.addSet();
      // // GameScore.updateSet(player1 ,player2);
      console.log("p2 win");
      // // document.getElementById("sport-type").innerHTML = "The winner is Team B";
      // document.getElementById("sport-type").innerHTML = `The winner is ${teamB.getTeamName()}`;
      // modal.style.display = "block";
      // // document.getElementById("winnerTeamText").innerHTML = "The winner is Team B";
      // document.getElementById("winnerTeamText").innerHTML = `The winner is ${teamB.getTeamName()}`;
    }
  }

  static checkForUpdateSet(player1, player2) {

    if (player1.getScore() == GameScore.setPoint) {
      player1.addSet();
      GameScore.updateSet(player1, player2);

    } else if (player2.getScore() == GameScore.setPoint) {
      player2.addSet();
      GameScore.updateSet(player1, player2);
    }

    GameScore.checkWinner(player1, player2);
  }

  static updateSet(player1, player2) {

    player1.setScore(0);
    player2.setScore(0);
    // document.getElementById('score-a').innerHTML = player1.getScore();
    // document.getElementById('score-b').innerHTML = player2.getScore();

    GameScore.updateScore(player1, player2);

    // *****
    // document.getElementById('set-a').innerHTML = player1.getWinSet();
    // document.getElementById('set-b').innerHTML = player2.getWinSet();

  }


  static updateScore(player1, player2) {
    // document.getElementById('score-a').innerHTML = player1.getScore();
    // document.getElementById('score-b').innerHTML = player2.getScore();
    if (!GameScore.haveWinner) {
      GameScore.checkForUpdateSet(player1, player2);
    }
    let returnData = [player1.getScore(), player2.getScore(), player1.getWinSet(), player2.getWinSet()]
    console.log(returnData);
    
    return returnData;
  }

  static resetScoreAndSet(player1, player2) {
    GameScore.haveWinner = false;
    player1.setWinSet(0);
    player2.setWinSet(0);
    GameScore.updateSet(player1, player2);
    // // displayRadioValue();
    // let ele = document.getElementsByName('type-sport');
    // for (let i = 0; i < ele.length; i++) {
    //   if (ele[i].checked) {
    //     console.log(ele[i].value);
    //     document.getElementById("sport-type").innerHTML = ele[i].value;

    //   }
    // }

  }

  // static setInformationInScreen(player1, player2) {

  //   // document.getElementsByClassName("team-name")[0].innerText = player1.getTeamName();
  //   // document.getElementsByClassName("team-name")[1].innerText = player2.getTeamName();
  //   // document.getElementById('score-a').innerHTML = player1.getScore();
  //   // document.getElementById('score-b').innerHTML = player2.getScore();
  //   // document.getElementById('set-a').innerHTML = player1.getWinSet();
  //   // document.getElementById('set-b').innerHTML = player2.getWinSet();
  //   // document.getElementById("sport-type").innerHTML = GameScore.getSportName();
  // }


}

export class ScorePlayer1 extends GameScore {
  constructor(teamName) {
    // this.setTeamName(teamName);
    super(teamName);
  }

}

export class ScorePlayer2 extends GameScore {
  constructor(teamName) {
    // this.setTeamName(teamName);
    super(teamName);
  }
}








// const teamA: ScorePlayer1 = new ScorePlayer1("Team A");
// const teamB: ScorePlayer2 = new ScorePlayer2("Team B");
let milli_second;

// setDefaultVariables();


// console.log(teamA);

// function updateScoreAndSet() {
//   document.getElementById('score-a').innerHTML = teamA.getScore();
//   document.getElementById('score-b').innerHTML = teamB.getScore();
// }

// var IDs = new Array();
//         images['s'] = "Images/Block_01.png";
//         images['g'] = "Images/Block_02.png";
//         images['C'] = "Images/Block_03.png";
//         images['d'] = "Images/Block_04.png";

// https://stackoverflow.com/questions/14266730/js-how-to-cache-a-variable


function setDefaultVariables() {
  var stored = localStorage.getItem('scoreKey');
  let dataFromCache;
  if (stored) {
    dataFromCache = JSON.parse(stored);

    teamA.setTeamName(dataFromCache['team_a']);
    teamA.setScore(dataFromCache['score_a']);
    teamA.setWinSet(dataFromCache['set_a']);

    teamB.setTeamName(dataFromCache['team_b']);
    teamB.setScore(dataFromCache['score_b']);
    teamB.setWinSet(dataFromCache['set_b']);

    GameScore.setSportName(dataFromCache['sport']);
    GameScore.setSetPoint(dataFromCache['set_point']);
    GameScore.setNumOfSetToWin(dataFromCache['num_of_set_to_win']);
    GameScore.setHaveWinner(dataFromCache['have_winner']);
    milli_second = dataFromCache['milli_second'];

    // document.querySelector(`input[value=${dataFromCache['sport']}]`); 
    // console.log(document.querySelector(`input[value=${dataFromCache['sport']}]`));
    console.log(dataFromCache['sport']);

    // GameScore.setInformationInScreen(teamA, teamB);

    let ele = document.getElementsByName('type-sport');

    // for (let i = 0; i < ele.length; i++) {
    //   if (Object(ele[i]).value == dataFromCache['sport']) {
    //     // https://bobbyhadz.com/blog/javascript-set-radio-to-checked-unchecked#:~:text=To%20set%20a%20radio%20button,same%20name%20attribute%20become%20unchecked.
    //     ele[i].checked = true;
    //     GameScore.selectSportAndSetPointToWin(ele[i].value);
    //     document.getElementById("result").innerHTML
    //       = "Type of sport: " + ele[i].value + ", Set point: " + GameScore.getSetPoint();
    //     document.getElementById("sport-type").innerHTML = ele[i].value;
    //     backUpVariables();
    //   }
    // }
  }
  else {
    dataFromCache = "not have";
    milli_second = 0;
  }


}

// setDefaultVariables();

function getDataArray() {
  // array in js can have multiple type 
  const returnArray = [teamA.getTeamName(), teamA.getScore(), teamA.getWinSet(), teamB.getTeamName(), teamB.getScore(), teamB.getWinSet(), GameScore.getSportName(), GameScore.getSetPoint(), GameScore.getNumOfSetToWin(), GameScore.getHaveWinner()];
  // console.log(returnArray);
  // console.log(returnArray[0]);
  return returnArray;
}

function backUpVariables() {
  const dataArray = getDataArray();
  let backUpData = {};
  Object(backUpData)['team_a'] = dataArray[0]
  Object(backUpData)['score_a'] = dataArray[1];
  Object(backUpData)['set_a'] = dataArray[2];
  Object(backUpData)['team_b'] = dataArray[3];
  Object(backUpData)['score_b'] = dataArray[4];
  Object(backUpData)['set_b'] = dataArray[5];
  Object(backUpData)['sport'] = dataArray[6];
  Object(backUpData)['set_point'] = dataArray[7];
  Object(backUpData)['num_of_set_to_win'] = dataArray[8];
  Object(backUpData)['have_winner'] = dataArray[9];
  Object(backUpData)['milli_second'] = milli_second;
  console.log(milli_second);
  localStorage['scoreKey'] = JSON.stringify(backUpData);
  console.log(backUpData);
}



