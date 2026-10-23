import "./styles/variable.css";
import "./App.css";
import { pokemonData } from "./mock/pokemon";
import PokemonTeam from "./common/components/PokemonTeam";

function getRandomTeams() {
  const availablePokemons = [...pokemonData];

  const team1 = [];
  const team2 = [];

  while (team1.length < 4) {
    const randomIndex = Math.floor(Math.random() * availablePokemons.length);

    team1.push(availablePokemons.splice(randomIndex, 1)[0]);
  }

  while (team2.length < 4) {
    const randomIndex = Math.floor(Math.random() * availablePokemons.length);

    team2.push(availablePokemons.splice(randomIndex, 1)[0]);
  }

  return { team1, team2 };
}

function calculateExp(team) {
  return team.reduce((total, pokemon) => total + pokemon.base_experience, 0);
}

function App() {
  const { team1, team2 } = getRandomTeams();

  const team1Exp = calculateExp(team1);
  const team2Exp = calculateExp(team2);

  function startGame() {
    window.location.reload();
  }

  return (
    <main className="app">
      <header className="game-header">
        <p className="eyebrow">THE ULTIMATE POKÉMON SHOWDOWN</p>

        <h1 className="main-title">
          POKÉMON <span>ARENA</span>
        </h1>

        <p className="subtitle">Choose your destiny. Battle for glory.</p>

        <button className="start-button" onClick={startGame}>
          <i className="fa-solid fa-bolt"></i>
          <span>START GAME</span>
          <i className="fa-solid fa-gamepad"></i>
        </button>

        <div className="battle-heading">
          <span className="line"></span>

          <span className="battle-label">
            <i className="fa-solid fa-fire"></i> VS{" "}
            <i className="fa-solid fa-fire"></i>
          </span>

          <span className="line"></span>
        </div>
      </header>

      <div className="teams">
        <PokemonTeam
          title="TEAM 01"
          pokemons={team1}
          totalExp={team1Exp}
          status={
            team1Exp > team2Exp
              ? "WINNER"
              : team1Exp < team2Exp
                ? "DEFEATED"
                : "DRAW"
          }
        />

        <PokemonTeam
          title="TEAM 02"
          pokemons={team2}
          totalExp={team2Exp}
          status={
            team2Exp > team1Exp
              ? "WINNER"
              : team2Exp < team1Exp
                ? "DEFEATED"
                : "DRAW"
          }
        />
      </div>

      <footer className="game-footer">
        <p>TRAIN YOUR TEAM. OWN THE ARENA.</p>
      </footer>
    </main>
  );
}

export default App;
