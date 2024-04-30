// console.log("background js go");
// chrome.storage.sync.get(null, function (data) {
//   console.log("Stored Data:", data);
// });
// chrome.action.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
//   console.log(tab.id);
//   let msg = { txt: "hello" };
//   chrome.tabs.sendMessage(tab.id, msg, (response) => {
//     console.log("message sent");
//   });
// }

// chrome.action
// chrome.message

// chrome.action.onClicked.addListener((request, sender, sendResponse) => {
//   console.log(request);
//   sendResponse({ farewell: "goodbye" });
// });

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.tabs.create({
//     url: "https://chat.openai.com",
//   });
// });

// Set up alarm for task reminder
// chrome.alarms.create("taskReminder", {
//   periodInMinutes: 0.05, // Set reminder after 1 hour (can be changed as needed)
// });

// // Listen for alarm trigger
// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (alarm.name === "taskReminder") {
//     // Display reminder notification
//     // console.log("Task Reminder");
//     chrome.notifications.create({
//       type: "basic",
//       iconUrl: "focuslist-logo.png",
//       title: "Task Reminder",
//       message: "Don't forget to complete your task!",
//     });
//   }
// });

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  // console.log(tabs);
});
