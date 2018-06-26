import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root'));
=======
/* //Example of simple JSx rendering
const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
} //known as arrow function could just replace () => with the word "function".. Same thing

const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>; */


ReactDOM.render(<App />, document.getElementById('root')); //App i sa fully funational React Component
>>>>>>> 8fafa78abc2b0abcffc2c3df379b137d0e0faa51
registerServiceWorker();
