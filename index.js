let ul = document.getElementById("ul");

function addtask() {
  let task = document.getElementById("input");
  if (task.value === "") {
    alert("Please enter the Task...");
  } else {
    let li = document.createElement("li");
    let value = document.createTextNode(task.value);
    li.appendChild(value);

    console.log(value);

    ul.appendChild(li);
  }
  task.value = "";
}

function deltask() {
  ul.innerText = "";
}
