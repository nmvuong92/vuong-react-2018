import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store/store';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


//
import registerServiceWorker from './registerServiceWorker';
//components
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";


import history from './history';

const render = () => {
  //fancyLog();
  return ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
          <Switch>
          <Route path="/" component={App} />
          </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>,document.getElementById("root"));
};
render();
store.subscribe(render);
registerServiceWorker();
/*function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}*/