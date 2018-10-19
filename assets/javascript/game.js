 
 

    var wins = 0;
    var loss = 0;
    var turns = 12;
    var incorrectCount = 0;
    var correctCount = 0;
    var incorrectArray =[];
    var correctArray =[];
 
 //function selectWord() { 
  // Array of player names.
  var playerNames = ["elway", "sharp", "davis", "atwater", "manning", "mccaffrey", "mecklenburg", "gradishar", "jackson", "little", "zimmerman", "tripucka", "miller"];
  var totalPlayerNames = playerNames.length;
  var playerNameIndex = Math.floor((Math.random() * 10) + 1) % totalPlayerNames;
  var playerName = playerNames[playerNameIndex];
  
  for(var i = 0; i < playerName.length; i++) {
  var underscore = playerName.replace(/\D/g, " _ ");
};
  //document.getElementById("gameWord").innerHTML = playerName;
  document.getElementById("gameWord").innerHTML = underscore;
  
 //};

 document.onkeyup = function (event) {
  var letter = event.key.toLowerCase();
  checkLetter(letter);
 };

 function checkLetter(letter){

  //converts letter into a regular expression with the 'g' flag to find all letters
  //that are the same as the letter pressed by the user
  var re = new RegExp(letter, 'g');
  var res = playerName.match(re);
  
  //update array of incorrect letters
  if(res == null){
    incorrectArray.push(letter);
    incorrectCount = incorrectArray.length;
    document.getElementById("incorrectGuess").value = incorrectCount;
    console.log(incorrectCount);

  //update array of correct letters
}else{
  
  correctArray.push(letter);
  correctCount = correctArray.length;
  document.getElementById("correctGuess").value =  correctCount;
  //console.log(correctLetters);
};
  


 // console.log(res);
  //console.log(playerName);
  
  
 };


 