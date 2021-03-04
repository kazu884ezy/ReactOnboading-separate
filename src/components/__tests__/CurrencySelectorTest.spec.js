import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CurrencySelector from "../CurrencySelector";

describe('CurrencySelectorTest', () => {
    test('render', () => {
        render(<CurrencySelector initialValue={'NZD'} />);

        expect(screen.getByText('NZD')).toBeInTheDocument();
    })

    test('calls the onChange callback handler', () => {
        const onChange = jest.fn();

        render(<CurrencySelector onChange={onChange} initialValue={'NZD'} />);

      //  screen.debug();

        fireEvent.change(screen.getByDisplayValue('NZD'), {
            target: {value: 'AUD'},
        })

        expect(onChange).toHaveBeenCalledTimes(1);
    })
})