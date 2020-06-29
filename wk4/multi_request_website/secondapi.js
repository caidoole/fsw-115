const button = document.createElement('button');
button.setAttribute("id", "interactive");
button.style.height = "30px";
button.style.width = "100px";
button.style.backgroundColor = "orange";
button.style.borderRadius = "15px"
button.style.marginTop = "15px"
button.textContent = "Display"
document.body.append(button);

document.getElementById("interactive").addEventListener("mousedown", function () {
    axios.get("https://api.openbrewerydb.org/breweries")
        .then(response => {
            brewsArray = response["data"];
            for (let i = 0; i < brewsArray.length; i++) {
                const p = document.createElement('p');
                p.textContent = brewsArray[i].name;
                document.body.appendChild(p);
            }
        })
        .catch(error => console.log(error))

});



