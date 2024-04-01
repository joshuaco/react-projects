const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

function TipForm({ setTip, tip }: TipFormProps) {
  return (
    <section className="px-5 py-2 space-y-2">
      <h3 className="text-2xl md:text-lg font-semibold">Propina: </h3>

      <form className="flex justify-center gap-6 lg:gap-14 flex-wrap py-4">
        {tipOptions.map((tipOption) => (
          <div
            key={tipOption.id}
            className="flex gap-2 border-2 border-gray-300 hover:bg-gray-200 rounded py-3 px-4"
          >
            <label htmlFor={tipOption.id} className="text-xl md:text-lg">
              {tipOption.label}
            </label>
            <input
              className="w-4"
              type="radio"
              name="tip"
              id={tipOption.id}
              value={tipOption.value}
              checked={tipOption.value === tip}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </section>
  );
}

export default TipForm;
