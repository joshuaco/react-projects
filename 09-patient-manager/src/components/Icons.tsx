import cat from '../assets/cat_color.svg';
import dog from '../assets/dog_color.svg';

export function CatIcon() {
  return <img src={cat} alt="cat" className="w-24 h-24 mx-auto mt-8" />;
}

export function DogIcon() {
  return <img src={dog} alt="dog" className="w-24 h-24 mx-auto mt-8" />;
}
