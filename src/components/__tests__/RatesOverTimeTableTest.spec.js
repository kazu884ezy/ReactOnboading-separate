import React from 'react';
import {render, screen} from '@testing-library/react';
import RatesOverTimeTable from "../RatesOverTimeTable";

const testData = [
    ['2020-10-30', {AUD:1.1}],
    ['2020-10-31', {AUD:1.12}],
]

describe('RatesOverTimeTable test', () => {
    test('render correctly', () => {
        const { container } = render(<RatesOverTimeTable overtimeRates={testData} />);
        expect(container.firstChild).toMatchSnapshot();
        // screen.debug();
        expect(screen.getByText('AUD 1.10')).toBeInTheDocument();
        expect(screen.getByText('AUD 1.12')).toBeInTheDocument();
    })
})