import React from 'react';
import {TableHead, TableBody, TableRow, TableCell} from "@material-ui/core";
import StripeTable from "./StripeTable";

interface RatesOverTimeTableProps {
    overtimeRates : string[][]
}

const RatesOverTimeTable = ({overtimeRates} : RatesOverTimeTableProps) => {
    const renderResults = (dataArray: string[][]) => {
        if(dataArray.length === 0) return;

        return dataArray.map(data => {
            let date = data[0];
            let currency = Object.keys(data[1]);
            let value = +Object.values(data[1]);
            return (
                <TableRow key={date}>
                    <TableCell>{date}</TableCell>
                    <TableCell>{currency} {value.toFixed(2)}</TableCell>
                </TableRow>
            );
        })
    }

    return (
        <StripeTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Date
                    </TableCell>
                    <TableCell>
                        Value
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderResults(overtimeRates)}
            </TableBody>
        </StripeTable>
    );
};

export default RatesOverTimeTable;
