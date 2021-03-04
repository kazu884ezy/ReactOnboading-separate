import React from 'react';
import {Provider} from 'react-redux'
import { render} from '@testing-library/react';
import SpecificDate from "../SpecificDate";
import {makeTestStore} from "../../testUtil";

describe('SpecificDate page test', () => {
    test('render correctly', () => {
        const store = makeTestStore();

        const { container } = render(<Provider store={store}><SpecificDate /></Provider>);
        expect(container.firstChild).toMatchSnapshot();
    })
})