export const TrainCard = ({ exercise, index }) => {
  return (
    <div className="cards" key={index}>
      <h3>Exercício: {exercise.exercicio}</h3>
      <p>Series: {exercise.series}</p>
      <p>Repetições: {exercise.repeticoes}</p>
      <p>Carga: {exercise.carga}</p>
      <a href={exercise.link}>Link</a>
    </div>
  );
};
