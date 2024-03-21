document.addEventListener('DOMContentLoaded', function () {
  const todoInput = document.getElementById('todoInput');
  const addBtn = document.getElementById('addBtn');
  const todoList = document.getElementById('todoList');
  const taskCount = document.getElementById('taskCount');

  addBtn.addEventListener('click', function () {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      addTodoItem(todoText);
      todoInput.value = '';
    }
  });

  todoList.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('delete-btn')) {
      deleteTodoItem(target.parentNode);
    } else if (target.classList.contains('checkbox')) {
      toggleTodoItem(target.parentNode);
    }
  });

  function addTodoItem(todoText) {
    const li = document.createElement('li');
    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');
    checkbox.innerHTML = `
      <input type="checkbox" id="todo${todoList.children.length + 1}">
      <label for="todo${todoList.children.length + 1}"></label>
    `;
    li.appendChild(checkbox);
    const todoSpan = document.createElement('h3');
    todoSpan.classList.add('todo-text');
    todoSpan.textContent = todoText;
    li.appendChild(todoSpan);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&times;';
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    updateTaskCount();
  }

  function deleteTodoItem(item) {
    item.remove();
    updateTaskCount();
  }

  function toggleTodoItem(item) {
    item.classList.toggle('checked');
  }

  function updateTaskCount() {
    const totalTasks = todoList.getElementsByTagName('li').length;
    taskCount.textContent = totalTasks;
  }
});
