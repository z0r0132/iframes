let risks = {
  iovation: null,
  riskify: null,
};
document.addEventListener("DOMContentLoaded", function () {
  let logger = document.getElementById("logger");
  let button = document.getElementById("submitBtn");
  addMessageListener();
  button.onclick = function () {
    logger.innerHTML = logger.innerHTML + "button clicked";
    askForRiskDatas();
    logger.innerHTML =
      logger.innerHTML +
      "iovation is: " +
      risks.iovation +
      " and riskify is: " +
      risks.riskify;
    sendRiskToForm(risks);
    // ask for n from each risk iframes
    // pass them with request of pay to iframe form
  };
});

function addMessageListener() {
  window.addEventListener("message", function (event) {
    if (event.origin === "http://localhost:3002") {
      //iovation
      if (event.data["type"] === "risk_code") {
        var response = event.data["response"];
        risks.iovation = response;
      }
    }
    if (event.origin === "http://localhost:3003") {
      //riskify
      if (event.data["type"] === "risk_code") {
        var response = event.data["response"];
        risks.riskify = response;
      }
    }
  });
  return true;
}
function askForRiskDatas() {
  let iframeI = document.getElementById("iovation-frame").contentWindow;
  let iframeR = document.getElementById("riskify-frame").contentWindow;
  iframeI.postMessage(
    { type: "risk_code", response: null },
    "http://localhost:3002"
  );
  iframeR.postMessage(
    { type: "risk_code", response: null },
    "http://localhost:3003"
  );
}
function sendRiskToForm(risks) {
  let iframeF = document.getElementById("form-frame").contentWindow;
  iframeF.postMessage(
    { type: "risk_code", response: risks },
    "http://localhost:3001"
  );
}
