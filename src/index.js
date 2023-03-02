import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';

ReactDOM.render(
  <SpeechProvider appId='9d38efae-0e00-4a29-acce-a88ec65d4b6e' language='en-US'>
    <Provider>
    <App/>
  </Provider>
  </SpeechProvider>
,document.getElementById('root'));

