type Props = {
  value: "X" | "O" | null;
  onClick: () => void;
  disabled: boolean;
};
function Cell({ value, onClick, disabled }: Props) {
  return (
    <button className="cell" onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
}
export default Cell;
