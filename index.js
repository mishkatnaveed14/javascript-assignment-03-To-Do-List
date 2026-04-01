let ul = document.getElementById("ul");

function addtask() {

  let task = document.getElementById("input");
  
  if (task.value === "") {
    alert("Please enter the Task...");
  } else {
    let li = document.createElement("li");
    li.className = "task-item";

    let span = document.createElement("span");
    span.innerText = task.value;

    let btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    ///////////    edit btns   /////////////////

    let editbtn = document.createElement("button");
    editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editbtn.className = "btns edit-btn";
    editbtn.setAttribute("onclick", "editbtn(this)");

    ///////////    delete btns   /////////////////
    let delbtn = document.createElement("button");
    delbtn.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    delbtn.className = "btns del-btn";
    delbtn.setAttribute("onclick", "delbtn(this)");

    btnGroup.appendChild(editbtn);
    btnGroup.appendChild(delbtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    ul.appendChild(li);
  }
  task.value = "";
}

function deltask() {
  ul.innerText = "";
}
function delbtn(btn) {
  btn.parentNode.parentNode.remove();
}
function editbtn(btn) {
  let span = btn.parentNode.previousSibling;
  let oldtask = span.innerText;
  let newtask = prompt("Enter new task", oldtask);

  if (newtask !== null) {
    span.innerText = newtask;
  }
}
