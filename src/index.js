import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ArrayInput from './class3/inputandarray';
import TrueFalse from './class3/truefalse';
import MCQ from './class4/mcq';
import Mapper from './class5/mapper';
import Fetcher from './class6/fetcher';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Fetcher />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
