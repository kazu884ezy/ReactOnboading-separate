import React from 'react';
import DatePicker from '../DatePicker';
import {fireEvent, render, screen} from '@testing-library/react';

describe('DatePickerTest', () => {
    test('render', () => {
        render(<DatePicker />);
        expect(screen.getByLabelText('change date')).toBeInTheDocument()
    })

    test('calls the onChange callback handler', () => {
        const onChange = jest.fn();

        render(<DatePicker onChange={onChange} />);

         // screen.debug();
         // screen.getByRole('');

        fireEvent.change(screen.getByRole('textbox'), {
            target: {value: new Date()},
        })

        expect(onChange).toHaveBeenCalledTimes(1);
    })
})