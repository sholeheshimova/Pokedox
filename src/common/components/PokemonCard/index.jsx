import styles from "./pokemonCard.module.css"


function PokemonCard({pokemon}) {

    const imageId = String(pokemon.id).padStart(3,"0")
    return (
        <>
         <div className={styles.card}>
      <img
        className={styles.image}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`}
        alt={pokemon.name}
      />

      <h3 className={styles.name}>{pokemon.name}</h3>

      <p className={styles.type}>
        Type: {pokemon.type}
      </p>

      <p className={styles.exp}>
        EXP: {pokemon.base_experience}
      </p>
    </div>
        </>
    )
}

export default PokemonCard