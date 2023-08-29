import React, { useEffect, useState } from 'react';

import { get, getOne } from '../api/pokemon';
import Tag from '../components/Tag';

interface TPokemonDetail {
  sprites: {
    front_default: string
  }
}

const DashboardPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<TPokemonDetail>({
    sprites: {
      front_default: ''
    }
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

            <h4>{pokemon.order}</h4>

            <h3 className='card__name'>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</h3>
            
            <div className='flex'>
              {pokemon.types && pokemon.types.map((item: { type: any }) => (
                <Tag className="mr-2" text={item.type.name} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <img src={pokemonSelected.sprites.front_default} />
        DETAIL
      </div>
    </div>
  );
};

export default DashboardPage;