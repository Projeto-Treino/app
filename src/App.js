import "./App.css";
import { usersTreios } from "./data";
import { useState } from "react";
import { CollapseTrain } from "./components/collapse-train";

function App() {
  const [cpf, setCpf] = useState("");
  const [treinos, setTreinos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando treino");

    const treinos = usersTreios[cpf].treinos;
    setTreinos(treinos);
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
            <CollapseTrain train={treino} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
