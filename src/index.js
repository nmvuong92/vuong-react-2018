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

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";
import common_vi from "./translations/vi/common.json";



import {
    addLocaleData,
    injectIntl,
    IntlProvider,
    FormattedRelative,
} from 'react-intl';
import en_intl from 'react-intl/locale-data/en';
import de_intl from 'react-intl/locale-data/fr';
import vi_intl from 'react-intl/locale-data/es';

addLocaleData([...en_intl, ...de_intl, ...vi_intl]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const _xlang = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

let _lang = localStorage.getItem('lang');
if(_lang != "en" && _lang != "vi" && _lang != "de"){
  _lang = "en";
}
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: _lang,                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      de: {
          common: common_de
      },
      vi: {
          common: common_vi
      },
  },
});


const render = () => {
  //fancyLog();
  return ReactDOM.render(<Provider store={store}>
   <I18nextProvider i18n={i18next}>
    <IntlProvider
          locale={_xlang}
      >
        <ConnectedRouter history={history}>
          <Router>
              <Switch>
              <Route path="/" component={App} />
              </Switch>
          </Router>
        </ConnectedRouter>
      </IntlProvider>
    </I18nextProvider>
  </Provider>
  ,document.getElementById("root"));
};
render();
store.subscribe(render);
registerServiceWorker();
/*function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}*/