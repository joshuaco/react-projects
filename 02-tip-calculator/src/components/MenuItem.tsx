import { OrderActions } from '../reducers/order-reducer';
import type { MenuItem } from '../types';

type MenuItemProps = {
  item: MenuItem;
  dispatch: React.Dispatch<OrderActions>;
};

function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="w-full border-2 border-gray-300 hover:bg-gray-200 rounded flex justify-between py-3
       px-5 items-center"
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
      <div className="flex items-center gap-3">
        <img src={`/svg/${item.img}.svg`} alt={item.img} />
        <span>{item.name}</span>
      </div>
      <p className="font-bold text-blue-950">${item.price}</p>
    </button>
  );
}

export default MenuItem;
