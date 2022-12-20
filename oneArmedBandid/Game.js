class Game {
    constructor() {
        document.getElementById("spin").addEventListener("click", this.startGame.bind(this))
        const inputBet = document.getElementById("bet")
        const boards = [...document.querySelectorAll(".color")]
        const resultNote = document.getElementById("result")
        const spanCash =document.getElementById("cash")
        const spanWin =document.getElementById("win")
        const spanTotal =document.getElementById("total")
        const spanWins =document.getElementById("wins")
        const spanLosses =document.getElementById("losses")

        const wallet = new Wallet();
        const statistics = new Statistics();
    }

    render() {

    }

    startGame() {
        this.draw = new Draw()
    }
}

const game = new Game;