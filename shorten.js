function generateRandomString() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const apiAddress = "https://xurl.app/api/create";

export async function shortenUrl(originalUrl) {
  console.log("shortenUrl function called");
  const slug = generateRandomString();
  const button = document.getElementById("getCurrentURLButton");
  const spinner = document.getElementById("loadingSpinner");
  const buttonText = button.querySelector("h3");
  // make button disabled
  button.disabled = true;
  spinner.style.display = "block";
  buttonText.style.display = "none";
  const response = await fetch(apiAddress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "SHORTURL",
      linkUrl: slug,
      originalUrl: originalUrl,
      expiration: "1d",
    }),
  });
  button.style.display = "none";
  spinner.style.display = "none";
  buttonText.style.display = "block";
  console.log("custom slug:", slug);
  return slug;
}

export function currentTab() {
  browser.tabs
    .query({ currentWindow: true, active: true })
    .then(async (tabs) => {
      let tab = tabs[0];
      console.log(tab.url);
      const gettingCurrent = tab.url;
      const slug = await shortenUrl(gettingCurrent);
      const shortenedUrlDisplay = document.getElementById("shortenedURL");
      shortenedUrlDisplay.textContent = `Shortened URL: https://xurl.app/${slug}`;
      shortenedUrlDisplay.href = `https://xurl.app/${slug}`;
      const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";
      copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(`https://xurl.app/${slug}`);
      });
    }, console.error);
}
