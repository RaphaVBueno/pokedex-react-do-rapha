import { useEffect } from 'react'
import axios from 'axios'

function LoadMore(props) {
  const { pokemon, setPokemon } = props

  const fetchPokemon = async () => {
    try {
      // Cria um array para armazenar as promessas de requisições.
      const pokemonPromises = []
      for (let id = 152; id <= 251; id++) {
        pokemonPromises.push(
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        )
      }
      // Usa Promise.all para resolver todas as promessas simultaneamente.
      const pokemonResponses = await Promise.all(pokemonPromises)
      // Extrai os dados de cada resposta e atualiza o estado.
      const pokemonData = pokemonResponses.map((response) => response.data)
      setPokemon([...pokemon, ...pokemonData])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button type="button" onClick={fetchPokemon}>
      2ªGen
    </button>
  )
}

export default LoadMore
