import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import CurrencySelector from "../components/CurrencySelector";
import DatePicker from "../components/DatePicker";
import ExchangeRateTable from "../components/ExchangeRateTable";
import {Grid} from "@material-ui/core";
import {getRatesForDay, setSelectedCurrency, setSelectedDate} from "../actions/exchangeActions";
import {setError} from "../actions/commonActions";

const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
        fontSize:'24px',
    },
    main: {
        margin: '10px'
    }
});

const SpecificDate = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const ratesForSpecificDay = useSelector(state => state.exchanges.ratesForSpecificDay);
    const selectedCurrency = useSelector(state => state.exchanges.selectedCurrency);
    const selectedDate = useSelector(state => state.exchanges.selectedDate);

    useEffect(() => {
        dispatch(getRatesForDay(selectedCurrency, selectedDate));
    }, [dispatch, selectedDate, selectedCurrency])

    const handleCurrencyChange = currency => {
        dispatch(setSelectedCurrency(currency));
    }

    const handleDateChange = date => {
        if( date > new Date()){
            dispatch(setError('Cannot get data from future date'));
            return;
        }
        dispatch(setSelectedDate(date));
    }

    return (
        <div>
            <h1 className={classes.heading}>Exchange Rates for a Day</h1>
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <CurrencySelector onChange={handleCurrencyChange} initialValue={selectedCurrency}/>
                </Grid>
                <Grid item>
                    <DatePicker onChange={handleDateChange} initialDate={selectedDate} />
                </Grid>
            </Grid>
            <div className={classes.main}>
                <ExchangeRateTable exchangeRates={ratesForSpecificDay} />
            </div>
        </div>
    );
};

export default SpecificDate;
