import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="ac1a6dfa-1151-4a16-bdf0-e1d10d802022" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>, document.getElementById('root'));