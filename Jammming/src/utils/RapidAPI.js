const RapidAPI = {
  getHeaders() {
    return {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
    };
  },

  async search(term) {
    if (!term) return [];

    const url = `https://${import.meta.env.VITE_RAPIDAPI_HOST}/search/?q=${encodeURIComponent(
      term
    )}&type=tracks&limit=10`;

    const response = await fetch(url, {
      headers: this.getHeaders(),
    });

    const jsonResponse = await response.json();

    // Guard against unexpected responses
    if (!jsonResponse.tracks?.items) {
      return [];
    }

    // 🔑 Correct RapidAPI (spotify23) mapping
    return jsonResponse.tracks.items.map(item => {
      const track = item.data;

      return {
        id: track.id,
        name: track.name,
        artist: track.artists.items[0]?.profile.name || 'Unknown Artist',
        album: track.albumOfTrack?.name || 'Unknown Album',
        uri: track.uri,
      };
    });
  },
};

export default RapidAPI;