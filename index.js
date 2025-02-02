function rollDice(){
    const numoOfDice = document.getElementById("numOfDice").value
    const diceResult = document.getElementById("diseResult")
    const diceImg = document.getElementById("diceImg")
    const values = []
    const images = []

    for(let i = 0; i < numoOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(` <img src="img/${value}.svg">`)
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`
    diceImg.innerHTML = images.join('')
}