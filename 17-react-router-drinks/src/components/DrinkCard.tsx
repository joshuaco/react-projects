import { useAppStore } from '../stores/useAppStore';
import type { Drink } from '../types';

interface DrinkCardProps {
  drink: Drink;
}

function DrinkCard({ drink }: DrinkCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div className='border shadow'>
      <div className='overflow-hidden'>
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className='hover:scale-125 hover:rotate-6 transition-transform'
        />
      </div>

      <div className='p-5'>
        <h2 className='truncate text-2xl font-black'>{drink.strDrink}</h2>
        <button
          type='button'
          className='bg-orange-400 hover:bg-orange-500 w-full text-white 
          text-lg font-bold mt-5 p-2'
          onClick={() => selectRecipe(drink.idDrink)}
        >
          Show Recipe
        </button>
      </div>
    </div>
  );
}

export default DrinkCard;
