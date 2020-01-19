import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import MainPage from './container/mainpage/mainpage';
import reducer from './reducers/combinedreducers';
import './App.css'

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  );
}

export default App;
