import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';
import Box from './components/Box';

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

let wrapperParagraph = 'This is a paragraph of stuff that doesn\'t need to be translated.'

ReactDOM.render(
  <div>
  <Wrapper
    boxClass='wrapper'
    header='I Am the Wrapper'
    paragraph={wrapperParagraph}
    list={list}
  />
  </div>,
  document.getElementById('app')
);


// ReactDOM.render(
//   <div>
//     <Box
//       boxClass='wrapper'
//       header='I Am the Wrapper'
//       paragraph={wrapperParagraph}
//     />
//     <Box
//       boxClass='box picture'
//       header='Look at This Picture'
//       imgUrl={'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'}
//     />
//     <Box
//       boxClass='box list'
//       header='Here Is a List'
//       items={list}
//     />
//     <Box
//       boxClass='box numbers'
//       header={`Today's Date and Random Number`}
//       date={(new Date).toString()}
//       random={parseInt(Math.random() * 100)}
//     />
//   </div>,
//   document.getElementById('app')
// );
