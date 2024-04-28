// popup.js

document.addEventListener("DOMContentLoaded", function () {
  var handyPopupCheckbox = document.getElementById("handyPopupCheckbox");

  // Retrieve the checkbox state from Chrome storage
  chrome.storage.sync.get("showButtonState", function (data) {
    handyPopupCheckbox.checked = data.showButtonState || false;
  });

  handyPopupCheckbox.addEventListener("change", function () {
    // Save the checkbox state to Chrome storage
    chrome.storage.sync.set({ showButtonState: handyPopupCheckbox.checked });

    // Send a message to all tabs to update button visibility based on checkbox state
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, {
          showButton: handyPopupCheckbox.checked,
        });
      }
    });
  });
});
