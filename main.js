
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

receiveBtn.addEventListener('click', showMessage);




/*functions*/
function changeView(view1, view2) {
view1.classList.add('hidden');
view2.classList.remove('hidden');
};

function getRandomNumber(array) {
  return Math.floor(Math.random() * Math.floor(max));
}

function checkRadioBtn() {
  var checkedBtn
  for(var i = 0; i < radioBtn.length; i++){
    if(radioBtn[i].checked){
      checkedBtn = radioBtn[i].value
    }
  }
  return checkedBtn
}

function showMessage() {
  changeView(imageView, messageView);
  var button = checkRadioBtn();
  debugger
  if(button === 'mantra'){
  currentMessage = new Message(mantras[1])
  savedMessages.push(currentMessage)
  displayMessage.innerText = currentMessage.message;
  } else if(button === 'affirmation') {
    currentMessage = new Message(affirmations[1])
    savedMessages.push(currentMessage)
    displayMessage.innerText = currentMessage.message;
  } else {
    window.alert('Select message type');
  }
}
