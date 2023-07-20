import { useState } from 'react';
import ActorCard from '../../Components/ActorCard/ActorCard';
export default function ActorListPage({ movies }) {
  // const movieSet = new Set(movies);
  // console.log(movieSet);
  // const actors = Array.from(movieSet);
  // console.log(actors);
  // console.log(movies[0].cast);
  // const cast =
  const actorItem = movies.map((a, idx) => (
    <ActorCard actors={a} key={idx} index={idx} />
  ));
  // console.log(actorItem);
  return <ul className="row container">{actorItem}</ul>;
}
