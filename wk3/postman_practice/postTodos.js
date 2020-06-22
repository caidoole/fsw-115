var postTodos = new XMLHttpRequest();
postTodos.open("POST", "https://api.vschool.io/caidooley/todo", false);
postTodos.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
postTodos.send(JSON.stringify(
    {
        "title": "Sweep",
        "description": "Sweep the Kitchen",
        "price": 50,
        "imgUrl": "",
        "completed": false
    })
);

postTodos.open("POST", "https://api.vschool.io/caidooley/todo", false);
postTodos.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
postTodos.send(JSON.stringify(
    {
        "title": "Dishes",
        "description": "Do the dishes!",
        "price": 70,
        "imgUrl": "",
        "completed": false
    })
);

postTodos.open("POST", "https://api.vschool.io/caidooley/todo", false);
postTodos.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
postTodos.send(JSON.stringify(
    {
        "title": "Walk the Cat",
        "description": "Cats need exercise too!",
        "price": 100,
        "imgUrl": "",
        "completed": false
    })
);
