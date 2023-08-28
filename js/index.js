const form = document.getElementById("tipsForm");

document.getElementById("totalTip").style.display = "none";

function calculateTip(ev) {
  ev.preventDefault();
  const bill = document.getElementById("bill").value;
  const service = document.getElementById("service").value;
  let numberPeople = document.getElementById("people").value;

  //   console.log({ bill, service, numberPeople });

  if (numberPeople <= 1) {
    numberPeople = 1;
  }

  let total = ((bill * service) / numberPeople).toFixed(2);
  const totalTip = document.getElementById("totalTip");
  const tips = document.createElement("span");
  tips.innerText = `Gorjeta(s): ${total}R$ por pessoa\n`;
  document.getElementById("totalTip").style.display = "block";

  totalTip.appendChild(tips);

  document.getElementById("bill").value = "";
  document.getElementById("service").value = "";
  document.getElementById("people").value = "";
}

form.addEventListener("submit", calculateTip);
