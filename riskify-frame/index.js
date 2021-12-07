var n = 5;
sendRiskToParent(n);
addMessageListener();
setInterval(function () {
  n = n * 2 - 15;
  sendRiskToParent(n);
}, 15000);

function addMessageListener() {
  window.addEventListener("message", function (event) {
    if (event.origin === "http://localhost:3000") {
      if (event.data["type"] === "risk_code") {
        sendRiskToParent(n);
      }
    }
  });
  return true;
}

function sendRiskToParent(n) {
  window.parent.postMessage({ type: "risk_code", response: n }, "*");
}
