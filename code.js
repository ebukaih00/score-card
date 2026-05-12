let players = [
    { name: "Alice", score: 0 },
    { name: "Bob", score: 0 },
    { name: "Charlie", score: 0, }
]

let contEl = document.querySelector(".score-container")

for (let i=0; i<players.length; i++){
    contEl.innerHTML += `
    <div>
    <div class="details">
    <p > ${players[i].name}</p> 
   <p id= "score-${i}"> ${players[i].score}</p> </div>
   
   <div class="actions">
   <button onclick= "updateScore(${i}, 1)"> + </button>
     <button onclick= "updateScore(${i}, -1)"> - </button></div>
    
    </div>
    `
}



function updateScore(index, change){
    players[index].score +=change
    let scoreEl = document.getElementById("score-" + index)
    scoreEl.innerText = players[index].score

    if (players[index].score<0){
        scoreEl.style.color = "red"
    }

    else if (players[index].score>0)  {
        scoreEl.style.color = "green"
    }

    else {
        scoreEl.style.color = "black"
}
}