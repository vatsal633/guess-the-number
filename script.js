let ran_num = Math.floor(Math.random() * 100 + 1)
let gues = 0;
console.log(ran_num)

function check() {
    let user_number = document.getElementById('inp').value

    if (user_number == ran_num) {
        document.getElementById('ans').innerHTML = "You Guess It Right"
        document.getElementById('ans').style.color = 'green'
        document.getElementById('ans').style.fontWeight = '600'
        document.getElementById('ans').style.fontSize = '23px'

        document.getElementById('trys').innerHTML = "Total Guess: " + gues;
        let score = document.getElementById('score')                        

        let final_score = 100 - gues

        score.innerHTML = "Your Score Is: " + final_score

        let re_button = document.getElementById('btn').innerHTML = "<button>Restart The Game</button>"

    }

    else if(user_number>100){
        document.getElementById('ans').innerHTML = "Pls Enter Number Between 1 to 100"
    }

    else if (user_number > ran_num) {
        document.getElementById('ans').innerHTML = "Your Num Is Greater Than Actual Number"
        gues++;
    }

    else {
        document.getElementById('ans').innerHTML = "Your Num Is Less Than Actual Number"
        gues++;
    }

}


document.getElementById('btn').onclick = function restart(){
    
    location.reload();
    
}
