import React from 'react';
import {render, screen} from '@testing-library/react';
import App from "../App";
import {makeTestStore} from "../testUtil";
import {Provider} from "react-redux";

describe('App page test', () => {
    test('render correctly', () => {
        const store = makeTestStore();

        const { container } = render(<Provider store={store}><App /></Provider>);
        expect(container.firstChild).toMatchSnapshot();
    })
})