import { Card } from '../types';

interface CardModalProps {
  card: Card;
  onClose: () => void;
}

function CardModal({ card, onClose }: CardModalProps) {
  return (
    <div className='w-full h-full bg-slate-400 bg-opacity-50 fixed top-0 left-0 z-10 flex justify-center items-center'>
      <div className='lg:w-1/2 md:w-5/6 bg-white rounded-lg p-4 shadow-lg grid grid-cols-2 gap-4'>
        <img src={card.images.large} alt={card.name} className='w-full' />
        <div>
          <h1 className='text-2xl font-bold text-center'>{card.name}</h1>
          <p className=''>{card.attacks?.[0]?.name}</p>
          <p>{card.hp}</p>
          <p className='font-bold'>{card.types?.join(', ')}</p>

          {card.rules && (
            <>
              {card.rules.map((rule, index) => (
                <p key={index}>
                  <span className='font-bold'>- </span>
                  {rule}
                </p>
              ))}
            </>
          )}
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CardModal;
