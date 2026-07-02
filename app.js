let nameInt = document.getElementById("inputValue");
let numInt = document.getElementById("amountOfNum");

function generate() {
  let output = "";
  let name = nameInt.value;
  let count = Number(numInt.value);

  for (let i = 1; i <= count; i++) {
    output += i + ". " + name + "\n";
  }

  document.getElementById("final").innerText = output;
}

function copyText() {
  let text = document.getElementById("final").innerText;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Copied to clipboard! ✅");
    })
    .catch(err => {
      alert("Failed to copy ❌");
      console.error(err);
    });
}