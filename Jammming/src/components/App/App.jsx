import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import RapidAPI from '../../utils/RapidAPI';
import styles from './App.module.css';

function App() {
    const [playlistName, setPlaylistName] = useState('My Playlist');

    const [playlistTracks, setPlaylistTracks] = useState([]);

    const [searchResults, setSearchResults] = useState([]);

    const handleNameChange = e => {
        setPlaylistName(e.target.value);
    };

    const addTrack = track => {
        const alreadyInPlaylist = playlistTracks.some(
            savedTrack => savedTrack.id === track.id
        );

        if (!alreadyInPlaylist) {
            setPlaylistTracks(prevTracks => [...prevTracks, track]);
        }
    };

    const removeTrack = track => {
        setPlaylistTracks(prevTracks =>
            prevTracks.filter(savedTrack => savedTrack.id !== track.id)
        );
    };

    const savePlaylist = () => {
        const trackUris = playlistTracks.map(track => track.uri);

        console.log('Saving playlist:', trackUris);

        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
    };

    const search = async term => {
        const results = await RapidAPI.search(term);
        setSearchResults(results);
    };

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <SearchBar onSearch={search} />

                <div className={styles.main}>
                    <SearchResults tracks={searchResults} onAdd={addTrack} />

                    <Playlist
                        name={playlistName}
                        tracks={playlistTracks}
                        onNameChange={handleNameChange}
                        onRemove={removeTrack}
                        onSave={savePlaylist}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
