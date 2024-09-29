import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

function IndexPage() {
  const { drinks } = useAppStore((state) => state.drinks);

  if (drinks.length === 0)
    return (
      <p className='text-xl text-center'>Nothing here yet, do a search!</p>
    );

  return (
    <>
      <h1 className='text-6xl font-extrabold'>Recipes</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10 gap-4'>
        {drinks.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </>
  );
}

export default IndexPage;
