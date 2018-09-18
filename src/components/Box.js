import React from 'react';

const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let content
  if (props.paragraph) {
    content = <p>{props.paragraph}</p>
  } else if (props.imgUrl) {
    content = <img src={props.imgUrl} />
  } else if (props.items) {
    const listItems = props.items.map(item => {
      return <li key={item.id}>{item.name}</li>
    })
    content = <ul>{listItems}</ul>
  } else if (props.random) {
    content = <p>
      Today's date is
      <strong>&nbsp;{props.date}&nbsp;</strong>
      and
      <em>&nbsp;{props.random}&nbsp;</em>
      is a random number.
    </p>
  }

  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {content}
    </div>
  )
}

export default Box;
