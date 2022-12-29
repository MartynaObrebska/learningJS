class Spin {
    constructor() {
        this.options = ["red", "yellow", "blue"];
        let _result = this.spinResult();
        this.getSpinResult = () => _result;
    }

    spinResult() {
        let colors = [];
        for (let i=0; i < this.options.length; i++) {
            const color = this.options[Math.floor(Math.random() * this.options.length)];
            colors.push(color);
        }
        return colors;
    }

}