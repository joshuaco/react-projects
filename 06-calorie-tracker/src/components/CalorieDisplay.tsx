type CalorieDisplayProps = {
  calories: number;
  text: string;
};

function CalorieDisplay({ calories, text }: CalorieDisplayProps) {
  return (
    <p className="font-bold grid grid-cols-1 gap-3 text-2xl text-white text-center">
      <span className="font-black text-4xl">{calories}</span>
      {text}
    </p>
  );
}

export default CalorieDisplay;
