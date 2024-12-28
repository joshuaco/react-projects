import { useState } from 'react';
import { type Card as CardType } from '../types';
import CardModal from './CardModal';
import { createPortal } from 'react-dom';

interface CardProps {
  card: CardType;
}

function Card({ card }: CardProps) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  return (
    <>
      <article onClick={handleClick} className='content-visibility-auto'>
        <img src={`${card.images.small}`} alt={card.name} />
      </article>
      {showModal &&
        createPortal(
          <CardModal card={card} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

export default Card;
