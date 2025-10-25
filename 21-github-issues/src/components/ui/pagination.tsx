import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination() {
  return (
    <div className='flex justify-center items-center gap-4'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50'>
        <ChevronLeft className='w-4 h-4' />
      </button>
      <span className='text-gray-500'>Page 1 of 10</span>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50'>
        <ChevronRight className='w-4 h-4' />
      </button>
    </div>
  );
}

export default Pagination;
