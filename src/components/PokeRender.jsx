import './Pokerender.css'

function PokeRender(props) {
  const typeColors = {
    fire: '#f08030',
    grass: '#78c850',
    water: '#6890f0',
    bug: '#a8b820',
    flying: '#a890f0',
    normal: '#c6c6a7',
    poison: '#a040a0',
    electric: '#f8d030',
    ground: '#e0c068',
    fairy: '#ee99ac',
    psychic: '#f85888',
    fighting: '#c03028',
    rock: '#e0c068',
    ice: '#98d8d8',
    ghost: '#8660ad',
    dragon: '#7038f8',
    dark: '#705848',
    stell: '#B8B8D0',
  }
  const { pokedata } = props
  return (
    <div
      className="fullscreen"
      style={{ backgroundColor: typeColors[pokedata.type[0].type.name] }}
    >
      <div className="divesquerda">
        <button>home</button>
        <h2>Características</h2>
        <p>Altura: {pokedata.height / 10}M </p>
        <p>Peso: {pokedata.weight / 10}kg</p>
        <span className="atributo">
          {pokedata.type.map((type) => (
            <div key={type.type.name} className={type.type.name}>
              {type.type.name}
            </div>
          ))}
        </span>
      </div>
      <div className="divcentro">
        <h1>{pokedata.name}</h1>
        <div>
          <img src={pokedata.img} alt={pokedata.name} />
        </div>
      </div>
      <div className="divright">
        <h2>Dados</h2>
        <ul>
          {pokedata.status.map((status, index) => {
            // Passo 3: Obtenha a chave do objeto
            const key = Object.keys(status)[0]

            // Passo 4: Use a chave para obter o valor do objeto
            const value = status[key]

            // Passo 5: Retorne um elemento <li> com a chave e o valor
            return <li key={index}>{`${key}: ${value}`}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default PokeRender
