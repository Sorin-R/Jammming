import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
    return (
        <ul className={styles.list}>
            {tracks.map(track => (
                <Track
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                />
            ))}
        </ul>
    );
}

export default Tracklist;
