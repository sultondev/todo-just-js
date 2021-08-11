//Selectors
const list = document.querySelector(".list");
const formText = document.querySelector(".form-text");
const btnAdd = document.querySelector(".form-btn");
const filterOption = document.querySelector('.form-select');
//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
btnAdd.addEventListener('click', addTodo);
list.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

//Functions
function addTodo(event) {
    //  Prevent form from submitting
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('list-todo');
    // Todo li  
    const newTodo = document.createElement("li");
    newTodo.classList.add('list-item');
    newTodo.innerText = formText.value;
    todoDiv.appendChild(newTodo);
    // Add Todo to localstorage
    saveLocalTodos(formText.value);
    // Check mark button
    const completeButton = document.createElement("button");
    completeButton.classList.add('list-todo__complete');
    completeButton.innerHTML = `<i class="fas fa-check"></i>`
    todoDiv.appendChild(completeButton);
    // Check trash button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add('list-todo__delete');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(deleteButton);
    // Append todo
    list.appendChild(todoDiv);
    formText.value = "";
}


function deleteCheck(e) {
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === 'list-todo__delete') {
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalStorage(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
        filterOption.addEventListener('change', filterTodo);

    }
    //Check Ma rk
    if (item.classList[0] === 'list-todo__complete') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = Array.from(list.children);
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'activity':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'done':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}



function saveLocalTodos(todo) {
    // Check
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo) => {
        // Todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('list-todo');
        // Todo li  
        const newTodo = document.createElement("li");
        newTodo.classList.add('list-item');
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);
        // Check mark button
        const completeButton = document.createElement("button");
        completeButton.classList.add('list-todo__complete');
        completeButton.innerHTML = `<i class="fas fa-check"></i>`
        todoDiv.appendChild(completeButton);
        // Check trash button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add('list-todo__delete');
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
        todoDiv.appendChild(deleteButton);
        // Append CHild to div
        list.appendChild(todoDiv);
    })

}

function removeLocalStorage(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteData() {
    localStorage.clear();
}

// deleteData();