import React from 'react';
import Picture from './Picture';
import List from './List';

const Wrapper = props => {
  const picUrl = "https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png"

  return (
    <div className='box wrapper'>
      <Picture
        src={picUrl}
        alt={'Clever EEs'}
        list={props.list}
      />
      <List
        items={props.list}
        handleMouseOver={listItemMouseOver}
      />
    </div>
  )
}

export default Wrapper;
