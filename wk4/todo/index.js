function getTodoData() {
    axios.get("https://api.vschool.io/caidooley/todo")
        .then(response => listTodos(response.data))
        .catch(error => console.log(error))
}

function listTodos(todos) {

    clearTodos();

    for (let i = 0; i < todos.length; i++) {

        const toDoId = todos[i]._id;
        const toDoList = document.getElementById('toDoList');

        const h1 = document.createElement('h1');
        h1.textContent = todos[i].title;

        const completion = document.createElement('input');
        completion.type = 'checkbox';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        const price = document.createElement('h4');
        price.textContent = "$" + todos[i].price;

        const description = document.createElement('p');
        description.textContent = todos[i].description;

        const isComplete = todos[i].completed ? true : false;
        if (isComplete) {
            h1.className = 'todo-complete';
            completion.checked = true;
        } else {
            h1.className = 'todo-not-complete'
            completion.checked = false;
        }

        completion.addEventListener("click", function (event) {
            let toDoCompletion = event.target.checked;
            let updates = { 'completed': toDoCompletion }

            axios.put(`https://api.vschool.io/caidooley/todo/${toDoId}`, updates)
                .then(response => getTodoData())
                .catch(error => console.log(error))

        })

        deleteButton.addEventListener("click", function (event) {

            axios.delete(`https://api.vschool.io/caidooley/todo/${toDoId}`)
                .then(response => getTodoData())
                .catch(error => console.log(error))

        })

        h1.appendChild(completion);
        h1.appendChild(deleteButton)
        toDoList.appendChild(h1);
        toDoList.appendChild(price);
        toDoList.appendChild(description);

        const imageUrl = todos[i].imgUrl;
        if (imageUrl && imageUrl !== '' && imageUrl !== ' ') {
            const img = document.createElement('img');
            img.src = imageUrl;
            toDoList.appendChild(img);
        } else {
            const noImage = document.createElement('p');
            noImage.textContent = "[No Image Found]";
            toDoList.appendChild(noImage);
        }
    }

}

function clearTodos() {
    const toDoList = document.getElementById('toDoList')
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild)
    }
}

getTodoData();

const todoForm = document.todoForm

todoForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = "";
    todoForm.description.value = "";
    todoForm.price.value = "";
    todoForm.imgUrl.value = ""; 
    axios.post("https://api.vschool.io/caidooley/todo", newTodo)
        .then(response => getTodoData())
        .catch(error => console.log(error))
})


