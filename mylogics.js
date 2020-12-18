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
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            var val = document.getElementById(idName.concat(i.toString(),j.toString())).innerHTML
            myArr.push((val==="")?k++:val)
        }
        
    }
    console.log(myArr);
    winningConditions.forEach(element => {
        if(myArr[element[0]] === myArr[element[1]] && myArr[element[0]] === myArr[element[2]] ){
            console.log("executed");
            // gameOver = 1
            document.getElementById("result").innerHTML = turn===0?"player 2 winner":"player 1 winner"
            return ;
        }else{
            // document.getElementById("result").innerHTML = "Oop's its a Tie"
            console.log(k);
            gameOver = gameOver===0?0:-1
            
            return;
        }
    })

}

document.getElementById("grid").addEventListener('click',function(e){
    // console.log(e);
    if(gameOver === 0 ){
        e.target.innerHTML = turn===0?"X":"O"
        turn = 1-turn
        gameCompleteLogic()
        if(gameOver === -1){
            document.getElementById("result").innerHTML = "Oop's its a Tie"
            // alert(turn===0?"player 2 winner":"player 1 winner")
        }

    }
})



