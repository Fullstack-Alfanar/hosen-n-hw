let sum = 0,
  cnt = 0;
function addToTable() {
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

  if (name.value != "" && score.value != "") {
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
  } else alert("missing value");
}
