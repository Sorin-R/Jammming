import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

function SearchResults({ tracks, onAdd }) {
    return (
        <section className={styles.container}>
            <h2>Search Results</h2>
            <Tracklist tracks={tracks} onAdd={onAdd} isRemoval={false} />
        </section>
    );
}

export default SearchResults;
