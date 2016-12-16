chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "localStorage") {
    sendResponse({data: localStorage[request.key]});
  } else {
    sendResponse({});
  }
});
