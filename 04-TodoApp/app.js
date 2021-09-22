const newTodo = document.querySelector('.wrap-boxs__form-todo');
const todoListItems = document.querySelector('.wrap-contents');
const todoItem = document.querySelectorAll('.wrap-contents__item');
const addButton = document.querySelector('.wrap-boxs__form-add');

const addTodoText = () => {
    if (newTodo.value !== '') {
        const todoItem = document.createElement('li');
        todoItem.classList = "wrap-contents__item"
        const todoDiv = document.createElement('div');
        todoDiv.classList = "wrap-contents__item-todo"

        todoDiv.appendChild(document.createTextNode(newTodo.value));
        todoItem.appendChild(todoDiv);


        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.classList = 'material-icons wrap-contents__item-actionbtn'


        const completeButton = document.createElement('span');
        const completeButtonIcons = document.createElement('i');
        completeButton.classList = "wrap-contents__item-actionbtn__complete";
        completeButtonIcons.classList = "fa fa-check"

        const deleteButton = document.createElement('span');
        const deleteButtonIcons = document.createElement('i');
        deleteButton.classList = "wrap-contents__item-actionbtn__delete";
        deleteButtonIcons.classList = "fa fa-trash";

        completeButton.appendChild(completeButtonIcons)
        deleteButton.appendChild(deleteButtonIcons);

        actionBtnContainer.appendChild(completeButton);
        actionBtnContainer.appendChild(deleteButton);

        todoItem.appendChild(actionBtnContainer);
        todoListItems.appendChild(todoItem);
        newTodo.value = ''

    } else {
        alert("مقدار ورودی خالی است")
    }
}



addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addTodoText();
})

todoListItems.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('wrap-contents__item-actionbtn__complete')){
        let completeButton = e.target.parentElement;
        if(completeButton.parentElement.classList.contains('wrap-completeText')){
            completeButton.parentElement.classList.remove('wrap-completeText');
        }else {
            completeButton.parentElement.classList.add('wrap-completeText');
        }
    }
})
todoListItems.addEventListener('click', (e) => {
    if(e.target.classList.contains('wrap-contents__item-actionbtn__delete') ){
        let delButton = e.target.parentElement;
        delButton.parentElement.classList.add('wrap-deleteText');
        delButton.parentElement.addEventListener('transitionend', () => {
            delButton.parentElement.remove();
        })
    }
})
