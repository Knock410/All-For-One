window.alert("You're good and going to be greater.");
var playerName = window.prompt("What is your name fighter");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Draco";
var enemyHealth = 30;
var enemyAttack = 20;

var fight = function () {
  window.alert("Welcome to Random Encounter!!!!!");

  window.alert(
    "This is a league where  everyone is for only one. Themselves. Through combating various opponents at once the winner will win it all. " +
      playerName +
      " it's time to engage and rise to the top!"
  );

  //Asking the player if they would like to start a combat round
  var promptFight = window.prompt(
    "Are you ready for combat " + playerName + " ?  Enter 'FIGHT' or 'SKIP'"
  );
  console.log(promptFight);

  if (promptFight === "fight" || promptFight === " FIGHT ") {
    //Player Attack:Subtract the value of the playerattack from the value of the enemyhealth and use that result to update the enemyhealth
    enemyHealth = enemyHealth - playerAttack;

    //Check enemy health
    window.alert(
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
      window.alert(enemyHealth + " has fallen !");
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
    window.alert(
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
    if (playerHealth <= 0) {
      window.alert("You were knocked out, better luck next time!");
    } else {
      window.alert(
        "That wasn't enough to take " + playerName + " out the battle !!!"
      );
    }
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm(" Are you sure you want to withdraw? ");

    if (confirmSkip) {
      window.alert(
        " Not Ready? A withdrawal fee will be charged to you're account. Come back when you're ready to to rumble."
      );
      var fee = 2;

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
    } else {
      window.alert(" Are you fighting or not ???");
      fight();
    }
  } else {
    window.alert(" Please choose to proceed into the fray or to back out!!!");
  }
};

fight();
