class Game {
    constructor(startCash) {
        document.getElementById("spin").addEventListener("click", this.startGame.bind(this))
        this.inputBet = document.getElementById("bet")
        this.boards = [...document.querySelectorAll(".color")]
        this.resultNote = document.getElementById("result")
        this.spanCash = document.getElementById("cash")
        this.spanWin = document.getElementById("win")
        this.spanTotal = document.getElementById("total")
        this.spanWins = document.getElementById("wins")
        this.spanLosses = document.getElementById("losses")

        this.wallet = new Wallet(startCash);
        this.statistics = new Statistics();

        this.render()
    }

    render(colors = ['red', 'blue', 'yellow'], result="", resultColor="", cash = this.wallet.getCash(), cashWin = 0, stats = [0, 0, 0]) {
        this.boards.forEach((board, i) => board.style.backgroundColor = colors[i]);
        this.spanCash.textContent = cash;
         if (result) {
            result = `YOU WON!`;
            resultColor = "green";
        } else if (!result && result !== ""){
            result = `YOU LOST!`;
            resultColor = "red";
        } else return
        this.resultNote.textContent = result;
        this.resultNote.style.color = resultColor;
        this.spanWin.textContent = cashWin;
        this.spanTotal.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.inputBet.value = "";
    }

    startGame() {
       
        this.spin = new Spin();
        const bet = Math.floor(this.inputBet.value);
        if (bet <= 0) return alert('Bet must be greater than 0!')
        if (this.wallet.checkEnoughCash(bet)) return alert("You don't have enough cash!")
        const colors = this.spin.getSpinResult();
        const result = Rules.checkWin(colors);
        const cashWin = Rules.cashWin(result, bet);
        this.wallet.changeWallet(cashWin);
        const resultColor = "";
        this.statistics.addGame(result)
        const stats = this.statistics.showStats();

        this.render(colors, result, resultColor,this.wallet.getCash(), cashWin, stats);
    }
}
