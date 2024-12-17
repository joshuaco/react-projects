import Cards from './components/Cards';
import Search from './components/Search';

function App() {
  return (
    <div className='flex flex-col items-center h-screen'>
      <h1 className='text-3xl text-white mt-8'>Project TCG</h1>
      <Search />
      <Cards />
    </div>
  );
}

export default App;
