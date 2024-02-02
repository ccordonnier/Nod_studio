import React from 'react';
import { useFetchEvents } from '../hooks/useFetchEvent';
import { Link } from 'react-router-dom';

const AllPeople = () => {
  const [data, error, state] = useFetchEvents({url: "https://swapi.dev/api/people"});
  return (
    <div>
      <ul>
        {state === "loading" &&  <li><p>Loading...</p></li>}
        {state === "succeeded" && data.results.map(people => {
          return <li key={(people.name).replace(' ','_')}><Link to={"/people/"+people.url.slice((people.url.length-2), people.url.length)}>{people.name} salut</Link></li>
        })}
        </ul>
    </div>
  )
};

export default AllPeople;