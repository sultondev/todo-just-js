// const list = document.querySelector(".list");
// const formText = document.querySelector(".form-text");
// const btnAdd = document.querySelector(".form-btn");

// btnAdd.addEventListener('click', (e) => {
//     e.preventDefault();
//     // New Div todo
//     const newDiv = document.createElement('div');
//     newDiv.classList.add("list-todo");
//     // New Li item
//     const newItem = document.createElement('li');
//     newItem.classList.add('list-item');
//     // New Complete button and icon
//     const newCompleteBtn = document.createElement('button');
//     newCompleteBtn.classList.add('list-todo__complete');
//     const completeIcon = document.createElement('i');
//     completeIcon.classList.add('fas', 'fa-check');
//     newCompleteBtn.appendChild(completeIcon);
//     // New Delete button and icon
//     const newDeleteBtn = document.createElement('button');
//     newDeleteBtn.classList.add("list-todo__delete");
//     const deleteIcon = document.createElement("i");
//     deleteIcon.classList.add('fas', 'fa-trash');
//     newDeleteBtn.appendChild(deleteIcon);
//     // New
//     newItem.innerText = formText.value;
//     newDiv.innerHTML = newItem.outerHTML + newCompleteBtn.outerHTML + newDeleteBtn.outerHTML;
//     list.appendChild(newDiv);
//     formText.value = "";
//     newDeleteBtn.addEventListener("click", deleteItem(e))
// });

// // completeBtn.addEventListener('click', (e) => {
// //     e.stopPropagation();
// //     console.log(e);
// // })

// function deleteItem(e) {
//     e.stopPropagation();
//     console.log(e)
// }