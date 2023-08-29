import React, { useEffect, useState } from 'react';

import { get, getOne } from '../api/pokemon';
import Tag from '../components/Tag';
import Card from '../components/Card';
import { capitalize } from '../utils/helpers';

interface TPokemonDetail {
  id: number;
  sprites: {
    front_default: string
  };
  name: string;
  types: Array<any>;
  moves: Array<any>;
}

const DashboardPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<TPokemonDetail>({
    id: 0,
    sprites: {
      front_default: ''
    },
    name: '',
    types: [],
    moves: []
  });
  console.log(pokemonSelected);
  const [loading, setLoading] = useState(true);

  const handleDetail = (pokemon: any) => {
    setPokemonSelected(pokemon)
  }

  const fetch = async () => {
    try {
      const res = await get(`?offset=${pokemonList.length}&limit=20`);

      if(res.results.length >0) {
        res.results.forEach(async (pokemon: any) => {
          const results = await getOne(pokemon.url);

          setPokemonList((prevState) => [...prevState, results]);
        });
      }
    }catch {

    }finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    loading && fetch();
  }, [])

  return (
    <div className="container m-auto grid sm:grid-cols-1 md:grid-cols-2 gap-2">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        {!loading && pokemonList.length > 0 && pokemonList.map(pokemon => (
          <div onClick={() => handleDetail(pokemon)}>
            <img className='card__image' width={120} height={120} src={pokemon.sprites['front_default']} alt="" loading='lazy'/>

            <h3 className='card__name'>{capitalize(pokemon.name)}</h3>
            
            <div className='flex'>
              {pokemon.types && pokemon.types.map((item: { type: any }) => (
                <Tag className="mr-2" text={item.type.name} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='bg-slate-300'>
        <Card className='mt-20' pokemon={pokemonSelected} />
      </div>
    </div>
  );
};

export default DashboardPage;