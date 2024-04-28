console.log("chrome extension go");

// let p = document.getElementsByTagName("p");
// for (elt of p) {
//   elt.style["background-color"] = "green";
// }

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(request, sender, sendResponse) {
//   console.log(request);
// }

// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {

//   console.log(response.farewell);
// });
// content.js

// content.js
// content.js

// Function to inject the button into the webpage
function injectButton() {
  var button = document.createElement("button");
  button.textContent = "Injected Button";
  button.id = "injectedButton"; // Add an id to the button for easy identification
  document.body.appendChild(button);
}

// Function to remove the injected button from the webpage
function removeButton() {
  var button = document.getElementById("injectedButton");
  if (button) {
    button.remove();
  }
}

// Function to handle changes in button visibility based on the checkbox state
function handleButtonVisibility(checked) {
  if (checked) {
    injectButton();
  } else {
    removeButton();
  }
}

// Retrieve the checkbox state from Chrome storage
chrome.storage.sync.get("showButtonState", function (data) {
  handleButtonVisibility(data.showButtonState || false);
});

// Listen for messages from the popup.html or other parts of the extension
chrome.runtime.onMessage.addListener(function (message) {
  if (message.showButton !== undefined) {
    // If message indicates to show or hide the button, update the button visibility
    handleButtonVisibility(message.showButton);
  }
});
