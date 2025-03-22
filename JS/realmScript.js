let realms = [
    {
        name: "The MacMillan Estate",
        maps: "5",
        killer: "The Trapper, The Skull Merchant",
        release: "14 June 2016"
    },
    {
        name: "Autohaven Wreckers",
        maps: "5",
        killer: "The Wraith",
        release: "14 June 2016"
    },
    {
        name: "Coldwind Farm",
        maps: "5",
        killer: "The Hillbilly",
        release: "14 June 2016"
    },
    {
        name: "Crotus Prenn Asylum",
        maps: "2",
        killer: "The Nurse",
        release: "18 August 2016"
    },
    {
        name: "Haddonfield",
        maps: "1",
        killer: "The Shape",
        release: "25 October 2016"
    },
    {
        name: "Backwater Swamp",
        maps: "2",
        killer: "The Hag",
        release: "8 December 2016"
    },
    {
        name: "Léry's Memorial Institute",
        maps: "1",
        killer: "The Doctor",
        release: "11 May 2017"
    },
    {
        name: "Red Forest",
        maps: "2",
        killer: "The Huntress, The Plague",
        release: "27 July 2017"
    },
    {
        name: "Springwood",
        maps: "5",
        killer: "The Nightmare",
        release: "26 October 2017"
    },
    {
        name: "Gideon Meat Plant",
        maps: "1",
        killer: "The Pig",
        release: "23 January 2018"
    },
    {
        name: "Yamaoka Estate",
        maps: "2",
        killer: "The Spirit, The Oni",
        release: "18 September 2018"
    },
    {
        name: "Ormond",
        maps: "1",
        killer: "The Legion",
        release: "11 December 2018"
    },
    {
        name: "Hawkins National Laboratory",
        maps: "1",
        killer: "Demogorgon",
        release: "17 November 2021"
    },
    {
        name: "Grave of Glenvale",
        maps: "1",
        killer: "Deathslinger",
        release: "10 March 2020"
    },
    {
        name: "Silent Hill",
        maps: "1",
        killer: "The Executioner",
        release: "16 June 2020"
    },
    {
        name: "Raccoon City",
        maps: "3",
        killer: "The Nemesis",
        release: "15 June 2021"
    },
    {
        name: "Forsaken Boneyard",
        maps: "1",
        killer: "The Artist",
        release: "30 November 2021"
    },
    {
        name: "Withered Isle",
        maps: "1",
        killer: "The Dredge",
        release: "7 June 2022"
    },
    {
        name: "The Decimated Borgo",
        maps: "1",
        killer: "The Knight",
        release: "22 November 2022"
    }
];

for (let i = 0; i < realms.length; i++){
    let realm = document.querySelectorAll("main > .grid > .realm > .text")[i];
    let realmName = realm.getElementsByTagName("h2")[0];
    realmName.innerText = realms[i]["name"];
    for (let j = 0; j < realms.length; j++){
        let realmText = realm.getElementsByTagName("p")[j];
        if (j == 0){
            realmText.innerText = "Maps: " + realms[i]["maps"];
        }
        else if (j==1){
            realmText.innerText = "Killer: " + realms[i]["killer"];
        }
        else if (j==2){
            realmText.innerText = "Release: " + realms[i]["release"];
        }
    }
}

let realmsList = document.getElementsByClassName("realm");
let body = document.body;
for (let realm of realmsList) {
    let neco;
    realm.addEventListener("click" , (event) => {
        body.innerHTML += ('<article class="ahh">' + realm.innerHTML + '</article>');
        neco = document.getElementsByClassName("ahh")[0];
        neco.addEventListener("click" , (event) => {
            body.removeChild(neco);
        })
    })
}