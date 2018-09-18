import React from 'react';
import Numbers from './Numbers';
import Picture from './Picture';

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>
        {props.paragraph}
      </p>
      <Numbers
        date={(new Date).toString()}
        random={parseInt(Math.random() * 100)}
      />
      <Picture
        src={'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'}
        alt={'Clever EEs'}
        list={props.list}
      />
    </div>
  )
}

export default Wrapper;
