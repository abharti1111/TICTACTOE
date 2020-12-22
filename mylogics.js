const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let gameOver = 0
let turn = 0
function gameCompleteLogic() {
    let myArr = []
    let idName = "cell"
    let k = 0
    for( let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            let val = document.getElementById(idName.concat(i.toString(),j.toString())).innerHTML
            myArr.push((val==="")?k++:val)
        }
    }

    for (let i = 0;i<winningConditions.length; i++) {
        // console.log(winningConditions[i]);
        if(myArr[winningConditions[i][0]] === myArr[winningConditions[i][1]] && myArr[winningConditions[i][0]] === myArr[winningConditions[i][2]] ){
            gameOver = 1;
            break;
        }else{
            gameOver = k===0?-1:0
        }
    }

}

document.getElementById("grid").addEventListener('click',function(e){
    // console.log("clicked ", gameOver);
    if(gameOver === 0){
        e.target.innerHTML = turn===0?"X":"O"
        turn = 1-turn
        gameCompleteLogic()
        if(gameOver === -1){
            document.getElementById("result").innerHTML = "Oop's Its A Tie"
        }else if(gameOver === 1){
            console.log(gameOver);
            document.getElementById("result").innerHTML = turn===0?"player 2 winner":"player 1 winner"
        }
    }
    
    
})



