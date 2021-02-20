// Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature
// When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
// When the message appears, the mediation icon disappears from the message area

//Iteration 1: After the user selects a radio button (affirmation or Mantra) and then clicks receive message button, they will see a RANDOM message appear where the meditate icon was (image disappears)
//The set-up:
//create varaibles to querySelect radio buttons, submit buttons, and new HTML message area
//global vartiable of current message
//global empty array (for class instances of message)
//Functionality:
//function that creates a random number (to be used for array index);

//hides image
//set up conditional: if meditate button has been clicked then instance of message class = this
//                    else, class instance is this
//current message gets pushed to global array and then also replaces .innerText of dom node

//research: how to querySelect radio buttons (can I use querySelect All and a loop to see which value has been selected)
//what properties does my message class need?

var radioBtn = document.querySelectorAll('input[name="radio"]');
var receiveBtn = document.querySelector('.receive-button');

receiveBtn.addEventListener('click', displayMessage);




/*functions*/
function changeView(){

}

function displayMessage() {
  var checkedBtn
  for(var i = 0; i < radioBtn.length; i++){
    if(radioBtn[i].checked){
      checkedBtn = radioBtn[i].value
    }
  }
  return checkedBtn
}
