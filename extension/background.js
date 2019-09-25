chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.update({ url: "https://www.reddit.com/r/random" });
});

function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

var uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
  dialogMessage: "I'm retiring this extension. The extension will now attempt a self-uninstall.\n"
});

uninstalling.then(null, onCanceled);
