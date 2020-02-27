chrome.runtime.onMessage.addListener(function(request) {
    if (request.action == "update") {
      highlightSymbol();
    }
  }
);

function highlightSymbol() {
  var dom = document.body;
  var elements = dom.querySelectorAll("*");
  var regExpCapital = /["', \s]В["',\s]/g;
  var regExpSmall = /["', \s]в["',\s]/g;

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.search(regExpCapital) != -1) {
      var changedEl = elements[i].innerHTML.replace(regExpCapital, returnEl("В"));
      elements[i].innerHTML = changedEl;
    }
    if (elements[i].innerHTML.search(regExpSmall) != -1) {
      var changedEl = elements[i].innerHTML.replace(regExpSmall, returnEl("в"));
      elements[i].innerHTML = changedEl;
    }
  }
}

function returnEl(symbol) {
  var el = ` <span style='background: #000;'>${symbol}</span> `;
  return el;
}