 var wins = 0;
 var loss = 0;
 var turns = 10;

 var incorrectCount = 0;
 var correctCount = 0;
 var incorrectArray = [];
 var correctArray = [];
 var currentWordIndex;
 var gameWord = [];

 // Array of player names.
 var playerNames = ["elway", "sharp", "davis", "atwater", "manning", "mccaffrey", "mecklenburg", "gradishar", "jackson", "little", "zimmerman", "tripucka", "miller"];
 var totalPlayerNames = playerNames.length;
 var playerNameIndex = Math.floor((Math.random() * 10) + 1) % totalPlayerNames;
 var playerName = playerNames[playerNameIndex];

 for (var i = 0; i < playerNames[playerNameIndex].length; i++) {
   gameWord.push(" _ ");
 };

 document.getElementById("gameWord").innerText = "";
 for (var i = 0; i < gameWord.length; i++) {
   document.getElementById("gameWord").innerText += gameWord[i];
 };

 document.onkeyup = function (event) {
   if (event.which <= 90 && event.which >= 65) { //checks to see if key is a letter.
     var letter = event.key.toLowerCase();
     checkLetter(letter);
     turnsRemaining = (turns) - (correctCount + incorrectCount);
     document.getElementById("lblTurnsRemain").innerHTML = turnsRemaining;
     if (turnsRemaining == 0) {
       loss++;
       document.getElementById("status").innerHTML = "Sorry you lose."
       document.getElementById("lblLoses").innerHTML = loss;
     };

   };
 };

 function checkLetter(letter) {
   //converts letter to a regular expression. Use the 'g' flag to find all letters that match
   //the same letter pressed by the user
   var re = new RegExp(letter, 'g');
   var res = playerName.match(re);
   //console.log(res);
   //update array of incorrect letters
   if (res == null) {
     if (incorrectArray.includes(letter)) { //Check to see if letter already exist in array. If not add to array

     } else {
       incorrectArray.push(letter);
       incorrectCount = incorrectArray.length;
       document.getElementById("incorrectGuess").innerHTML = incorrectCount;
       //adds letters from the incorrectArray to lblIncorrectLetter using .join method
       document.getElementById("lblIncorrectLetter").innerHTML = incorrectArray.join("  ");
       if (incorrectCount > turns) {

       };
     };
     //update array of correct letters
   } else {
     if (correctArray.includes(letter)) { //Check to see if letter already exist in array. If not add to array

     } else {
       // Array to store positions of letters in string
       var positions = [];

       // Loop through word finding all instances of guessed letter, store the indicies in an array.
       for (var i = 0; i < playerNames[playerNameIndex].length; i++) {
         if (playerNames[playerNameIndex][i] === letter) {
           positions.push(i);
           //console.log(positions);
         };
       };
       // Loop through all the indicies and replace the '_' with a letter.
       for (var i = 0; i < positions.length; i++) {
         gameWord[positions[i]] = letter;
         document.getElementById("gameWord").innerText = gameWord.join("");

       };

       correctArray.push(letter);
       correctCount = correctArray.length;
       document.getElementById("correctGuess").innerHTML = correctCount;
       checkWin();
       console.log(gameWord);
     }
   };
 };

 function checkWin() {
   if (gameWord.indexOf(" _ ") === -1) {
     document.getElementById("status").innerHTML = "TOUCHDOWN!! You win!"
     wins++;
     document.getElementById("lblWins").innerHTML = wins;
   };
 };