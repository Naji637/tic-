import { useEffect, useState } from "react";

type Props = {
  value: "X" | "O" | null;
  onClick: () => void;
  disabled: boolean;
};
function Cell({ value, onClick, disabled }: Props) {
  const className = ["cell", value && `cell-${value.toLowerCase()}`]
    .filter(Boolean)
    .join(" ");
  const [isNotPlaying, setIsNotPlaying] = useState<boolean>(false);
  // const setCell = value === null ? false : true;
  useEffect(() => {
    if (disabled) {
      setIsNotPlaying(disabled);
    } else {
      const setCell = value === null ? false : true;
      setIsNotPlaying(setCell);
    }
  }, [disabled, value]);

  return (
    <button className={className} onClick={onClick} disabled={isNotPlaying}>
      {value}
    </button>
  );
}
export default Cell;
