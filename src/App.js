import "./App.css";
import { usersTreios } from "./data";
import { useState } from "react";

function App() {
  const [cpf, setCpf] = useState("");
  const [treinos, setTreinos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando treino");

    console.log(cpf);

    const treinos = usersTreios[cpf].treinos;
    setTreinos(treinos);
    console.log(treinos);
  };

  const handleChangeInput = (event) => {
    console.log(event.target.value);
    setCpf(event.target.value);
  };

  return (
    <div className="App">
      <h1>Ficha de treino</h1>

      <form>
        <input
          type="text"
          value={cpf}
          onChange={handleChangeInput}
          placeholder="Digite seu CPF"
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Buscar
        </button>
      </form>

      <div id="treinos">
        {treinos.map((treino, index) => (
          <div key={index}>
            <h2>Treino {treino.treino}</h2>
            <div className="cardsContainer">
            {treino.exercicios.map((exercicio, index) => (
              <div className="cards" key={index}>
                <h3>Exercício: {exercicio.exercicio}</h3>
                <p>Series: {exercicio.series}</p>
                <p>Repetições: {exercicio.repeticoes}</p>
                <p>Carga: {exercicio.carga}</p>
                <a href={exercicio.link}>Link</a>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
