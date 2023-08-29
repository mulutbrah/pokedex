import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const MyHeader: React.FC = () => {
    return (
      <header className="bg-gray-300 text-gray-700 p-4 sticky top-0">
        <div className="container flex flex-row items-center w-full">
            <h1 className="w-64 text-2xl font-semibold">Pokedex API</h1>

            <p className='w-64 m-0 mx-4'><Link to="/">Home</Link></p>

            <SearchBar />
        </div>
      </header>
    );
  };
  
  export default MyHeader;