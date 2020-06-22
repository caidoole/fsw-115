var getSingleTodo = new XMLHttpRequest();
getSingleTodo.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let responseData = JSON.parse(getSingleTodo.responseText);
        console.log("Single Todo: ");
        console.log(responseData);
    }
};

getSingleTodo.open("GET", "https://api.vschool.io/caidooley/todo/5ef03896398e4004c7772d5a", false);
getSingleTodo.send();


