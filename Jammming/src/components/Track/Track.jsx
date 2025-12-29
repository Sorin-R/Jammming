function Track({ track, onAdd, onRemove, isRemoval }) {
  return (
    <li>
      <div>
        <strong>{track.name}</strong>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>

      {isRemoval ? (
        <button onClick={() => onRemove(track)}>−</button>
      ) : (
        <button onClick={() => onAdd(track)}>+</button>
      )}
    </li>
  );
}

export default Track;