import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
        console.log(action)
        state.isLoading = false;
        state.nextPage = action.payload.nextPage;
        state.pokemons = action.payload.pokemons
    },
    setPrevPokemons: (state, action) => {
       state.isLoading = false;
       state.prevPage = action.payload.prevPage;
       state.pokemons = action.payload.pokemons;
    }
  
  }
});

export const { startLoadingPokemons, setPokemons, setPrevPokemons } = pokemonSlice.actions;