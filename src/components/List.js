import React from 'react';

const List = props => {
  let listItems = props.items.map(item => {
    let handleMouseOver = event => {
      // alert(`${item.name} is the best space item!`) would also work, but in many circumstances, we would need the parent to be aware of it!
      props.handleMouseOver(item.name)
    }
    // What happens if I put this invocation into line 9's li: onMouseOver={props.handleMouseOver(item.name)}?
    // What if I hardcode key={5}?
    return <li onMouseOver={handleMouseOver} key={item.id}>{item.name}</li>
  })

  return (
    <div className='box list'>
      <h1>Here Is a List</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default List;
