var planetsRequest = new XMLHttpRequest();
planetsRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let responseData = JSON.parse(planetsRequest.responseText);
        let planetList = responseData["results"];
        showPlanets(planetList);
    }
};

planetsRequest.open("GET", "https://swapi.dev/api/planets/", false);
planetsRequest.send();

function showPlanets(planetList) {
    for (let i = 0; i < planetList.length; i++) {
        let planetName = planetList[i]["name"];
        const h1 = document.createElement("h1");
        h1.textContent = planetName;
        document.body.appendChild(h1);
    }
}

var personRequest = new XMLHttpRequest();
personRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let responseData = JSON.parse(personRequest.responseText);
        let personName = responseData["name"];
        const h1 = document.createElement("h1");
        h1.textContent = personName;
        document.body.appendChild(h1);
    }
};

personRequest.open("GET", "https://swapi.dev/api/people/12", false);
personRequest.send();