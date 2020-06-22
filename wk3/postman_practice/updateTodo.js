var updateTodo = new XMLHttpRequest();
updateTodo.open("PUT", "https://api.vschool.io/caidooley/todo/5ef053e3398e4004c7772d63", false);
updateTodo.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
updateTodo.send(JSON.stringify(
    {
        "title": "This WAS my first to-do",
        "description": "Now I updated It!",
        "price": 1000,
        "imgUrl": "",
        "completed": false
    }));

