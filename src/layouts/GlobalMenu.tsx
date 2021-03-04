import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const routeMap = {
    0 : "/exchange-rates-at-a-specific-date",
    1 : "/exchange-rates-overtime"
}

const GlobalMenu = () => {
    const [value, setValue] = useState(0);
    let history = useHistory()

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(routeMap[newValue]);
    };

    return (
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} >
                <Tab label="Specific Date"/>
                <Tab label="Over Time" />
            </Tabs>
        </AppBar>
    );
};

export default GlobalMenu;
