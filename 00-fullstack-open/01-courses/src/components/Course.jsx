/* eslint-disable react/prop-types */
function Course({ course }) {
  const { name, parts } = course;

  const calculateTotal = parts.reduce((total, part) => {
    // If i want to do some console loing here
    return total + part.exercises;
  }, 0);

  return (
    <div>
      <header>
        <h2>{name}</h2>
      </header>

      <main>
        <ul>
          {parts.map((part) => {
            return (
              <li key={part.id}>
                <p>
                  {part.name} {part.exercises}
                </p>
              </li>
            );
          })}
        </ul>
        <p>
          <b>Total of {calculateTotal} exercises</b>
        </p>
      </main>
    </div>
  );
}

export default Course;
