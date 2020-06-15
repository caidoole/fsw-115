const _OLBookInfo = {
    "ISBN:9780060736262": {
        "publishers": [
            {
                "name": "Perennial Classics"
            }
        ],
        "pagination": "p. cm.",
        "classifications": {
            "dewey_decimal_class": [
                "813/.52"
            ],
            "lc_classifications": [
                "PS3537.M2895 T7 2005"
            ]
        },
        "title": "A tree grows in Brooklyn",
        "url": "https://openlibrary.org/books/OL3309172M/A_tree_grows_in_Brooklyn",
        "identifiers": {
            "lccn": [
                "2004057293"
            ],
            "openlibrary": [
                "OL3309172M"
            ],
            "isbn_10": [
                "0060736267"
            ],
            "librarything": [
                "1475"
            ],
            "goodreads": [
                "482976"
            ]
        },
        "cover": {
            "small": "https://covers.openlibrary.org/b/id/33551-S.jpg",
            "large": "https://covers.openlibrary.org/b/id/33551-L.jpg",
            "medium": "https://covers.openlibrary.org/b/id/33551-M.jpg"
        },
        "subject_places": [
            {
                "url": "https://openlibrary.org/subjects/place:brooklyn_(new_york,_n.y.)",
                "name": "Brooklyn (New York, N.Y.)"
            },
            {
                "url": "https://openlibrary.org/subjects/place:new_york_(state)",
                "name": "New York (State)"
            },
            {
                "url": "https://openlibrary.org/subjects/place:new_york",
                "name": "New York"
            }
        ],
        "subjects": [
            {
                "url": "https://openlibrary.org/subjects/teenage_girls",
                "name": "Teenage girls"
            },
            {
                "url": "https://openlibrary.org/subjects/girls",
                "name": "Girls"
            },
            {
                "url": "https://openlibrary.org/subjects/fiction",
                "name": "Fiction"
            },
            {
                "url": "https://openlibrary.org/subjects/classic_literature",
                "name": "Classic Literature"
            },
            {
                "url": "https://openlibrary.org/subjects/poor_families",
                "name": "Poor families"
            },
            {
                "url": "https://openlibrary.org/subjects/brooklyn_(nueva_york,_n.y.)",
                "name": "Brooklyn (Nueva York, N.Y.)"
            },
            {
                "url": "https://openlibrary.org/subjects/muchachas_adolescentes",
                "name": "Muchachas adolescentes"
            },
            {
                "url": "https://openlibrary.org/subjects/reading_materials",
                "name": "Reading materials"
            },
            {
                "url": "https://openlibrary.org/subjects/pobres",
                "name": "Pobres"
            },
            {
                "url": "https://openlibrary.org/subjects/spanish_language",
                "name": "Spanish language"
            },
            {
                "url": "https://openlibrary.org/subjects/poverty",
                "name": "Poverty"
            },
            {
                "url": "https://openlibrary.org/subjects/novela",
                "name": "Novela"
            },
            {
                "url": "https://openlibrary.org/subjects/family",
                "name": "Family"
            },
            {
                "url": "https://openlibrary.org/subjects/reading_level-grade_9",
                "name": "Reading Level-Grade 9"
            },
            {
                "url": "https://openlibrary.org/subjects/reading_level-grade_8",
                "name": "Reading Level-Grade 8"
            },
            {
                "url": "https://openlibrary.org/subjects/reading_level-grade_11",
                "name": "Reading Level-Grade 11"
            },
            {
                "url": "https://openlibrary.org/subjects/reading_level-grade_10",
                "name": "Reading Level-Grade 10"
            },
            {
                "url": "https://openlibrary.org/subjects/reading_level-grade_12",
                "name": "Reading Level-Grade 12"
            }
        ],
        "publish_date": "2005",
        "key": "/books/OL3309172M",
        "authors": [
            {
                "url": "https://openlibrary.org/authors/OL39597A/Betty_Smith",
                "name": "Betty Smith"
            }
        ],
        "by_statement": "Betty Smith ; with a foreward by Anna Quindlen.",
        "publish_places": [
            {
                "name": "New York"
            }
        ],
        "ebooks": [
            {
                "checkedout": false,
                "formats": {},
                "preview_url": "https://archive.org/details/treegrowsinbrook00smit",
                "borrow_url": "https://openlibrary.org/books/OL3309172M/A_tree_grows_in_Brooklyn/borrow",
                "availability": "borrow"
            }
        ]
    }
};
const isbn = Object.keys(_OLBookInfo)[0];
const title = _OLBookInfo[isbn]["title"];
const authors = _OLBookInfo[isbn]["authors"][0]["name"];
const publication = _OLBookInfo[isbn]["publish_date"];
const imageURL = _OLBookInfo[isbn]["cover"]["large"];
const subjects = _OLBookInfo[isbn]["subjects"];

let header = document.getElementById("header");
let headerImage = document.createElement("img");
headerImage.src = imageURL;
header.append(headerImage);

let info = document.getElementById("info");
let titleSection = document.createElement("p");
titleSection.textContent = title;
info.append(titleSection);

let authorsName = document.createElement("p");
authorsName.textContent = authors;
info.append(authorsName)

let published = document.createElement("p");
published.textContent = publication;
info.append(published)

let topics = document.getElementById("topics") 
for(let i = 0; i < subjects.length; i++ ){
    let subjectName = document.createElement("p")
    subjectName.textContent = subjects[i]["name"];
    topics.append(subjectName)
}