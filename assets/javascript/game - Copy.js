 
 

    var wins = 0;
    var loss = 0;
    var turns = 12;
    var incorrectguesses = 0;
    var correctguesses = 0;
    
    

 
 function selectWord() { 
  // Array of player names.
  var playerNames = ["elway", "sharp", "davis", "atwater", "manning", "mccaffrey", "mecklenburg", "gradishar", "jackson", "little", "zimmerman", "tripucka", "miller"];
  var totalPlayerNames = playerNames.length;
  var playerNameIndex = Math.floor((Math.random() * 10) + 1) % totalPlayerNames;
  var playerName = playerNames[playerNameIndex];
  
  for(var i = 0; i < playerName.length; i++) {
    //if (playerName.charAt(i) != "_") { 
  var underscore = playerName.replace(/\D/g, " _ ");
  //};
  checkLetter(playerName);
};
  //document.getElementById("gameWord").innerHTML = playerName;
  document.getElementById("gameWord").innerHTML = underscore;
  
 };

 document.onkeyup = function (event) {
  var letter = event.key.toLowerCase();
  checkLetter(letter);
  //console.log(letter);
 };


 function checkLetter(playerName, letter){

  
    
    //var res = letter.test(playerName);

  //var n = value.search(value);
  console.log(n);
  
  
 };


 