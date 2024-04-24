import { Product } from '../types';

type ProductsProps = {
  products: Product[];
};

function Products({ products }: ProductsProps) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default Products;
