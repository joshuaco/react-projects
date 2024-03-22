import Guitar from "./Guitar";

function Content({ data, addToCart }) {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <section className="row mt-5">
        {data.map((guitar) => (
          <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
        ))}
      </section>
    </main>
  );
}

export default Content;
