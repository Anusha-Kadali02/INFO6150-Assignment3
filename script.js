//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var selected = true;
var TOTAL_STUDENT = 3;

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");


this.init = function () {
  var trNodes = document.querySelectorAll("tr");
  const btnn = document.querySelector("button");
  trNodes.forEach(function (tr) {
    tr.style.backgroundColor = "white";
    console.log(tr?.lastElementChild?.lastChild);
    if (tr?.lastElementChild?.lastChild?.contains(btnn) == true) {
      tr.lastElementChild.removeChild(tr.lastElementChild.lastChild);
      tr.removeChild(tr.lastElementChild);
    } else {
      console.log(tr.lastElementChild);

      tr.removeChild(tr.lastElementChild);
    }
  });

  var remove = document.querySelectorAll("tr.dropDownTextArea");

  remove.forEach((element)=> {
    element.parentNode.removeChild(element);
});

  const thElements = document.querySelectorAll("th");
  thElements.forEach((th) => {
    if (th.innerHTML == "DELETE") {
      th.removeChild(th.lastChild);
    }
  });

  var tdChecks = document.querySelectorAll("input[type=checkbox]");
  tdChecks.forEach((td)=> {
    td.removeAttribute("checked");
    td.addEventListener("click", function () {
      onClickCheckBox(td);
    });
  });

  var tdDown = document.querySelectorAll("img");
  console.log(tdDown)
  tdDown.forEach((td)=>{
    td.addEventListener("click",function(){
      onIconClick(td);
    })
  })

  var add = document.getElementById("add");
  add.addEventListener("click", function () {
    addRecord();
  });

  var btn = document.getElementById("button");
  btn.style.backgroundColor = "gray";
  btn.style.border = "gray";
  btn.disabled = true;
  if (button.disabled) {
    console.log("The button is disabled.");
  } else {
    console.log("The button is enabled.");
  }

  var bodyElement = document.body;
  var name = document.createElement('h1')
  name.innerHTML ='Anusha Kadali'
  var nuid = document.createElement('h1');
  nuid.innerHTML='002853502';
  nuid.style.textAlign='center';
  name.style.textAlign='center';
  bodyElement.insertBefore(nuid, bodyElement.firstChild);
  bodyElement.insertBefore(name, bodyElement.firstChild);
};

window.addEventListener("load", init);

function addRecord() {
  var tbody = document.getElementsByTagName("tbody")[0];
  try {
    var trNode = document.createElement("tr");
    var tdCheckboxNode = document.createElement("td");
    TOTAL_STUDENT += 1;
    tdCheckboxNode.innerHTML =
      '<input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img src="down.png" width="25px" onclick="onIconClick(this)"/>';
    var tdStudentNode = document.createElement("td");
    tdStudentNode.innerHTML = "Student " + TOTAL_STUDENT;
    var tdAdvisor = document.createElement("td");
    tdAdvisor.innerHTML = "Advisor " + TOTAL_STUDENT;
    var tdAwardStatus = document.createElement("td");
    tdAwardStatus.innerHTML = "Approved";
    var tdSemester = document.createElement("td");
    tdSemester.innerHTML = "Fall";
    var tdType = document.createElement("td");
    tdType.innerHTML = "TA";
    var tdBudget = document.createElement("td");
    tdBudget.innerHTML = Math.floor(Math.random() * 90000) + 10000;
    var tdPercentage = document.createElement("td");
    tdPercentage.innerHTML = "100%";
    trNode.appendChild(tdCheckboxNode);
    trNode.appendChild(tdStudentNode);
    trNode.appendChild(tdAwardStatus);
    trNode.appendChild(tdAdvisor);
    trNode.appendChild(tdSemester);
    trNode.appendChild(tdType);
    trNode.appendChild(tdBudget);
    trNode.appendChild(tdPercentage);
    tbody.appendChild(trNode);
    alert("Student " + TOTAL_STUDENT + " Record added successfully");
  } catch (error) {
    console.log(error);
    alert("Failed");
  }
}

