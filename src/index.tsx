import React from 'react';
import {render} from 'react-dom';

import App from './App';
import {ContextProvider} from './context/AppContext';

const rootElement = document.getElementById('root');

const Main = <ContextProvider><App/></ContextProvider>;

render(Main, rootElement);
