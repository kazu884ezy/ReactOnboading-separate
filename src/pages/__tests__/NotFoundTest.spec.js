import React from 'react';
import { render, screen} from '@testing-library/react';
import NotFound from "../NotFound";

describe('NotFound page test', () => {
    test('render correctly', () => {
        render(<NotFound />);
        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    })
})