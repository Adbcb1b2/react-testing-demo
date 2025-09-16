import { describe, expect, it} from 'vitest';
import Greeter from './Greeter'; // Import the Greeter class as this is what's being tested

describe('Test the Greeter Class', () => {
    it('provides a greeting', () => {
        // Create an instance of the greeting class, passing John Doe to the constructor
        const greeter = new Greeter('John Doe');
        // Call the method to get the greeting
        const greeting = greeter.getGreeting();
        // Check the output against the expected value
        expect(greeting).toBe('Hello, John Doe');
    });

    // Check a default greeting is provided when no name is given
    it('provides a default greeting when no name is given', () => {
        const greeter = new Greeter();
        const greeting = greeter.getGreeting();
        expect(greeting).toBe('Hello, Anonymous');
    });

    // Example of testing an async method
    it('Can generate a greeting asynchronously', async () => {
        const greeter = new Greeter('John Doe');
        const greeting = await greeter.getGreetingAsync();
        expect(greeting).toBe('Hello, John Doe');
    });

});