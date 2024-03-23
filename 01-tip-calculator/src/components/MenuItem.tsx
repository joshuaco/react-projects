/* TODO: Fix the children prop type */
function MenuItem({ children }) {
  return (
    <article>
      <p>Item # {children}</p>
    </article>
  );
}

export default MenuItem;
