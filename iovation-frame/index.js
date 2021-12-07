var n = 0;
addMessageListener();
sendRiskToParent(n);
setInterval(function () {
  n++;
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
