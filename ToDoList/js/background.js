
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'fetchData'){
        let taskList = JSON.parse(localStorage.taskList)
        sendResponse(taskList);
    }
});