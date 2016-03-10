function Greetr() {
    this.greeting = "Hi are you, Fresh";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;