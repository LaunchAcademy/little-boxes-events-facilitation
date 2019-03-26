import React from 'react';

const List = props => {
  let listItems = props.items.map(item => {
    let packagedMouseOver = () => {
      props.handleMouseOver(item.name)
    }
    return <li onMouseOver={packagedMouseOver} key={item.id}>{item.name}</li>
  })

  return (
    <div className='box list'>
      <h1>Read This List</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default List;
