import React from 'react';
import { render, screen} from '@testing-library/react';
import Spinner from "../Spinner";

describe('Spinner test', () => {
    test('render correctly', () => {
        const { container } = render(<Spinner />);
        expect(container.firstChild).toMatchSnapshot();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    })
})