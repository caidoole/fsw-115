
async function getCharacterDetails() {
    try {
        const episodeResponse = await axios.get("https://rickandmortyapi.com/api/episode/28");
        const episodeName = episodeResponse['data']['name'];

        let randomCharacter = Math.floor(Math.random() * Math.floor(64));
        const characterUrl = episodeResponse['data']['characters'][randomCharacter];

        const characterResponse = await axios.get(characterUrl);
        const characterName = characterResponse['data']['name'];
        const originUrl = characterResponse['data']['origin']['url'];
        const characterImage = characterResponse['data']['image'];

        let locationName = '';
        let locationDimension = '';
        if(characterResponse['data']['origin']['name'] === 'unknown'){
            locationName = 'Unknown';
            locationDimension = 'Unknown';
        } else {
            const locationResponse = await axios.get(originUrl);
            locationName = locationResponse['data']['name'];
            locationDimension = locationResponse['data']['dimension'];
        }

        const content = document.getElementById('content');

        const h3 = document.createElement('h3');
        h3.textContent = "Episode:  " + episodeName;

        const h4 = document.createElement('h4');
        h4.textContent = "Character:  " + characterName;
        const charImage = document.createElement('img');
        charImage.src = characterImage;

        const charOrigin = document.createElement('p');
        charOrigin.textContent = "Origin:  " + locationName;
        const charDimension = document.createElement('p');
        charDimension.textContent = "Dimension:  " + locationDimension;

        const newCharacterButton = document.createElement('button');
        newCharacterButton.textContent = "Generate New Random Character";

        newCharacterButton.addEventListener("click", function (event) {
            clearCharacter();
            getCharacterDetails();
        })

        content.appendChild(h3);
        content.appendChild(h4);
        content.appendChild(charImage);
        content.appendChild(charOrigin);
        content.appendChild(charDimension);
        content.appendChild(newCharacterButton);

    } catch (error) {
        console.log("error", error);
    }
}

function clearCharacter() {
    const content = document.getElementById('content')
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

getCharacterDetails();

