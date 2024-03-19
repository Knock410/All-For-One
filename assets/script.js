//Global Scopes 
window.alert("You're good and going to be greater.");
var playerName = window.prompt("What is your name fighter ?");

var enemyNames = ["Draco", "Hanami", "Lance"];


// window.alert("Welcome to Random Encounter!!!!!");

window.alert(
  "This is a league where  everyone is for only one. Themselves. Through combating various opponents at once the winner will win it all. " +
    playerName +
    " it's time to engage and rise to the top!"
);




//Function 
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

        playerMoney = Math.max(0,playerMoney - fee);
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
  
      }
    }
    //Player Attack:Subtract the value of the playerattack from the value of the enemyhealth and use that result to update the enemyhealth
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0,enemyHealth - damage);

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
    var damage = randomNumber(enemyAttack-3, enemyAttack)
    playerHealth = Math.max( 0, playerHealth - damage);
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
playerHealth = 150;
playerAttack = 25;
playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        
      //Allows the loop to intergrate different combatants for the use to fight and start with full health of 50 points
      if (playerHealth > 0) {
        //Allows to show what round it is after each defeat of the enemy
        window.alert("Welcome to Random Encounter! Round " + (i + 1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth =  randomNumber(40,60);
        enemyAttack = Math.floor(Math.random()*11) + 40 
        console.log("Enemy power is " + enemyAttack);
        console.log("Enemy health is " + enemyHealth)
        ;
        //Function call. This is essentially the start button of the function
        fight(pickedEnemyName);
        //If an array has 10 items in length(0,1,2,3,4,5,6,7,8,9) minus 1 of the array will always be the final item of the array
        if(playerHealth> 0 && i < enemyNames.length -1 ) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round ?");
            //Asking user to visit the shop 
            if(storeConfirm){
        
          shop();
        };
          }
        }
        }
    // endGame function 
 endGame();
      
    
      }
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

  
  };

  var shop = function(){
   var shopOptionPrompt = window.prompt( "Would you like to Refill your health, upgrade your power or leave the store? Chose to one: 'Refill', 'Upgrade', or 'Leave' ");
    
  
     

  
switch (shopOptionPrompt) {
  case "refill":
  case "Refill":
    if(playerMoney >= 7){
      window.alert("Refilling playr's health by 20 for 7 coins.")
  
   
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
  }else{
    window.alert("You don't have enough coins!");
  }

    break;
  case "upgrade":
  case "Upgrade":
    if(playerMoney >= 7){
      
    window.alert("Upgrading player attack by 10 for 7 coins");
  playerAttack = playerAttack + 10;
  playerMoney = playerMoney - 7;
    }else
    window.alert(" You don't have enough coins!"); 
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
var randomNumber =function(min,max){
  var value = Math.floor(Math.random()* (max-min+ 1)+ min) ;
  //This will generate the value of the function 
  return value;
  

};
  

    
//Start button to the game 
  // debugger 
startGame(); 

    