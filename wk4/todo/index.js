const getTodos = new XMLHttpRequest();
getTodos.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let responseData = JSON.parse(getTodos.responseText);
        console.log("All Todos: ");
        console.log(responseData);
    }
};

axios.get("https://api.vschool.io/caidooley/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {

            // Get Todo 
            const h1 = document.createElement('h1');
            h1.textContent = response.data[i].title;

            // Get Completion
            const isComplete = response.data[i].completed ? true : false;
            if (isComplete) {
                h1.className = 'todo-complete';
            }

            document.body.appendChild(h1);

            // Get Image
            const imageUrl = response.data[i].imgUrl;
            if (imageUrl && imageUrl !== '' && imageUrl !== ' ') {
                const img = document.createElement('img');
                img.src = imageUrl;
                document.body.appendChild(img);
            } else {
                const noImage = document.createElement('p');
                noImage.textContent = "[No Image Found]";
                document.body.appendChild(noImage);
            }
        }
    })
    .catch(error => console.log(error))

getTodos.open("GET", "https://api.vschool.io/caidooley/todo", true);
getTodos.send();


