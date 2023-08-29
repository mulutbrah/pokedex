import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getOne } from '../../api/pokemon';

const SearchBar: React.FC = () => {
    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
    const navigate  = useNavigate();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = async () => {
        const results = await getOne(`${POKEMON_URL}/${searchTerm}`);
        
        console.log(results);
        // navigate('/pokemon/' + results.id, { replace: true });
    };

    const handleKeyDown = async (event: { key: string; }) => {
        if (event.key === 'Enter') {
            const results = await getOne(`${POKEMON_URL}/${searchTerm}`);
            
            navigate('/pokemon/' + results.id, { replace: true });
        }
    };

    return (
        <div className="flex items-center w-full">
        <input
            type="text"
            placeholder="Search pokemon"
            className="w-full rounded-l-lg py-2 px-4 border-t border-b border-l text-gray-800 border-gray-200 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <button
            className="px-4 py-2 rounded-r-lg bg-blue-500 text-white"
            onClick={handleSearch}
        >
            Search
        </button>
        </div>
    );
};

export default SearchBar;
