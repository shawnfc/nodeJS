function Greetr() {
    this.greeting = "Hi are you, Shawn";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();