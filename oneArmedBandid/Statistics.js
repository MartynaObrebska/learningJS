class Statistics {
    constructor() {
       this.stats = [];
    }

    addGame(result) {
        let game = result; 

        this.stats.push(game);
    }
    
    showStats() {
        let total = this.stats.length;
        let wins = this.stats.filter(stat => stat).length ;
        let losess = total - wins;
        return [total, wins, losess]
    }
    
}