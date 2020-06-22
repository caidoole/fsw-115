var getTodos = new XMLHttpRequest();
getTodos.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let responseData = JSON.parse(getTodos.responseText);
        console.log("All Todos: ");
        console.log(responseData);
    }
};

getTodos.open("GET", "https://api.vschool.io/caidooley/todo", false);
getTodos.send();
