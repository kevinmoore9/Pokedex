export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECIEVE_NEW_POKEMON = "RECIEVE_NEW_POKEMON";
import * as APIUtil from "../util/api_util";

export const receiveAllPokemon = allPokemon => ({
  type: RECEIVE_ALL_POKEMON,
  allPokemon
});

export const requestAllPokemon = () => ({dispatch}) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPokemon = (id) => ({dispatch}) => {
  return APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)));
};

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const receiveNewPokemon = newPokemon => ({
  type: RECIEVE_NEW_POKEMON,
  newPokemon
});

export const createNewPokemon = (pokemon) => dispatch => {
  APIUtil.createPokemon(pokemon).then(newPokemon => {
    dispatch(receiveNewPokemon(newPokemon));
    debugger
    return newPokemon;
  });
};
