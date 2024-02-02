import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchEvents } from '../hooks/useFetchEvent';

const DetailPeople = () => {
  const getFilms = (films) => {
    let  filmList = films.map((film, i) => <li key={i}>{film}</li>);
    return filmList
  };
  const params = useParams();
  const id = params.id;
  const [data, error, state] = useFetchEvents({url: "https://swapi.dev/api/people/"+id});
  
  return (
    <div>
      {state === "loading" &&  <li><p>Loading...</p></li>}
      {state === "succeeded" &&
        
        <div>
          <h1>{data.name}</h1>
          <div><h2>film</h2> 
          <ul>
          {getFilms(data.films)}
          </ul>
          </div>
          <div>
            <h2>Couleur de cheuveux</h2>
            <p>{data.hair_color}</p>
          </div>
        </div>
}
    </div>
  );
};

export default DetailPeople;