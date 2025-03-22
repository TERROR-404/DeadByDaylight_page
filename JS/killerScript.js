let killers = [
    {
        name: "The Trapper",
        info: "The Trapper is great area-control killer because of his traps, which he can put anywhere on the map.",
        price: "Free",
        release: "14 June 2016"
    },
    {
        name: "The Hillbilly",
        info: "The Hillbilly is mobile killer. With his chainsaw he can run fast on the map and one-shot survivor.",
        price: "Free",
        release: "14 June 2016"
    },
    {
        name: "The Wraith",
        info: "The Wraith is grat stelth killer with his invicibility. Survivor can recognize him with ringing bell.",
        price: "Free",
        release: "14 June 2016"
    },
    {
        name: "The Nurse",
        info: "The Nurse is very mobile killer. Using her blinks she can move very fast on the map.",
        price: "Free",
        release: "18 August 2016"
    },
    {
        name: "The Huntress",
        info: "The Huntress can throw her hatchets on survivors so she can hit them on long range.",
        price: "Free",
        release: "27 July 2017"
    },
    {
        name: "The Hag",
        info: "The Hag can create a web of traps which can be triggered by survivors and than she can teleport to it.",
        price: "7\u20AC",
        release: "8 December 2016"
    },
    {
        name: "The Doctor",
        info: "The Doctor can stack shock on survivors. Then they can't do some tasks and they show their location.",
        price: "7\u20AC",
        release: "11 May 2017"
    },
    {
        name: "The Clown",
        info: "The Clown can throw bottles with noxious gas that can disorient, slow down and hinder survivors.",
        price: "7\u20AC",
        release: "12 June 2018"
    },
    {
        name: "The Spirit",
        info: "The Spirit using her ability can't se survivors and they can't see her. But scratch marks show their location.",
        price: "7\u20AC",
        release: "18 September 2018"
    },
    {
        name: "The Legion",
        info: "The Legion is mobile killer. She can vault over things and run while she must stab survivors more times.",
        price: "7\u20AC",
        release: "11 December 2018"
    },
    {
        name: "The Plague",
        info: "The Plague can vomit Vile Purge on survivors. Then they can't heal until they they wash off the Vile Purge.",
        price: "7\u20AC",
        release: "19 March 2019"
    },
    {
        name: "The Oni",
        info: "The Oni can collect blood orbs from injurd survivors then he can use Blood Fury which gives him charge.",
        price: "7\u20AC",
        release: "3 December 2019"
    },
    {
        name: "The Deathslinger",
        info: "The Deathslinger has gun whith chained harpoon with which he can catch survivors on long distance.",
        price: "7\u20AC",
        release: "10 March 2020"
    },
    {
        name: "The Blight",
        info: "The Blight can rush forward in a burst of speed. Rushing into obstacle longers the burst duration.",
        price: "7\u20AC",
        release: "8 September 2020"
    },
    {
        name: "The Twins",
        info: "The Wins are cooperative pair of killers, able to divide and hunt together like Charlotte and Victor.",
        price: "7\u20AC",
        release: "1 December 2020"
    },
    {
        name: "The Trickster",
        info: "The Trickster can throw his knives on survivors. He must hit multiple knives to kill the survivor.",
        price: "7\u20AC",
        release: "30 March 2021"
    },
    {
        name: "The Artist",
        info: "The Artist can summon crows which can be sent over the map revealing survivors by hitting them.",
        price: "7\u20AC",
        release: "30 November 2021"
    },
    {
        name: "The Dredge",
        info: "The Dredge is able to teleport between lockers and summon an overwhelming darkness.",
        price: "7\u20AC",
        release: "7 June 2022"
    },
    {
        name: "The Knight",
        info: "The Knight can summon Guard and send them to hunt survivors, damage objects or guard place.",
        price: "7\u20AC",
        release: "22 November 2022"
    },
    {
        name: "The Skull Merchant",
        info: "The Skull Merchant is a tactical Killer, able to place Drones that detect and debilitate survivors.",
        price: "12\u20AC",
        release: "7 March 2023"
    },
    {
        name: "The Shape",
        info: "The Shape can stalk unsuspecting survivors. The more he stalks, the stronger and faster he becomes.",
        price: "7\u20AC",
        release: "25 October 2016"
    },
    {
        name: "The Cannibal",
        info: "The Cannibal can use his chainsaw which immediately downs anyone in his path.",
        price: "5\u20AC",
        release: "14 September 2017"
    },
    {
        name: "The Nightmare",
        info: "The Nightmare can teleport between generators(or fake teleport) and summon fake pallets to dreamers.",
        price: "7\u20AC",
        release: "26 October 2017"
    },
    {
        name: "The Pig",
        info: "The Pig can jump from ambush and give Bear Traps to downed survivors which after some time kills them.",
        price: "7\u20AC",
        release: "23 January 2018"
    },
    {
        name: "The Ghostface",
        info: "The Ghostface can stalk survivors silently. After stacking up enough stalk he can one-hit survivor.",
        price: "5\u20AC",
        release: "18 June 2019"
    },
    {
        name: "The Executioner",
        info: "The Executioner is able to affect survivors with his Trail Of Torment which he can shoot from the ground.",
        price: "7\u20AC",
        release: "16 June 2020"
    },
    {
        name: "The Nemesis",
        info: "The Nemesis is receiving support from Zombies roaming around the map. They can damage survivors.",
        price: "12\u20AC",
        release: "15 June 2021"
    },
    {
        name: "The Cenobite",
        info: "The Cenobite can summon chain projectile he can control, if it hits survivor it catches him on the place.",
        price: "5\u20AC",
        release: "7 September 2021"
    },
    {
        name: "The Onryo",
        info: "The Onryo can teleport between TV's and dematerialize herself which turns her almost invisible.",
        price: "7\u20AC",
        release: "8 March 2022"
    },
    {
        name: "The Mastermind",
        info: "The Mastermind can vault faster, see other Survivors' Auras while carrying one.",
        price: "12\u20AC",
        release: "30 August 2022"
    },
    {
        name: "The Demogorgon",
        info: "The Demogorgon can teleport between his portals and jump on survivors from with his charge.",
        price: "unavailible",
        release: "17 November 2021"
    }
];

for (let i = 0; i < killers.length; i++){
    let killer = document.querySelectorAll("main > .grid > .killer > .text")[i];
    let killerName = killer.getElementsByTagName("h2")[0];
    killerName.innerText = killers[i]["name"];
    for (let j = 0; j < killers.length; j++){
        let killerText = killer.getElementsByTagName("p")[j];
        if (j == 0){
            killerText.innerText = killers[i]["info"];
        }
        else if (j==1){
            killerText.innerText = "Price: " + killers[i]["price"];
        }
        else if (j==2){
            killerText.innerText = "Release: " + killers[i]["release"];
        }
    }
}

let killersList = document.getElementsByClassName("killer");
let body = document.body;
for (let killer of killersList) {
    let neco;
    killer.addEventListener("click" , (event) => {
        body.innerHTML += ('<article class="ahh">' + killer.innerHTML + '</article>');
        neco = document.getElementsByClassName("ahh")[0];
        neco.addEventListener("click" , (event) => {
            body.removeChild(neco);
        })
    })
}