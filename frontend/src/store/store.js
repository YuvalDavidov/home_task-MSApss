import { createStore, combineReducers } from 'redux'

import { carReducer } from './car.reducer.js'
import { systemReducer } from './system.reducer.js'
import { cardsReducer } from './cards.reducer.js'


const rootReducer = combineReducers({
    carModule: carReducer,
    systemModule: systemReducer,
    cardsModule: cardsReducer
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)


store.subscribe(() => {
    console.log('**** Store state changed: ****')
    console.log('storeState:\n', store.getState())
    console.log('*******************************')
})



