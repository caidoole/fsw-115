var deleteTodo = new XMLHttpRequest();
deleteTodo.open("DELETE", "https://api.vschool.io/caidooley/todo/5ef053e3398e4004c7772d64", false);
deleteTodo.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
deleteTodo.send();
