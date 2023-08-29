import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getOne } from '../api/pokemon';
import Card from '../components/Card';
import Tag from '../components/Tag';

interface TPokemonDetail {
    id: number;
    sprites: {
      front_default: string
    };
    name: string;
    types: Array<any>;
    moves: Array<any>;
    base_experience: number;
    height: 0;
    weight: 0;
}

const PokemonDetail: React.FC = () => {
    const [pokemonDetail, setPokemonDetail] = useState<TPokemonDetail>({
        id: 0,
        sprites: {
          front_default: ''
        },
        name: '',
        types: [],
        moves: [],
        base_experience: 0,
        height: 0,
        weight: 0
    });
    console.log(pokemonDetail);

    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
    const { id } = useParams();

    const fetch = async () => {
        try {
            const results = await getOne(`${POKEMON_URL}/${id}`);

            setPokemonDetail(results);
        }catch {
    
        }finally {
        //   setLoading(false)
        }
      };

    useEffect(() => {
        fetch();
    }, [id]);

    

    return (
        <>
           {pokemonDetail.id ? (
            <div className="container grid grid-cols-2 gap-2 mt-20">
             
                        <Card pokemon={pokemonDetail} />

                        <div>
                            <div className='grid grid-cols-3'>
                                <div>
                                    <p className='text-lg font-semibold'>Base Experience</p>
                                    <p className='text-slate-900'>{pokemonDetail.base_experience}</p>
                                </div>

                                <div>
                                    <p className='text-lg font-semibold'>Height</p>
                                    <p className='text-slate-900'>{pokemonDetail.height}</p>
                                </div>

                                <div>
                                    <p className='text-lg font-semibold'>Weight</p>
                                    <p className='text-slate-900'>{pokemonDetail.weight}</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className="text-lg text-slate-950 font-semibold">Moves</p>
                                <div className="grid grid-cols-3 gap-1">
                                {pokemonDetail.moves && pokemonDetail.moves.map((item: { move: any }) => (
                                    <Tag className="mr-2" text={item.move.name} />
                                ))}
                                </div>
                            </div>
                        </div>
             
                
            </div>) : (
                <div className='flex items-center justify-center h-screen'>
                    <h2 className='text-3xl text-center m-auto'>
                        Pokemon doesn't exists
                    </h2>
                </div>
            )}
        </>
    );
};

export default PokemonDetail;