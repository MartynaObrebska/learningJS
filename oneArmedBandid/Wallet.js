class Wallet {
    constructor(cash) {
        let _cash = cash;
        this.getCash = () => _cash;

        this.checkEnoughCash = (bid) => {
            if (_cash <= bid) {
                return true
            }
            return false
        };
        
        this.changeWallet = (value) => {
            _cash += value
        }
        
    }
}