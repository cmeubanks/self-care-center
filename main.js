// Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature
// When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
// When the message appears, the mediation icon disappears from the message area

//Iteration 1: After the user selects a radio button (affirmation or Mantra) and then clicks receive message button, they will see a message appear where the meditate icon was (image disappears)
//The set-up: create arrays for both the affirmation and mantra which store respective message (in new file)
//create hidden html section where message will appear
//create varaibles to querySelect radio buttons, submit buttons, and new HTML message area
//golbal vartiable of current message
//global empty array (for class instances of message)
//Functionality:
//event listener of click & function to see what buttons have been selected
//function loops through radio buttons to see the value of what has been selected
//hides image
//set up conditional: if meditate button has been clicked then instance of message class = this
//                    else, class instance is this
//current message gets pushed to global array and then also replaces .innerText of dom node



//research: how to querySelect radio buttons (can I use querySelect All and a loop to see which value has been selected)
//what properties does my message class need?
