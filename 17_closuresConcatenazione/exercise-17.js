function calculate() {
    let a = 0;
    const operazioni = {
        add: function(b) {
            a += b;
            return this;      
        },
        sub: function(b) {
            a -= b;
            return this;
        },
        multiply: function(b) {
            a *= b;
            return this;
        },
        divide: function(b) {
            a /= b;
            return this;
        },
        printResult: function() {
            console.log(a)
        }

    }
    return operazioni;

}


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
