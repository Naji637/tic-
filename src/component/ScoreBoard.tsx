type Props = {
  scores: { X: number; O: number; draws: number };
};

export default function ScoreBoard({ scores }: Props) {
  return (
    <div className="scoreboard">
      <div className="score">
        <span className="player-x">X</span>
        <span>{scores.X}</span>
      </div>
      <div className="score">
        <span className="player-o">O</span>
        <span>{scores.O}</span>
      </div>
      <div className="score">
        <span>Draw</span>
        <span>{scores.draws}</span>
      </div>
    </div>
  );
}
