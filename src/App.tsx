import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import OverTime from "./pages/OverTime";
import SpecificDate from "./pages/SpecificDate";
import GlobalMenu from "./layouts/GlobalMenu";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
   alert: {
       maxWidth: '600px',
       margin: '20px auto',
       borderRadius: '5px'
   }
});

function App() {
    const loading = useSelector(state => state.common.loading);
    const error = useSelector(state => state.common.error);

    const classes = useStyles();

  return (
      <div className="App">
        <Router>
          <GlobalMenu />
          <div className="main">
              { loading && <Spinner fixed={true} />}
              { error && <Alert className={classes.alert} severity="error">{error}</Alert>}
            <Switch>
              <Route path="/exchange-rates-at-a-specific-date" component={SpecificDate} />
                <Route path="/exchange-rates-overtime" component={OverTime} />
                <Route path="/" exact component={SpecificDate} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
