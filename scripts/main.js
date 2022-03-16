
let TeamName = document.querySelector('#userteam');
const root = document.getElementById('teamList');
let PlayerName = document.querySelector('#userplayern');
function tn() {

    
        let tag = document.createElement("div");
        tag.id = "card ${TeamName}";
        let taga = document.createElement("a")
        taga.href = "../html/team.html";
        taga.style = "text-decoration: none; color: inherit;";
        
        tag.addEventListener(onclick, teamPage());
        // TeamName variable didnt work
        taga.textContent = TeamName.value;
        tag.appendChild(taga);
        root.appendChild(tag);
    
    
    }

const show=()=>
    {  
    var div = document.getElementById("addNew"); 
    
        if (div.style.display !== "none") {  
            div.style.display = "none"; 
            
        }  
        else {  
            div.style.display = "block";  
            
        }  
    }
let teams = [
    {
        "tname": "KKR",
        "playercount": 10,
        "topbat": "QED",
        "topbowl": "foeka",
        "champion": 2
    },
    {
        "tname":"rr",
        "playercount": 12,
        "topbat": "AED",
        "topbowl": "fka",
        "champion":5
    },
]
let players = [
    {
        "id":0,
        "playerName":"Hardik Pandya",
        "from":"MI",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-rounder"
    }
]
if (typeof (Storage) !== "undefined") {
    let list = [];
    list.push(teams);
    list.push(players);
    localStorage.setItem("list", JSON.stringify(list));
}

function store() {
    let playerName = document.querySelector("#userplayern");
    let from = document.querySelector("#playerteam");
    let price = document.querySelector("#playerpr");
    let desc = document.querySelector("#desc");    
    let id = players[players.length-1].id;
    id++;
        players[id].push( "id", id,
    "playerName",playerName.value,
    "from",from.value,
    "price",price.value+" Cr",
    "desc", desc.value)
        
        

    localStorage.setItem("players",JSON.stringify(players));
}

document.addEventListener('click', teamPage())
    
function teamPage() {
    
    // let tag = document.createElement("div");
    // tag.id = "card ${TeamName}";
    // let taga = document.createElement("a")
    // taga.href = "../html/player.html";
    // taga.style = "text-decoration: none; color: inherit;";
    
    // tag.addEventListener(onclick, playerPage());
    // // TeamName variable didnt work
    // taga.textContent = PlayerName.value ? PlayerName.value: TeamName;
    // tag.appendChild(taga);
    // root.appendChild(tag);

    
}
    
function playerPage() {
    
}

function teamURL() {
    let icondiv = document.getElementById('icon');
    let tag = document.createElement("img");
    tag.src = "/img/kkr.png";
    tag.alt = "Team icon";
    icondiv.appendChild(tag);
}