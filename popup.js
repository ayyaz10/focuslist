document.addEventListener("DOMContentLoaded", function () {
  var handyPopupCheckbox = document.getElementById("handyPopupCheckbox");

  chrome.storage.sync.get("showButtonState", function (data) {
    handyPopupCheckbox.checked = data.showButtonState || false;
  });
  handyPopupCheckbox.addEventListener("change", function () {
    chrome.storage.sync.set({ showButtonState: handyPopupCheckbox.checked });
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, {
          showButton: handyPopupCheckbox.checked,
        });
      });
    });
  });
});
