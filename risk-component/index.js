window.risk = {
  loadNeededFrames: function (listResponse) {
    if (listResponse) {
      console.log("loadNeededFrames");
    }
  },
  getRiskData: function () {
    console.log({ risk: "data" });
  },
};
