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
let gameOver = false
let turn = 0
function gameCompleteLogic() {
    let myArr = []
    let idName = "cell"
    let k = 0
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            var val = document.getElementById(idName.concat(i.toString(),j.toString())).innerHTML
            myArr.push((val==="")?k:val)
            k++
        }
        
    }
    winningConditions.forEach(element => {
        if(myArr[element[0]] === myArr[element[1]] && myArr[element[0]] === myArr[element[2]] ){
            gameOver = true
            return 
        }
    })

}

document.getElementById("grid").addEventListener('click',function(e){
    // console.log(e);
    if(gameOver === false){
        e.target.innerHTML = turn===0?"X":"O"
        turn = 1-turn
        gameCompleteLogic()
        if(gameOver === true){
            document.getElementById("result").innerHTML = turn===0?"player 2 winner":"player 1 winner"
            // alert(turn===0?"player 2 winner":"player 1 winner")
        }

    }
})



