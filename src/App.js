import React from 'react';
import './App.css';
import Root from './Root';
import createHistory from 'history/createBrowserHistory';


function App() {
  return (
    <div className="App">
        <Root />
    </div>
  );
}

export const history = createHistory({ forceRefresh: true })
export default App;
