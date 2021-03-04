import React from 'react';
import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    cover: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        top: 0,
        left: 0,
        position: 'absolute',
    },
    fix: {
        top: 0,
        left: 0,
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, .2)',
    }
}));

interface SpinnerProps {
    cover? : boolean,
    fixed? : boolean
}

export default ({ cover=false, fixed=false } : SpinnerProps) => {
    const classes = useStyles();
    const positionClass = fixed ? classes.fix : cover ? classes.cover : '';
    return (
        <div className={`${classes.root} ${positionClass}`}><CircularProgress /></div>
    )
}