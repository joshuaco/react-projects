export type MenuItem = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export type OrderItem = MenuItem & {
  quantity: number;
};
