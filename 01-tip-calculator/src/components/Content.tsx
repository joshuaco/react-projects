import { menuItems } from "../data/db";
import MenuItem from "./MenuItem";

function Content() {
  return (
    <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
      <section className="">
        <h2 className="text-center text-2xl text-blue-950 font-semibold">
          Menu
        </h2>
        <div>
          {menuItems.map((item) => (
            <MenuItem key={item.id}>{item.id}</MenuItem>
          ))}
        </div>
      </section>
      <section className="">
        <h2 className="text-center text-2xl text-blue-950 font-semibold">
          Bill
        </h2>
      </section>
    </main>
  );
}

export default Content;
