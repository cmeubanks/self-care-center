// User can add their own message
// Add an “Add Message” button in a logical spot.
//      Create button in HTML under where the messages are displaying

// When the user clicks “Add Message” a form will appear in the message box. The form should contain two inputs - one to specify which type of message is being added, and another to add the text of the message itself. The form should also contain a “Submit” button.
//      Create hidden form element in HTML -one with radio buttons to select message type (way to reuse  checkRadioBtn?)
//      other form input is for text and then below this is a submit button
//      make sure to add to changeView function

// If the user doesn’t specify the type of message, they should get an error and be unable to submit their message until the type is specified.
    //conditional within submit button event handler that throws error message
    //return that displays this message and ends function?
// When the user clicks the “Submit” button and that message will be added to the appropriate list of messages.
  //adds message to respectice array with .push and uses .value to get user input message and reassigns to class "display-message"

// When a new message is added, that message should automatically be displayed in the message box, instead of the meditation icon.
  //hides form and displays main page again with new message

// As you add these new elements to the page, be sure to match the style of existing elements.

// NOTE: None of this needs to persist on page refresh, unless you also complete the local storage feature
//research - different types of error message displays - ones builot into HTML?

/* global variables */
var savedMessages = [];
var currentMessage

/* html element selectors */
var imageView = document.querySelector('#image-view');
var messageView = document.querySelector('#message-view');
var displayMessage = document.querySelector('.display-message');

/* button selectors */
var radioBtn = document.querySelectorAll('input[name="radio"]');
var receiveBtn = document.querySelector('.receive-button');

/* event listeners */
receiveBtn.addEventListener('click', showMessage);

/*functions*/
function changeView(view1, view2) {
view1.classList.add('hidden');
view2.classList.remove('hidden');
};

function getRandomNumber(array) {
  return Math.floor(Math.random() * Math.floor(array.length));
};

function checkRadioBtn() {
  var checkedBtn
  for(var i = 0; i < radioBtn.length; i++){
    if(radioBtn[i].checked){
      checkedBtn = radioBtn[i].value
    }
  }
  return checkedBtn
};

function showMessage() {
  var button = checkRadioBtn();
  if(button === 'mantra'){
  currentMessage = new Message(mantras[getRandomNumber(mantras)])
  displayMessage.innerText = currentMessage.message;
  } else if(button === 'affirmation') {
    currentMessage = new Message(affirmations[getRandomNumber(affirmations)])
    displayMessage.innerText = currentMessage.message;
  } else {
    receiveBtn.disabled   //check to see if this actually works
    return alert('Select message type!')
  }
  changeView(imageView, messageView);
};
