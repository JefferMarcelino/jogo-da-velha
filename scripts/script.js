const inputs = document.querySelectorAll("div.input")
const body = document.querySelector("body")

var wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const paragrapth = document.createElement("p")
body.appendChild(paragrapth)

const alreadyPlayed = []

inputs.forEach(input => {
    input.addEventListener("click", e => {
        if (e.target.innerHTML === "") {
            paragrapth.innerHTML = ""

            e.target.innerHTML = "X"

            alreadyPlayed.push(Number(e.target.classList[1]))
            
            if (alreadyPlayed.length !== 9) {
                do {
                    var computerPlay = Math.floor(Math.random() * 9)
                } while(alreadyPlayed.includes(computerPlay))
                
                inputs[computerPlay].innerHTML = "O"
                alreadyPlayed.push(computerPlay)

            }
            
        } else {
            paragrapth.innerHTML = "Jogada Inválida!"
        }
        
        if (alreadyPlayed.length === 9) {
            /* Horizontal */
            if (whoIsTheWinner(1, 0)) {
                paragrapth.innerHTML = `${inputs[0].innerHTML} Ganhou!`
            } 
            
            if (whoIsTheWinner(1, 3)) {
                paragrapth.innerHTML = `${inputs[3].innerHTML} Ganhou!`
            }

            if (whoIsTheWinner(1, 6)) {
                paragrapth.innerHTML = `${inputs[6].innerHTML} Ganhou!`
            }

            /* Vertical */
            if (whoIsTheWinner(3, 0)) {
                paragrapth.innerHTML = `${inputs[0].innerHTML} Ganhou!`
            } 
            
            if (whoIsTheWinner(3, 1)) {
                paragrapth.innerHTML = `${inputs[1].innerHTML} Ganhou!`
            }

            if (whoIsTheWinner(3, 2)) {
                paragrapth.innerHTML = `${inputs[2].innerHTML} Ganhou!`
            }

            /* Sla */
            /* Horizontal */
            if (whoIsTheWinner(4, 0)) {
                paragrapth.innerHTML = `${inputs[0].innerHTML} Ganhou!`
            } 
            
            if (whoIsTheWinner(2, 2)) {
                paragrapth.innerHTML = `${inputs[2].innerHTML} Ganhou!`
            }
        }
    })
})


const whoIsTheWinner = (step, initialValue) => {
    var count = initialValue
    var result = []

    var x = 0
    
    while (x < 3) {        
        if (inputs[initialValue].innerHTML === inputs[count].innerHTML) {
            result.push(true)
        } else {
            result.push(false)
        }

        count += step

        x++
    }

    var howManyTrue = 0
    result.forEach(answer => {
        if (answer === true) {
            howManyTrue++
            console.log(result)
            console.log(answer)
            console.log(howManyTrue)
        }
    })

    if (howManyTrue === 3) {
        return true
    }
    return false
}