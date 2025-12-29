import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Search for a song"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </section>
  );
}

export default SearchBar;