import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import App from './App'; // Import the App component as this is what's being tested

describe("App Component Tests", () => {
    it('renders the app', () => {
        // Render the App component
        render(<App />);
        // Check that the text "count" (regex expression, case insensitive) is in the document
        expect(screen.getByText(/count/i)).toBeInTheDocument()
    })
})
