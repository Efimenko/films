import React from 'react'
import {Link} from 'react-router-dom'

const List = ({data}) => {
  console.log({data})
  return data && (
    <ul className="films-list">
      {data.map(({ title, id }) => {
        return <li key={id} className="films-list__item">
          <Link to={`/film/${id}`}>{title}</Link>
        </li>;
      })}
    </ul>
  )
}

export default List