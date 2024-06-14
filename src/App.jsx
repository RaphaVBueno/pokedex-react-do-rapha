import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import PokeRender from './components/PokeRender'
import './poketypes.css'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokeinfo, setPokeinfo] = useState(false)
  const [pokedata, setPokedata] = useState()

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Cria um array para armazenar as promessas de requisições.
        const pokemonPromises = []
        for (let id = 1; id <= 151; id++) {
          pokemonPromises.push(
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
          )
        }
        // Usa Promise.all para resolver todas as promessas simultaneamente.
        const pokemonResponses = await Promise.all(pokemonPromises)
        // Extrai os dados de cada resposta e atualiza o estado.
        const pokemonData = pokemonResponses.map((response) => response.data)
        setPokemon(pokemonData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPokemon()
  }, [])

  return (
    <body>
      <header>POKEDEX DO RAPHA</header>
      {!pokeinfo && (
        <div className="grid">
          {pokemon.map((poke) => (
            <div
              className={poke.types[0].type.name}
              key={poke.id}
              onClick={() => {
                setPokeinfo(true)
                setPokedata({
                  name: poke.name,
                  id: poke.id,
                  img: poke.sprites.other['official-artwork'].front_default,
                  height: poke.height,
                  weight: poke.weight,
                  type: poke.types,
                  status: [
                    { 'HP ': poke.stats[0].base_stat },
                    { 'Ataque ': poke.stats[1].base_stat },
                    { 'Defesa ': poke.stats[2].base_stat },
                    { 'Ataque Especial': poke.stats[3].base_stat },
                    { 'Defesa Especial': poke.stats[4].base_stat },
                    { 'Velocidade ': poke.stats[5].base_stat },
                  ],
                })
              }}
            >
              <div className="divpokeinfo">
                <h1 className="pokeid">#{poke.id}</h1>
                <h1>{poke.name}</h1>
                <span>
                  {poke.types.map((type) => (
                    <div key={type.type.name} className={type.type.name}>
                      {type.type.name}
                    </div>
                  ))}
                </span>
              </div>
              <div className="divimage">
                <img
                  src={poke.sprites.other['official-artwork'].front_default}
                  alt={poke.name}
                  height={150}
                  width={150}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {pokedata && <PokeRender pokedata={pokedata} />}
    </body>
  )
}

export default App
