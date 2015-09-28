chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
if(changeInfo.url != null) { // check this condition, I didn't remember what is returned if the url didn't change.
    // your code
    window.console.log(changeInfo.url);
}
});
