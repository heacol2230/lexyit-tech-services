import React, { useState } from 'react';
import axios from 'axios';

interface SearchResult {
  id: number;
  your_column: string;
}

const SearchForm: React.FC = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:5000/api/search', { params: { term } });
      setResults(response.data);
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Search:</label>
        <input type="text" value={term} onChange={handleChange} required />
      </div>
      <button type="submit">Search</button>
      {error && <div>{error}</div>}
      <div>
        {results.map((result) => (
          <div key={result.id}>
            {result.your_column}
          </div>
        ))}
      </div>
    </form>
  );
};

export default SearchForm;
