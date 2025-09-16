export default class Greeter {
    private userName;

    // Class takes in a userName, defaults to empty string if none provided
    constructor(userName = '') {
        this.userName = userName;
    }

    // Method to return a greeting
    getGreeting() {
        if (this.userName) {
            return `Hello, ${this.userName}`;
        } else {
            return `Hello, Anonymous`;
        }
    }

    // Example of an async method that could be tested
    async getGreetingAsync() {
        return this.getGreeting();
    }
}