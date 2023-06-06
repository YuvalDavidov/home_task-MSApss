import { LOAD_CARDS } from "./cards.reducer";
import { store } from "./store";
import { LOADING_DONE, LOADING_START } from "./system.reducer";

export async function loadCards() {
    try {
        store.dispatch({ type: LOADING_START })
        console.log('here - actions');

        const cards = ['s', 'd']
        store.dispatch({ type: LOAD_CARDS, cards })
        store.dispatch({ type: LOADING_DONE })

    } catch (err) {
        console.log('Cannot load cards', err)
        throw err
    }

}