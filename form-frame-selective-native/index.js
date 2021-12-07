// get informed when pay is clicked
// get risk infos and pass them with pay
// make payment
function addMessageListener() {
  window.addEventListener("message", function (event) {
    if (event.origin === "http://localhost:3000") {
      if (event.data["type"] === "risk_code") {
        var response = event.data["response"];
        document.getElementById("logger").innerHTML =
          "pay with: " + JSON.stringify(response);
      }
    }
  });
  return true;
}
addMessageListener();
