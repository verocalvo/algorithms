var mySqrt = function(x) {
    let rootStr = Math.sqrt(x).toString();
    for (let i = 0; i < rootStr.length; i += 1) {
        if (rootStr[i] === '.') {
            return Number(rootStr.slice(0, i));
        }
    }
    return Number(rootStr);
};

mySqrt(4);
