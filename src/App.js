import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { theme } from './theme';
import { configureStore } from './store';
import routes from './routes';
import StylesProvider from './components/StylesProvider';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/main.scss';

const history = createBrowserHistory();
const store = configureStore();

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router history={history}>
              {renderRoutes(routes)}
            </Router>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
