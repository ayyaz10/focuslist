console.log("chrome extension go");

function injectButton() {
  var button = document.createElement("button");
  button.textContent = "Injected Button";
  button.id = "injectedButton";
  document.body.appendChild(button);
}

function removeButton() {
  var button = document.getElementById("injectedButton");
  if (button) {
    button.remove();
  }
}

function handleButtonVisibility(checked) {
  if (checked) {
    injectButton();
  } else {
    removeButton();
  }
}

chrome.storage.sync.get("showButtonState", function (data) {
  handleButtonVisibility(data.showButtonState || false);
});
chrome.runtime.onMessage.addListener(function (message) {
  console.log(message);
  if (message.showButton !== undefined) {
    handleButtonVisibility(message.showButton);
  }
});
