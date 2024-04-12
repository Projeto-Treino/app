import { useState } from "react";
import { TrainCard } from "../train-card";

export const CollapseTrain = ({train, index}) => {
  const [open, setOPen] = useState(false);

  console.log(train);

  return (
    <div key={index} onClick={() => setOPen(!open)}>
      <h2>Treino {train.treino} {!open ? '+' : '-'}</h2>
      {open && (
        <div className="cardsContainer">
          {train.exercicios.map((exercicio, index) => (
            <TrainCard exercise={exercicio} index={index}></TrainCard>
          ))}
        </div>
      )}
    </div>
  );
};
