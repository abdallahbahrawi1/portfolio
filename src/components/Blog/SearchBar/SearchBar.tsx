import { useState } from 'react';
import './SearchBar.css'; 

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const performSearch = () => {
    // TODO: Implement search functionality
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={performSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
