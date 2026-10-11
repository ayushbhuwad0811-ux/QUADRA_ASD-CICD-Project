const checkButton = document.querySelector("#checkButton");
const statusMessage = document.querySelector("#statusMessage");
const year = document.querySelector("#year");
const topLink = document.querySelector("#topLink");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (checkButton && statusMessage) {
  checkButton.addEventListener("click", () => {
    const checkedAt = new Date().toLocaleTimeString();
    statusMessage.textContent = `Website is running in your browser. Checked at ${checkedAt}.`;
    checkButton.textContent = "Status checked ✓";
  });
}

if (topLink) {
  topLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
