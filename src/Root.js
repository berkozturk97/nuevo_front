import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import CreatePage from './Pages/CreatePage';
import NavigationBar from './Components/NavBar';

export const history = createHistory({ forceRefresh: true })

class Root extends React.Component {
    render() {
        return (
            <Router history={history}>
                <NavigationBar />
                <Switch>
                    <Route path="/" exact initial component={MainPage} />
                    <Route path="/detail" exact component={DetailPage} />
                    <Route path="/create" exact component={CreatePage} />

                </Switch>

            </Router>
        )
    }
}
export default Root;