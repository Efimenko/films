import React from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import List from './list'
import {API_KEY, API_LINK, IMAGE_PATH} from '../constants'

const SinglePage = ({match}) => {
  const {params: {filmId}} = match

  const urlForFilm = `${API_LINK}/movie/${filmId}?api_key=${API_KEY}`;
  const urlForSimilar = `${API_LINK}/movie/${filmId}/similar?api_key=${API_KEY}`;

  const data = useFetch(urlForFilm);
  const similarFilmsData = useFetch(urlForSimilar, filmId);

  const {title, poster_path: posterPath, overview, genres} = data
  

  return Boolean(Object.keys(data).length) && (
    <article>
      <h2>{title}</h2>
      <img src={`${IMAGE_PATH}/${posterPath}`} alt={`Poster for ${title}`}/>
      {Boolean(genres.length) && (
        <ul>
          {genres.map(({id, name}) => {
            return (
              <li key={id}>
                <Link to={`/genre/${id}`}>{name}</Link>
              </li>
            )
          })}
          
        </ul>  
      )}
      
      <p>{overview}</p>
      { similarFilmsData && (<section>
        <h3>Similar</h3>
        <List data={similarFilmsData.results}/>
      </section>)}
    </article>
  )
}

export default SinglePage