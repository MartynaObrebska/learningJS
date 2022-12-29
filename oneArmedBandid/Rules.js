class Rules {
    static cashWin(result, bid) {
        if(result>0) return bid*result;
        else return -bid
    }

    static checkWin(colors) {
        if (colors[0] !== colors[1] && colors[0] !== colors[2] && colors[1] !== colors[2]) return 5;
        else if (colors[0] === colors[1] && colors[1] === colors[2]) return 3; 
        else return 0;
    }
}