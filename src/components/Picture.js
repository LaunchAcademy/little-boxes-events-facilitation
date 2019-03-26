import React from 'react';
import List from './List';

const Picture = props => {
  let pictureClick = banana => {
    console.log('HEY THERE!!')
    console.warn(`You clicked on ${banana.target.alt}`)
  }

  return (
    <div className='box picture'>
      <h1>Look At This Picture</h1>
      <img alt={props.alt} src={props.src} onClick={pictureClick}/>
    </div>
  )
}

export default Picture;
