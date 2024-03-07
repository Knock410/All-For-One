window.alert("You're good and going to be greater.");
var playerName = window.prompt("What is your name fighter ?");
var playerHealth = 100;
var playerAttack = 70;
var playerMoney = 10;

var enemyNames = ["Draco", "Hanami", "Lance"];

var enemyHealth = 50;
var enemyAttack = 12;

// window.alert("Welcome to Random Encounter!!!!!");

window.alert(
  "This is a league where  everyone is for only one. Themselves. Through combating various opponents at once the winner will win it all. " +
    playerName +
    " it's time to engage and rise to the top!"
);

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //Asking the player if they would like to start a combat round
    var promptFight = window.prompt(
      "Are you ready for combat " + playerName + " ?  Enter 'FIGHT' or 'SKIP'"
    );

    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm(" Are you sure you want to withdraw? ");

      if (confirmSkip) {
        window.alert(
          " Not Ready? A withdrawal fee will be charged to you're account. Come back when you're ready to to rumble."
        );
        var fee = 10;

        playerMoney = playerMoney - fee;
        window.alert(
          playerName +
            " paid a " +
            fee +
            " dollar withrawal fee. " +
            playerName +
            " has " +
            playerMoney +
            " dollars left."
        );
        console.log("playerMoney", playerMoney);
        break;
        //   } else {
        //     window.alert(" Are you fighting or not ???");
        //     fight();
        //   }
        // } else {
        //   window.alert(" Please choose to proceed into the fray or to back out!!!");
        // }
      }
    }
    //Player Attack:Subtract the value of the playerattack from the value of the enemyhealth and use that result to update the enemyhealth
    enemyHealth = enemyHealth - playerAttack;

    //Check enemy health
    console.log(
      playerName +
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
    //Enemy Attack:subtact the value of the enemyattack fromt he valued of the playerhealth and use the result to update the playerhealth
    playerHealth = playerHealth - enemyAttack;
    //Check Player Health
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " has " +
        playerHealth +
        " health remaining !"
    );

    //Check player status
    if (playerHealth > 0) {
      {
        window.alert(
          "That wasn't enough to take " + playerName + " out the battle !!!"
        );
      }
    }
  }
};
//Start Game function 
  var startGame = function () {     
// debugger;
playerHealth = 100;
playerAttack = 100;
playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        
      //Allows the loop to intergrate different combatants for the use to fight and start with full health of 50 points
      if (playerHealth > 0) {
        //Allows to show what round it is after each defeat of the enemy
        window.alert("Welcome to Random Encounter! Round " + (i + 1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        //Function call. This is essentially the start button of the function
        fight(pickedEnemyName);
      } else {
        window.alert("You have been knocked out ! Better luck next time ! ");
        break;
      }
    }
    
    // startGame(); 
    endGame();
  };
//This function will execute when the player defeats all enemies or is defeated 
  var endGame = function(){
    if (playerHealth > 0){
    window.alert(" The game has ended. Check out your stats!");
    window.alert(playerName + " has " + playerMoney + " coins left .");
    
  } else {
    window.alert(" You lost !")
  }
  var playAgainConfirm = window.confirm(" Want to brawl again ? ");

  if(playAgainConfirm){
    startGame();
    
  }
  else{
    window.alert(" Okay. Come back when you're ready to fight again ");
  };

  }


startGame(); 

// endGame();