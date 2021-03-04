import React from 'react';
import { TableHead, TableBody, TableRow, TableCell} from "@material-ui/core";
import StripeTable from "./StripeTable";

// const staticData = [
//     ['USD', '1.5'],
//     ['EUR', '2.0'],
//     ['AUD', '1.1'],
//     ['JPY', '0.03'],
// ]

interface DatePickeExchangeRateTableProps {
    exchangeRates : string[][]
}

const ExchangeRateTable = ({exchangeRates} : DatePickeExchangeRateTableProps) => {
    const renderResults = (dataArray: string[][]) => {
        return dataArray.map(data => {
            return (
                <TableRow key={data[0]}>
                    <TableCell>{data[0]}</TableCell>
                    <TableCell>{(+data[1]).toFixed(2)}</TableCell>
                </TableRow>
            );
        })
    }

    return (
        <StripeTable>
            <TableHead >
                <TableRow>
                    <TableCell>
                        Currency
                    </TableCell>
                    <TableCell>
                        Value
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderResults(exchangeRates)}
            </TableBody>
        </StripeTable>
    );
};

export default ExchangeRateTable;
