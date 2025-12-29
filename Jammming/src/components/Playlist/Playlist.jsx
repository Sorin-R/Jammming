import Tracklist from '../Tracklist/Tracklist';

function Playlist({ name, tracks, onNameChange, onRemove, onSave }) {
  return (
    <section>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
      />

      <h2>{name}</h2>

      <Tracklist
        tracks={tracks}
        onRemove={onRemove}
        isRemoval={true}
      />

      <button onClick={onSave}>
        Save Playlist
      </button>
    </section>
  );
}

export default Playlist;
