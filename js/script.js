let sum = 0;
let cnt = 0;
let stdArr = [];

function CheckValidElement() {
  let isValid = true;
  let name = document.getElementById("Name");
  let grade = document.getElementById("grade");

  if (!/^[a-zA-Z]+$/.test(name.value) || name.value.length < 3) {
    isValid = false;
    alert("Short Name or not Valid");
  }
  if (!/^[0-9]+$/.test(grade.value) || grade.value > 100 || grade.value < 0) {
    isValid = false;
    alert("Invalid grade");
  }
  if (name.value != "" && grade.value != "" && isValid) {
    {
      addToTable(name.value, Number.parseInt(grade.value));
      var obj = {
        student_name: name.value,
        student_grade: Number.parseInt(grade.value),
      };
      saveToStorage(obj);
      name.value = "";
      grade.value = "";
    }
  }
}
function addToTable(stdName, stdGrade) {
  let Tbodyy = document.getElementById("Tbodyy");
  let cntSpan = document.getElementById("cnt");
  let avgSpan = document.getElementById("avg");
  let tr = document.createElement("tr");
  let nameTd = document.createElement("td");
  let gradeTd = document.createElement("td");
  let nameLabel = document.createElement("label");
  let gradeLabel = document.createElement("label");

  cnt++;
  sum += stdGrade;
  nameLabel.textContent = stdName;
  gradeLabel.textContent = stdGrade;

  cntSpan.textContent = cnt;
  avgSpan.textContent = Math.floor(sum / cnt);
  nameTd.appendChild(nameLabel);
  gradeTd.appendChild(gradeLabel);

  nameTd.classList.add("stdDiv1");
  gradeTd.classList.add("stdDiv1");

  nameTd.classList.add("tdDivider");
  gradeTd.classList.add("tdDivider");

  tr.appendChild(nameTd);
  tr.appendChild(gradeTd);

  Tbodyy.appendChild(tr);
}

function saveToStorage(obj) {
  stdArr.push(obj);
  localStorage.setItem("Student_Grades", JSON.stringify(stdArr));
}

function getLocalStorage() {
  if (localStorage.getItem("Student_Grades")) {
    stdArr = JSON.parse(localStorage.getItem("Student_Grades"));
    for (let i of stdArr) {
      addToTable(i.student_name, i.student_grade);
    }
  }
}
getLocalStorage();
