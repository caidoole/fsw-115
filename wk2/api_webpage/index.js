const figyBerry = {
    "firmness": {
        "name": "soft",
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/"
    },
    "flavors": [
        {
            "flavor": {
                "name": "spicy",
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
            },
            "potency": 15
        },
        {
            "flavor": {
                "name": "dry",
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/"
            },
            "potency": 0
        },
        {
            "flavor": {
                "name": "sweet",
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/"
            },
            "potency": 0
        },
        {
            "flavor": {
                "name": "bitter",
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/"
            },
            "potency": 0
        },
        {
            "flavor": {
                "name": "sour",
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/"
            },
            "potency": 0
        }
    ],
    "growth_time": 5,
    "id": 11,
    "item": {
        "name": "figy-berry",
        "url": "https://pokeapi.co/api/v2/item/136/"
    },
    "max_harvest": 5,
    "name": "figy",
    "natural_gift_power": 60,
    "natural_gift_type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
    },
    "size": 100,
    "smoothness": 25,
    "soil_dryness": 10
}

const name = figyBerry["item"]["name"];
const flavors = figyBerry["flavors"];
const firmness = figyBerry["firmness"];

let info = document.getElementById("info");
for (let i = 0; i < flavors.length; i++) {
    let flavor = document.createElement("div");
    let potency = document.createElement("div");
    flavor.textContent = flavors[i]["flavor"]["name"];
    potency.textContent = flavors[i]["potency"];
    info.append(flavor)
    info.append(potency)
}

let texture = document.getElementById("texture");
let firm = document.createElement("p");
firm.textContent = firmness["name"];
texture.append(firm);
