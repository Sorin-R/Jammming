import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({ name, tracks, onNameChange, onRemove, onSave }) {
    return (
        <section className={styles.container}>
            <input type="text" value={name} onChange={onNameChange} />

            <h2>{name}</h2>

            <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true} />

            <button className={styles.saveButton} onClick={onSave}>
                Save Playlist
            </button>
        </section>
    );
}

export default Playlist;
