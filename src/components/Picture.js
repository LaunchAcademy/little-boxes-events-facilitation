import React from 'react';
import List from './List';

const Picture = props => {
  let pictureClick = event => {
    console.log('HEY THERE!!')
  }

  return (
    <div className='box picture'>
      <h1>Look At This Picture</h1>
      <img alt={props.alt} src={props.src} onClick={pictureClick}/>
    </div>
  )
}

export default Picture;
