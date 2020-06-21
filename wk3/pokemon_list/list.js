const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONData = xhr.responseText;
        const data = JSON.parse(JSONData);
        pokemonArr = data["objects"][0]["pokemon"];
        showData(pokemonArr);
    }
};

function showData(data) {
    for (let i = 0; i < data.length; i++) {
        let pokemonName = data[i]["name"];
        const h1 = document.createElement("h1")
        h1.textContent = pokemonName;
        document.body.appendChild(h1)
    }
}