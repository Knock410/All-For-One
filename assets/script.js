window.alert("You're good and going to be greater.");
var playerName = window.prompt("What is your name fighter");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Draco";
var enemyHealth = 30;
var enemyAttack = 200;

var fight = function() {
  window.alert("The fight has begun!");

  window.alert(
    "This is a league where  everyone is for only one. Themselves. Through combating various opponents at once the winner will win it all. " +
      playerName +
      " it's time to engage and rise to the top!");

      //Subtract the value of the playerattack from the value of the enemyhealth and use that result to update the enemyhealth
    enemyHealth = enemyHealth - playerAttack
    
      //log a message in the console to show it worked
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining !");
      //subtact the value of the enemyattack fromt he valued of the playerhealth and use the result to update the playerhealth 
      playerHealth = playerHealth- enemyAttack
      //log a resulting message to show it worked in the console 
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " has " + playerHealth + " health remaining !")

      //Check the fighters health
      if (playerHealth <= 0) {
        console.log("You were knocked out, better luck next time!")
      }
      else {console.log("That wasn't enough to take " + playerName + " out the battle !!!")}

    };
  
     
  
 

 fight();
