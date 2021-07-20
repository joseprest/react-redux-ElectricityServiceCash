import React from 'react';
import { IntlProvider } from 'react-intl';
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './AppLayout';

function App() {
  return (
    <IntlProvider locale="en">
        <Router>
            <AppLayout />
        </Router>
    </IntlProvider>
  );
}

export default App;
