import { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState("todas");

  function adicionarTarefa(e) {
    e.preventDefault();

    if (novaTarefa.trim() === "") return;

    const tarefa = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa("");
  }

  function alternarConclusao(id) {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    );

    setTarefas(tarefasAtualizadas);
  }

  function removerTarefa(id) {
    const tarefasFiltradas = tarefas.filter(
      (tarefa) => tarefa.id !== id
    );

    setTarefas(tarefasFiltradas);
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <div className="container">
      <h1>Todo App</h1>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <div className="filtros">
        <button onClick={() => setFiltro("todas")}>
          Todas
        </button>

        <button onClick={() => setFiltro("pendentes")}>
          Pendentes
        </button>

        <button onClick={() => setFiltro("concluidas")}>
          Concluídas
        </button>
      </div>

      <ul>
        {tarefasFiltradas.length > 0 ? (
          tarefasFiltradas.map((tarefa) => (
            <li key={tarefa.id}>
              <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => alternarConclusao(tarefa.id)}
              />

              <span
                style={{
                  textDecoration: tarefa.concluida
                    ? "line-through"
                    : "none",
                }}
              >
                {tarefa.texto}
              </span>

              <button onClick={() => removerTarefa(tarefa.id)}>
                Deletar
              </button>
            </li>
          ))
        ) : (
          <p>Nenhuma tarefa encontrada.</p>
        )}
      </ul>
    </div>
  );
}

export default App;