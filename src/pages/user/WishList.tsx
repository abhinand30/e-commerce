import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Header from '../../components/Header';
import { selectedFavorites } from '../../redux/slice/favoriteSlice';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { favoriteItem } from '../../common/type/types';

const Favorites = () => {
  const favoriteData = useSelector(selectedFavorites);
   const [favoritesArray,setFavoritesArray]=useState<favoriteItem[]>([]);
  
   useEffect(() => {
    const filteredFavorites = favoriteData.map((favorites) => ({
      ...favorites,
      selected: true
    }));
    setFavoritesArray(filteredFavorites);
  }, [favoriteData]);
  
    
  return (
    <div>
      <Header />
      <div className="m-10">
        <h2 className="text-2xl font-semibold mb-6">My Favorites</h2>
        {favoriteData.length === 0 ? (
          <p className="text-gray-600">Your Favorites is empty.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {favoritesArray.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
              />
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Favorites;
