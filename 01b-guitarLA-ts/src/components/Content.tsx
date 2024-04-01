import Item from "./Item";

import type { Guitar } from "../types";

type ContentProps = {
  data: Guitar[];
  addToCart: (item: Guitar) => void;
};

function Content({ data, addToCart }: ContentProps) {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <section className="row mt-5">
        {data.map((guitar) => (
          <Item key={guitar.id} guitar={guitar} addToCart={addToCart} />
        ))}
      </section>
    </main>
  );
}

export default Content;
