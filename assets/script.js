//Global Scopes
window.alert("You're good and going to be greater.");
// var playerName = window.prompt("What is your name fighter ?");

var playerInfo = {
  name: window.prompt("What is your name ?"),
  health: 100,
  attack: 25,
  money: 20,
};

var enemyNames = ["Draco", "Hanami", "Lance"];

// window.alert("Welcome to Random Encounter!!!!!");

window.alert(
  "This is a league where  everyone is for only one. Themselves. Through combating various opponents at once the winner will win it all. " +
    playerInfo.name +
    " it's time to engage and rise to the top!"
);

//Function
var fight = function (enemyName) {
  while (playerInfo.health > 0 && enemyHealth > 0) {
    //Asking the player if they would like to start a combat round
    var promptFight = window.prompt(
      "Are you ready for combat " + playerInfo.name + " ?  Enter 'FIGHT' or 'SKIP'"
    );

    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm(" Are you sure you want to withdraw? ");

      if (confirmSkip) {
        window.alert(
          " Not Ready? A withdrawal fee will be charged to you're account. Come back when you're ready to to rumble."
        );
        var fee = 10;

        playerInfo.money = Math.max(0, playerInfo.money- fee);
        window.alert(
          playerInfo.name +
            " paid a " +
            fee +
            " dollar withrawal fee. " +
            playerInfo.name +
            " has " +
            playerInfo.money +
            " dollars left."
        );
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }
    //Player Attack:Subtract the value of the playerattack from the value of the enemyhealth and use that result to update the enemyhealth
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemyHealth = Math.max(0, enemyHealth - damage);

    //Check enemy health
    console.log(
      playerInfo.name   +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " has " +
        enemyHealth +
        " health remaining !"
    );
    // Check enemy status
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has fallen !");
      break;
    } else {
      window.alert(
        "Even with that devastating attack " +
          enemyName +
          " is still standing !"
      );
    }
    //Enemy Attack:subtact the value of the enemyattack fromt he valued of the playerInfo.health and use the result to update the playerInfo.health
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    //Check Player Health
    console.log(
      enemyName +
        " attacked " +
        playerInfo.name   +
        ". " +
        playerInfo.name   +
        " has " +
        playerInfo.health +
        " health remaining !"
    );

    //Check player status
    if (playerInfo.health > 0) {
      {
        window.alert(
          "That wasn't enough to take " + playerInfo.name + " out the battle !!!"
        );
      }
    }
  }
};

//Start Game function
var startGame = function () {
  // debugger;
  playerInfo.health = 150;
  playerInfo.attack = 25;
  playerInfo.money = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    //Allows the loop to intergrate different combatants for the use to fight and start with full health of 50 points
    if (playerInfo.health > 0) {
      //Allows to show what round it is after each defeat of the enemy
      window.alert("Welcome to Random Encounter! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      enemyAttack = Math.floor(Math.random() * 11) + 40;
      console.log("Enemy power is " + enemyAttack);
      console.log("Enemy health is " + enemyHealth);
      //Function call. This is essentially the start button of the function
      fight(pickedEnemyName);
      //If an array has 10 items in length(0,1,2,3,4,5,6,7,8,9) minus 1 of the array will always be the final item of the array
      if (playerInfo.health > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round ?"
        );
        //Asking user to visit the shop
        if (storeConfirm) {
          shop();
        }
      }
    }
  }
  // endGame function
  endGame();
};
//This function will execute when the player defeats all enemies or is defeated
var endGame = function () {
  if (playerInfo.health > 0) {
    window.alert(" The game has ended. Check out your stats!");
    window.alert(playerInfo.name+ " has " + playerInfo.money + " coins left .");
  } else {
    window.alert(" You lost !");
  }
  var playAgainConfirm = window.confirm(" Want to brawl again ? ");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert(" Okay. Come back when you're ready to fight again ");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to Refill your health, upgrade your power or leave the store? Chose to one: 'Refill', 'Upgrade', or 'Leave' "
  );

  switch (shopOptionPrompt) {
    case "refill":
    case "Refill":
      if (playerInfo.money >= 7) {
        window.alert("Refilling playr's health by 20 for 7 coins.");

        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
      } else {
        window.alert("You don't have enough coins!");
      }

      break;
    case "upgrade":
    case "Upgrade":
      if (playerInfo.money >= 7) {
        window.alert("Upgrading player attack by 10 for 7 coins");
        playerInfo.attack = playerInfo.attack + 10;
        playerInfo.money = playerInfo.money - 7;
      } else window.alert(" You don't have enough coins!");
      break;
    case "leave":
    case "Leave":
      window.alert("You left the shop");
      break;
    default:
      window.alert("Pick a valid option");
      //calls the shop function again
      shop();
      break;
  }
};
//Break down of parentheses (min, max)  min is the lower limit while max is the upper limit of the range of possible numbers
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  //This will generate the value of the function
  return value;
};

//Start button to the game
// debugger
startGame();
