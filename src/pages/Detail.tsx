import { useEffect, useState } from 'react';

import { getOne } from '../api/pokemon';

const PokemonDetail: React.FC = () => {

  const fetch = async () => {
    // try {
    //   const res = await getAll(currentPage);
    //     setDataRuas(res.data)
    //     setCurrentPage(res.current_page)
    //     setTotalPages(res.last_page)

    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    fetch();
  }, []);

  

  return (
    <div className="container m-auto">
    </div>
  );
};

export default PokemonDetail;