
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
var mainPage = document.querySelector('.main-page');
var formPage = document.querySelector('.form-page');

/* button selectors */
var radioBtn = document.querySelectorAll('input[name="radio"]');
var receiveBtn = document.querySelector('.receive-button');
var addMessageBtn = document.querySelector('.add-message');

/* event listeners */
receiveBtn.addEventListener('click', showMessage);
addMessageBtn.addEventListener('click', createMessage);

/*functions*/
function changeView(view1, view2, view3) {
view1.classList.add('hidden');
view2.classList.remove('hidden');
view3.classList.add('hidden');
view4.classList.add('hidden');
}

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

function createMessage() {
  changeView(mainPage, formPage, messageView);
}
