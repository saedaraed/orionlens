type ButtonProps = {
  name: string;
};
const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <>
      <button className="flex flex-col items-start p-[10px] gap-[10px] border border-white text-[20px]">
        {name}
      </button>
    </>
  );
};

export default Button;
