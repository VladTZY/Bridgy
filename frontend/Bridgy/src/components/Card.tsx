interface IPROPS {
  text: String;
}

export const Card: React.FC<IPROPS> = ({ text }) => {
  return (
    <div className="flex items-center max-w-sm p-6 m-6 bg-cyan-500 borde rounded-lg trasnform transition duration-500 hover:bg-cyan-400 hover:scale-110 hover:drop-shadow-[0_35px_35px_rgba(51,204,255,0.25)]">
      <h1 className="text-xl text-white bold">{text}</h1>
    </div>
  );
};
