import React from 'react'
import useFetch from './hooks/useFetch'
import List from './list'
import {API_KEY, API_LINK, IMAGE_PATH} from './constants'

const SinglePage = ({match}) => {
  const filmId = match.params.id
  const urlForFilm = `${API_LINK}/movie/${filmId}?api_key=${API_KEY}`;
  const urlForSimilar = `${API_LINK}/movie/${filmId}/similar?api_key=${API_KEY}`;
  const filmData = useFetch(urlForFilm, filmId);
  const similarFilmsData = useFetch(urlForSimilar, filmId);

  return filmData && (
    <article>
      <h2>{filmData.title}</h2>
      <img src={`${IMAGE_PATH}/${filmData.poster_path}`} alt={`Poster for ${filmData.title}`}/>
      <p>{filmData.overview}</p>
      { similarFilmsData && (<section>
        <h3>Similar</h3>
        <List data={similarFilmsData.results}/>
      </section>)}
    </article>
  )
}

export default SinglePage