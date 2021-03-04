import React from 'react';
import {Provider} from 'react-redux'
import { render} from '@testing-library/react';
import OverTime from "../OverTime";
import {makeTestStore} from "../../testUtil";

describe('OverTime page test', () => {
    test('render correctly', () => {
        const store = makeTestStore();

        const { container } = render(<Provider store={store}><OverTime /></Provider>);
        expect(container.firstChild).toMatchSnapshot();
        // screen.debug();
        // screen.queryByTestId('test1');
        // screen.getByRole('');
       // expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    })

    // test('handleCurrencyChange', () => {
    //     const spy = jest.spyOn(OverTime, 'handleCurrencyChange');
    //     expect(spy.handleCurrencyChange('test')).toBe('test');
    // })

    // test('onChange', () => {
    //     const onChange = jest.fn();
    //     const store = makeTestStore();
    //
    //     render(<Provider store={store}><OverTime /></Provider>);
    //
    //     fireEvent.change(screen.getBy {
    //         target: {value: 'AUD'},
    //     })
    //
    //     expect(onChange).toHaveBeenCalledTimes(1);
    // })
})