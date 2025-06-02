const input = document.getElementById("evaluatedText");
const countDisplay = document.getElementById("letterCount");

input.addEventListener("input", () => {
  countDisplay.textContent = input.value.length;
});
