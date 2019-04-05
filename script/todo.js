let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

let hideToDoItems = false;

let buildToDoList = function () {
  let toDoListString = '';
  todos.forEach((item, index) => {
    toDoListString +=
      '<div class="todo' + (item.complete ? " complete" : "" ) + '" onclick="selectCheckFromRow(this);">' +
      '  <input type="checkbox" class="todo-checkbox" onclick="toggleTodoItem(this, ' + item.id + ');event.stopPropagation();" ' + (item.complete ? "checked" : "" )  + ' />' +
      '  <span class="todo-text">' + item.text + '</span>' +
      '</div>';
  });
  document.getElementById("main-todo-list").innerHTML = toDoListString;
  setRemainingCount();
  setDivVisibility();
};

let toggleTodoItem = function(element, id) {
  element.parentElement.classList.toggle('complete');
  let selectedTodo = todos.find(todo => todo.id === id);
  selectedTodo.complete = !selectedTodo.complete;
  setRemainingCount();
  setDivVisibility();
};

let setRemainingCount = function() {
  let completedToDos = todos.filter(item => {
    return item.complete;
  });
  document.getElementById("remaining-count").innerText = todos.length - completedToDos.length;
};

let addToDoItem = function(event) {
  console.log(element);
  if (event.key === 'Enter') {
    let newTodo = {id: todos.length + 1, text: event.target.value, complete: false}
    todos.push(newTodo);
    event.target.value = "";
    buildToDoList();
  }
};

let selectCheckFromRow = function(element) {
  element.querySelector('.todo-checkbox').click();
};

let showHideBtnClick = function() {
  hideToDoItems = !hideToDoItems;
  setDivVisibility();
  if (hideToDoItems) {
    document.getElementById('visibilityBtn').innerText = "Show completed items";
  } else {
    document.getElementById('visibilityBtn').innerText = "Hide completed items";
  }
};

let setDivVisibility = function() {
  let toDoItemsDiv = document.querySelectorAll('.complete');
  for (element of toDoItemsDiv) {
    if (hideToDoItems) {
      element.classList.add("hidden");
    } else {
      element.classList.remove("hidden");
    }
  }
};

buildToDoList();



