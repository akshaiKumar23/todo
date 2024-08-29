interface Props {
  buttonText: string;
  buttonType: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ buttonText, buttonType, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] w-full bg-[#473a2b] my-2 text-white hover:bg-[#322618] rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      } `}
    >
      {buttonText}
    </button>
  );
};

export default Button;
