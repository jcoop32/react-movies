import ActorName from '../ActorName/ActorName';
export default function ActorCard({ actors, index }) {
  //   console.log(actors.cast);
  //   const newActors = new Set(actors);
  //   const actor = newActors.map((n, idx) => (
  //     <ActorName name={n} key={idx} index={idx} />
  //   ));
  var actorName;
  actors.cast.forEach((name, idx) => {
    // actorName = name;
    actorName = <ActorName name={name} key={idx} />;
    console.log(name, idx);
  });
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img
            src={`https://picsum.photos/id/${index + 9}/200`}
            alt={`actor image`}
            draggable={false}
          />
        </div>
        <div className="card-content black-text">{actorName}</div>
      </div>
    </div>
  );
}
