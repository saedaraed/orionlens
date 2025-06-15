type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  name: string;
};
const Button: React.FC<ButtonProps> = ({ name, className, ...rest }, ref) => {

  return (
    <>
      <button         className={`flex flex-col items-start p-[10px] gap-[10px] border border-white text-[20px] ${className}`}
        {...rest} ref={ref}>
        {name}
      </button>
    </>
  );
};
Button.displayName = "Button";


export default Button;
