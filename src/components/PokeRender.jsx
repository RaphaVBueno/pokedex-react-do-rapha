import './Pokerender.css'

function PokeRender(props) {
  const { pokedata } = props
  return (
    <div className="fullscreen">
      <div className="divesquerda">
        <button>home</button>
        <h2>Características</h2>
        <p>Altura: {pokedata.height / 10}M </p>
        <p>Peso: {pokedata.weight / 10}kg</p>
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
