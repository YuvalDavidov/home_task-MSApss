
export const LOAD_CARDS = 'LOAD_CARDS'

const initialState = {
    cards: [],
};

export function cardsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_CARDS:
            return { ...state, cards: action.cards }
        default: return state
    }
}