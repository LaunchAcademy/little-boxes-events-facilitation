import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/app.scss'
import Wrapper from './components/Wrapper';

let list = [
  {
    id: 1,
    name: 'Asteroids'
  },
  {
    id: 2,
    name: 'Comets'
  },
  {
    id: 3,
    name: 'Moon'
  },
  {
    id: 4,
    name: 'Planets'
  },
  {
    id: 5,
    name: 'Stars'
  },
  {
    id: 6,
    name: 'Sun'
  }
]

ReactDOM.render(
  <Wrapper
    boxClass='wrapper'
    list={list}
  />,
  document.getElementById('app')
);
