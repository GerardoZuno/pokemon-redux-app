import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'
import usuarioReducer, {leerUsuarioActivo} from './userDucks'



const rootReducer = combineReducers({
    pokemones: pokeReducer,
    usuario: usuarioReducer,


})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk))) 
    leerUsuarioActivo()(store.dispatch)
    return store   
}