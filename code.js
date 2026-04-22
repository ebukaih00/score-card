let players = [
    { name: "Alice", score: 0 },
    { name: "Bob", score: 0 },
    { name: "Charlie", score: 0, }
]

// let scoreEl = document.querySelector(".score-container")


// for(let i=0; i<players.length; i++){
//     scoreEl.innerHTML += 
//     `
//     <div>
//     <p>${players[i].name}</p>
//      <p id="score-${i}">${players[i].score}</p>
//      <button onclick="updateScore(${i},1)"> +</button>
//      <button onclick="updateScore(${i},-1)"> -</button>
//      </div>
//     `
// }

// function updateScore(index, change) {

//     // 1. update the score in the array
//     players[index].score += change

//     // 2. find the right score element on screen
//     let scoreEl = document.getElementById("score-" + index)

//     // 3. update what it shows 
//     scoreEl.innerText = players[index].score

//     // 4. change colour based on score value
//     if(players[index].score > 0) {
//         scoreEl.style.color = "green";
//     } else if (players[index].score < 0 ) {
//         scoreEl.style.color = "red"; 
//     } 
//     else {
//       scoreEl.style.color = "black";
//     }
// }






// scoreEl.innerHTML += `
//     <div>
//         <p>${players[i].name}</p>
//         <p id="score-${i}">${players[i].score}</p>
//         <button onclick="updateScore(${i}, 1)">+</button>
//         <button onclick="updateScore(${i}, -1)">-</button>
//     </div>
// `