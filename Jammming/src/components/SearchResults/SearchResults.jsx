import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ tracks, onAdd }) {
  return (
    <section>
      <h2>Search Results</h2>

      <Tracklist
        tracks={tracks}
        onAdd={onAdd}
        isRemoval={false}
      />
    </section>
  );
}

export default SearchResults;
