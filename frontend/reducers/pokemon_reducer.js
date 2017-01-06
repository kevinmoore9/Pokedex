import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.allPokemon;
    case RECEIVE_NEW_POKEMON:
      return action.newPokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
