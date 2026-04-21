import React from "react";

interface ResultModalProps {
  result: "X" | "O" | "Draw";
  onContinue: () => void;
  onFinish: () => void;
}

export default function ResultModal({
  result,
  onContinue,
  onFinish,
}: ResultModalProps) {
  const message = result === "Draw" ? "Seri!" : `Player ${result} Menang`;
    // const color = 
    console.log("result",result)
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">{message}</h2>
        <button className="modal-action" onClick={onContinue}>
            Lanjutkan Permainan
        </button>
        <button className="modal-finish" onClick={onFinish}>
            Selesai
        </button>
      </div>
    </div>
  );
}
