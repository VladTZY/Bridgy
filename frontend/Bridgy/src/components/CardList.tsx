interface IPROPS {
  textArray: String[];
}

export const CardList: React.FC<IPROPS> = ({ textArray }) => {
  return (
    <div className="block max-w-sm p-6 m-6 bg-cyan-500 borde rounded-lg trasnform transition duration-500 hover:bg-cyan-400 hover:scale-110 hover:drop-shadow-[0_35px_35px_rgba(51,204,255,0.25)]">
      <ul className="list-inside list-disc max-w-md">
        {textArray.map((text) => (
          <li className="text-xl text-white bold">{text}</li>
        ))}
      </ul>
    </div>
  );
};