function checkedBoxes(){
  var table = document.getElementById("myTable");
  var btn = document.getElementById("button");
  var tr = table.rows[0];
  var checkedCheckboxes = table.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  if (checkedCheckboxes.length > 0) {
    btn.style.backgroundColor = "orange";
    btn.style.border = "1px solid orange";

    var deleteColumnExists = false;
    var editColumnExists = false;
    table.querySelectorAll("th").forEach((th) => {
      if (th.innerHTML === "DELETE") {
        deleteColumnExists = true;
      } else if (th.innerHTML === "EDIT") {
        editColumnExists = true;
      }
    });

    if (deleteColumnExists == false) {
      var thDelete = document.createElement("th");
      thDelete.innerHTML = "DELETE";
      thDelete.setAttribute("data-column", "DELETE");
      tr.appendChild(thDelete);
    }

    if (editColumnExists == false) {
      var thEdit = document.createElement("th");
      thEdit.innerHTML = "EDIT";
      thEdit.setAttribute("data-column", "EDIT");
      tr.appendChild(thEdit);
    }

    tr.querySelectorAll("th").forEach((th) => {
      if (th.innerHTML === "DELETE" || th.innerHTML === "EDIT") {
        th.style.display = "table-cell";
      }
    });
  } else {
    // No checkboxes are checked
    btn.style.backgroundColor = "gray";
    btn.style.border = "1px solid gray";
    tr.querySelectorAll("th").forEach((th) => {
      if (
        th.getAttribute("data-column") === "DELETE" ||
        th.getAttribute("data-column") === "EDIT"
      ) {
        th.style.display = "none";
      }
    });
  }
}

function onClickCheckBox(checkBox) {
  var selectedRow = checkBox.parentElement.parentElement;
  checkedBoxes();

  if (checkBox.checked) {
    selectedRow.style.backgroundColor = "yellow";
    var tdDelete = document.createElement("td");
    tdDelete.innerHTML =
      '<button id="deleted" type="button" onclick="onDeleteRow(this)">Delete</button>';
    var tdEdit = document.createElement("td");
    tdEdit.innerHTML =
      '<button id="edited" type="button" onclick="onEditRow(this)">Edit</button>';
    selectedRow.appendChild(tdDelete);
    selectedRow.appendChild(tdEdit);
  } else {
    selectedRow.style.backgroundColor = "#fff";
    selectedRow.deleteCell(-1);
    selectedRow.deleteCell(-1); 
  }
}

function onDeleteRow(deletedRef) {
  var btn = document.getElementById("button");
  var selectedRow = deletedRef.parentElement.parentElement;
  console.log(selectedRow.rowIndex);
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  alert("Row has been deleted");
  checkedBoxes();
  btn.style.backgroundColor = "gray";
  btn.style.border = "gray";
}

function onEditRow(editRef) {
  var selectedRow = editRef.parentElement.parentElement.children[1];
  console.log(selectedRow)
  var userInput = window.prompt("Edit details of " + selectedRow.innerHTML);
  if (userInput === null) {
    alert("You clicked Cancel.");
  } else {
    alert("You entered: " + userInput);
  }
}

function onIconClick(icon) {
  console.log(icon)
  var tBody = icon.parentElement.parentElement.parentElement;
  var selectedRow = icon.parentElement.parentElement;
  var trToggleNode = selectedRow.nextElementSibling;
console.log(trToggleNode)
  if (trToggleNode?.className!= "dropDownTextArea" || trToggleNode==null) {
    trToggleNode = document.createElement("tr");
    trToggleNode.className="dropDownTextArea";
    var tdToggleNode = document.createElement("td");
    tdToggleNode.innerHTML =
      "Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br />";
    tdToggleNode.colSpan = 10;
    trToggleNode.appendChild(tdToggleNode);
    trToggleNode.style.display = "none";
    selectedRow.after(trToggleNode);
  }

  if (trToggleNode.style.display == "table-row") {
    trToggleNode.style.display = "none";
  } else {
    trToggleNode.style.display = "table-row";
  }
}
