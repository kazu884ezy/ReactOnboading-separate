import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import GlobalMenu from "../GlobalMenu";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('GlobalMenu test', () => {
    test('render correctly', () => {
        render(<GlobalMenu />);
        expect(screen.getByText('Specific Date')).toBeInTheDocument();
        expect(screen.getByText('Over Time')).toBeInTheDocument();
    });

    test('clicking specific date will call push with appropriate parameter', () => {
        render(<GlobalMenu />);
        fireEvent.click(screen.getByText('Specific Date'))

        expect(mockHistoryPush)
            .toHaveBeenCalledWith('/exchange-rates-at-a-specific-date');
    })

    test('clicking overtime will call push with appropriate parameter', () => {
        render(<GlobalMenu />);
        fireEvent.click(screen.getByText('Over Time'))

        expect(mockHistoryPush)
            .toHaveBeenCalledWith('/exchange-rates-overtime');
    })
})