import { Link } from 'react-router-dom';

const MyHeader: React.FC = () => {
    return (
      <header className="bg-gray-300 text-gray-700 p-4">
        <div className="container flex flex-row items-center">
            <h1 className="text-2xl font-semibold">Pokedex API</h1>

            <p className='m-0 mx-4'><Link to="/">Home</Link></p>
        </div>
      </header>
    );
  };
  
  export default MyHeader;