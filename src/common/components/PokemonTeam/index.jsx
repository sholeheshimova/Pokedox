
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

PokemonTeam.propTypes = {
  title: PropTypes.string.isRequired,
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      base_experience: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalExp: PropTypes.number.isRequired,
  status: PropTypes.oneOf([
    "WINNER",
    "DEFEATED",
    "DRAW",
  ]).isRequired,
};

export default PokemonTeam;
