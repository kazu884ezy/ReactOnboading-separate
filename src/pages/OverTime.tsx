import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import CurrencySelector from "../components/CurrencySelector";
import {
    setBaseCurrency,
    setTargetCurrency,
    getRatesOverTime,
    setOrder
} from "../actions/overtimeActions";
import RatesOverTimeTable from "../components/RatesOverTimeTable";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
        fontSize:'24px',
    },
    main: {
        margin: '10px'
    },
    controls: {
        maxWidth: '1000px',
        margin: '10px auto'
    }
});

const OverTime = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const ratesForPeriod = useSelector(state => state.overtime.ratesForPeriod);
    const baseCurrency = useSelector(state => state.overtime.baseCurrency);
    const targetCurrency = useSelector(state => state.overtime.targetCurrency);
    const order = useSelector(state => state.overtime.order);

    useEffect(() => {
        dispatch(getRatesOverTime(baseCurrency, targetCurrency, order === 'desc'));
    }, [dispatch, baseCurrency, targetCurrency, order])

    const handleCurrencyChange = currency => {
        dispatch(setBaseCurrency(currency));
    }

    const handleTargetCurrencyChange = currency => {
        dispatch(setTargetCurrency(currency))
    }

    const handleOrderChange = (event : React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setOrder(event.target.value as string));
    }

    return (
        <div>
            <h1 className={classes.heading}>Exchange Rates Over Time</h1>
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <CurrencySelector onChange={handleCurrencyChange} initialValue={baseCurrency} />
                </Grid>
                <Grid item>
                    <CurrencySelector onChange={handleTargetCurrencyChange} initialValue={targetCurrency} />
                </Grid>
            </Grid>
            <div className={classes.main}>
                <div className={classes.controls}>
                    <FormControl>
                        <InputLabel>Order Date:</InputLabel>
                        <Select
                            value={order}
                            onChange={handleOrderChange}
                        >
                            <MenuItem value='desc'>descending</MenuItem>
                            <MenuItem value='asc'>ascending</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <RatesOverTimeTable overtimeRates={ratesForPeriod} />
            </div>
        </div>
    );
};

export default OverTime;