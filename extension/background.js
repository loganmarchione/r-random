chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.update({ url: "https://www.reddit.com/r/random" });
});
