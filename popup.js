import { currentTab } from "./shorten.js";

document
    .getElementById("copyButton")
    .style.display = "none";

document
  .getElementById("getCurrentURLButton")
  .addEventListener("click", async () => {
    try {
      currentTab();
    } catch (error) {
      console.error("Error calling currentTab function:", error);
    }
  });
