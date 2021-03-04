import React from 'react';
import { render, screen} from '@testing-library/react';
import ExchangeRateTable from "../ExchangeRateTable";

const testData = [
    ['USD', '1.5'],
    ['EUR', '2.0'],
    ['AUD', '1.1'],
    ['JPY', '0.03'],
]

describe('ExchangeRateTable test', () => {
    test('render correctly', () => {
        const { container } = render(<ExchangeRateTable exchangeRates={testData} />);
        expect(container.firstChild).toMatchSnapshot();
       // screen.debug();
        expect(screen.getByText('USD')).toBeInTheDocument();
        expect(screen.getByText('1.50')).toBeInTheDocument();
    })
})