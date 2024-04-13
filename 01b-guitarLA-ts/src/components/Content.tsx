import Item from './Item';

import type { Guitar } from '../types';
import { CartActions } from '../reducers/cart-reducer';

type ContentProps = {
  data: Guitar[];
  dispatch: React.Dispatch<CartActions>;
};

function Content({ data, dispatch }: ContentProps) {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <section className="row mt-5">
        {data.map((guitar) => (
          <Item key={guitar.id} guitar={guitar} dispatch={dispatch} />
        ))}
      </section>
    </main>
  );
}

export default Content;
