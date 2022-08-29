import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

const dispatch = useDispatch()
const { isLoading, pokemons, nextPage, prevPage } = useSelector((state) => state.pokemons);

//
useEffect(() => {
dispatch(getPokemons())

}, [])

const [countingPage, setCountingPage] = useState(1)

const nextPokemons = () => {
  setCountingPage(countingPage + 1);
  dispatch(getPokemons(nextPage));
}; 

const prevPokemons = () => {
  if (countingPage === 1) return;
  setCountingPage(countingPage - 1);
  dispatch(getPokemons(prevPage))
}; 



  return (
    <>
      <h1>PokemonApp</h1>
      <span>Loading: {isLoading ? "true" : "false"}</span>
      <hr  className="myHR"/>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={nextPokemons}
      >
        Next
      </button>

      <button
        disabled={isLoading}
        onClick={prevPokemons}
      >
        Previous
      </button>
    </>
  );
}


















