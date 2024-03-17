let ran_num = Math.floor(Math.random() * 100 + 1)
let gues = 1;
console.log(ran_num)

function check() {
    let user_number = document.getElementById('inp').value

    if (user_number == ran_num) {
        document.getElementById('ans').innerHTML = "you guess it right"
        document.getElementById('trys').innerHTML = "total guess: " + gues;
        let score = document.getElementById('score')

        let final_score = 100 - gues

        score.innerHTML = "score " + final_score

        let re_button = document.getElementById('btn').innerHTML = "<button>Restart the game</button>"

    }

    else if(user_number>100){
        document.getElementById('ans').innerHTML = "pls enter number between 1 to 100"
    }

    else if (user_number > ran_num) {
        document.getElementById('ans').innerHTML = "your num is greater than actual number"
        gues++;
    }

    else {
        document.getElementById('ans').innerHTML = "your num is less than actual number"
        gues++;
    }

}


document.getElementById('btn').onclick = function restart(){
    
    location.reload();
    
}




