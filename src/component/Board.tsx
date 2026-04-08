import Cell from "./Cell";

type Props = {
  board: ("X" | "O" | null)[];
  disabled: boolean;
  onCellClick: (index: number) => void;
};

export default function Board({ board, disabled, onCellClick }: Props) {
  return (
    <div>
      <div className="board">
        {board.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onClick={() => onCellClick(index)}
            disabled={disabled}
          ></Cell>
        ))}
      </div>
    </div>
  );
}
