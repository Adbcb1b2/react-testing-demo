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
})
