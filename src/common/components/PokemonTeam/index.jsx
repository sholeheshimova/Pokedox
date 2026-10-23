
import PokemonCard from "../PokemonCard";
import styles from "./pokemonTeam.module.css";

function PokemonTeam({ title, pokemons, totalExp, status }) {
  return (
    <section className={styles.team}>
      <div className={styles.teamHeader}>
        <h2 className={styles.title}>{title}</h2>

        <span
          className={`${styles.status} ${
            status === "WINNER"
              ? styles.win
              : status === "DEFEATED"
                ? styles.lose
                : styles.draw
          }`}
        >
          {status === "WINNER"
            ? "WIN"
            : status === "DEFEATED"
              ? "LOSE"
              : "DRAW"}
        </span>
      </div>

      <div className={styles.cards}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </div>

      <h3 className={styles.totalExp}>
        Total EXP: {totalExp}
      </h3>
    </section>
  );
}

export default PokemonTeam;
