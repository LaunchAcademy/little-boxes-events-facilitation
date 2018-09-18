import React from 'react';
import List from './List';

const Picture = props => {
  let pictureClick = event => {
    alert('HEY THERE!!')
  }

  let listItemMouseOver = item => {
    alert(`${item} is the best space item!`)
  }

  return (
    <div className='box picture'>
      <h1>Look at This Picture</h1>
      <img alt={props.alt} src={props.src} onClick={pictureClick}/>
      <List
        items={props.list}
        handleMouseOver={listItemMouseOver}
      />
    </div>
  )
}

export default Picture;
