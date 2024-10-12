import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const hasFavorites = favorites.length;

  return (
    <>
      <h1 className='text-3xl font-black mb-6'>Favorites</h1>

      {hasFavorites ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10 gap-4'>
          {favorites.map((recipe) => (
            <DrinkCard key={recipe.idDrink} drink={recipe} />
          ))}
        </div>
      ) : (
        <p className='text-lg font-bold text-center'>No favorites yet...</p>
      )}
    </>
  );
}

export default FavoritesPage;
