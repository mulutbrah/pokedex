import React from "react";
import { Link } from 'react-router-dom';

import Tag from "../Tag";
import { capitalize } from "../../utils/helpers";

import "./style.scss";
interface TPokemonDetail {
  id: number;
  sprites: {
    front_default: string
  };
  name: string;
  types: Array<any>;
  moves: Array<any>;
}

interface ICard {
  className?: string;
  pokemon: TPokemonDetail;
  showButton?: boolean;
  showMoves?: boolean;
}

const Card: React.FC<ICard> = ({ pokemon, className, showButton, showMoves }) => {
  return (
    <div className={`pokemon-card ${className} m-auto`}>
      <div className="flex justify-between items-center">
        <p className="text-2xl text-slate-950">{ capitalize(pokemon.name) }</p>

        <div className='flex'>
          {pokemon.types && pokemon.types.map((item: { type: any }) => (
            <Tag className="mr-2" text={item.type.name} />
          ))}
        </div>
      </div>

      <div className="text-center pokemon-card__image">
        <img src={pokemon?.sprites?.front_default} className="m-auto" alt="pokemon" />
      </div>

      <div className="mb-6">
        
        
        {
          showMoves && 
          <>
            <p className="text-lg text-slate-950">Moves</p>
            <div className="pokemon-card__moves grid grid-cols-3 gap-1">
              {pokemon.moves && pokemon.moves.map((item: { move: any }) => (
                <Tag className="mr-2" text={item.move.name} />
              ))}
            </div>
          </>
        }
      </div>

      {
        showButton && 
        <Link to={`/pokemon/${pokemon.id}`}>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Detail
          </button>
        </Link>
      }
      
    </div>
  );
};

export default Card;
