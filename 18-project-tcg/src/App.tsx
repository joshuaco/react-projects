import Cards from './components/Cards';
import Search from './components/Search';
import CardsProvider from './context/CardsProvider';

function App() {
  return (
    <div className='flex flex-col items-center h-screen'>
      <h1 className='text-3xl text-white mt-8'>Project TCG</h1>
      <CardsProvider>
        <Search />
        <Cards />
      </CardsProvider>
    </div>
  );
}

export default App;
