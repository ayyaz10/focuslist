console.log("chrome extension go");

function createCustomElement(element) {
  return document.createElement(element);
}

function injectButton() {
  let div = document.createElement("div");
  div.classList.add("handy-shadow-container");
  document.body.appendChild(div);
  let host = document.querySelector(".handy-shadow-container");
  let root = host.attachShadow({ mode: "open" });
  let handyButton = createCustomElement("div");

  const imageUrl = chrome.runtime.getURL("focuslist-logo.png");
  handyButton.innerHTML = `
    <div class="handylist-button-container">
      <img class="handylist-logo" src="${imageUrl}" width="80" height="80" alt="myimage">
      <a href="#" class="handylist-button" id="injectedButton">Handy List</a>
    </div>
    <style>
      .handylist-button-container {
        position: fixed;
        bottom: 40%;
        right: 2%;
        z-index: 999;
      }
      
      .handylist-button {
        border: none;
        border-radius: 50px;
        background: white;
        color: black;
        font-size: 15px;
      
        /* display: block; */
      }
      
      .handylist-logo {
        border: 1px solid red;
        padding: 20px;
      }
    </style>
  `;
  console.log(root);
  root.appendChild(handyButton);
  // document.body.insertAdjacentElement("afterend", handyButton);

  // document.body.appendChild(handyButton);
}

function removeButton() {
  var button = document.querySelector(".handy-shadow-container");
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
  if (message.showButton !== undefined) {
    handleButtonVisibility(message.showButton);
  }
});
