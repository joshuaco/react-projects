import Cart from "./Cart";

function Header({ cart, setCart }) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </header>
  );
}

export default Header;
