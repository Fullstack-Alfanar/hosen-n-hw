let sum = 0;
let cnt = 0;

function addToTable() {
  let isValid = true;
  let name = document.getElementById("Name");
  let score = document.getElementById("Score");

  let cntSpan = document.getElementById("cnt");
  let avgSpan = document.getElementById("avg");

  let Tbodyy = document.getElementById("Tbodyy");

  let tr = document.createElement("tr");
  let nameTd = document.createElement("td");
  let scoreTd = document.createElement("td");
  let nameLabel = document.createElement("label");
  let scoreLabel = document.createElement("label");

  if (!/^[a-zA-Z]+$/.test(name.value) || name.value.length < 3) {
    isValid = false;
    alert("Short Name or not Valid");
  }
  if (!/^[0-9]+$/.test(score.value) || score.value > 100 || score.value < 0) {
    isValid = false;
    alert("Invalid Score");
  }
  if (name.value != "" && score.value != "" && isValid) {
    cnt++;
    sum += Number.parseInt(score.value);
    nameLabel.textContent = name.value;
    scoreLabel.textContent = score.value;

    cntSpan.textContent = cnt;
    avgSpan.textContent = Math.floor(sum / cnt);
    nameTd.appendChild(nameLabel);
    scoreTd.appendChild(scoreLabel);

    nameTd.classList.add("stdDiv1");
    scoreTd.classList.add("stdDiv1");

    nameTd.classList.add("tdDivider");
    scoreTd.classList.add("tdDivider");

    tr.appendChild(nameTd);
    tr.appendChild(scoreTd);

    Tbodyy.appendChild(tr);

    name.value = "";
    score.value = "";
  }
}
