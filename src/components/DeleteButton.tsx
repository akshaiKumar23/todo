interface Props {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
