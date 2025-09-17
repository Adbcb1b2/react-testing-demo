import {describe, expect, it} from 'vitest';
import {render, cleanup, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import App from './App'; // Import the App component as this is what's being tested

describe("App Component Tests", () => {
    it('renders the app', () => {
        // Render the App component
        render(<App />);
        // Check that the text "count" (regex expression, case insensitive) is in the document
        expect(screen.getByText(/input/i)).toBeInTheDocument()
    })

    it('renders two message elements', () => {
        cleanup(); // Clean up the DOM before each test
        render(<App />);
        const messageElements = screen.getAllByText(/message:/i); // Get all elements with text "Message:"
        expect(messageElements.length).toBe(2); // Expect there to be exactly two such elements
    })

    it('has a greeting component', () => {
        cleanup();
        render(<App />);
        const greetingComponent = screen.getByText(/Anonymous/i); // Check for the default greeting
        expect(greetingComponent).toBeInTheDocument();
    })

    it('changing the input updates the message', () => {
        cleanup();
        render(<App />);
        const input = screen.getByLabelText(/user name/i); // Get the input element by its label
        fireEvent.change(input, {target: {value: 'Ada Lovelace '}}); // Simulate changing the input value
        const message1 = screen.getByText(/Hello, Ada Lovelace/i); // Check for the updated greeting
        expect(message1).toBeInTheDocument();
        const clearButton = screen.getByText(/clear name/i); // Get the clear button
        fireEvent.click(clearButton); // Simulate clicking the clear button
        const message2 = screen.getByText(/Hello, Anonymous/i); // Check for the default greeting again
        expect(message2).toBeInTheDocument();
    })
})
