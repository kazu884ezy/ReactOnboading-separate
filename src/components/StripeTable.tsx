import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 250,
        maxWidth: 1000,
        margin: 'auto',
        '& thead':{
            backgroundColor: theme.palette.primary.main,
        },
        '& tr:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    },
}));

const StripeTable = ({children}) => {
    const classes = useStyles();

    return (
        <Table className={classes.table}>
            {children}
        </Table>
    );
}

export default StripeTable;
