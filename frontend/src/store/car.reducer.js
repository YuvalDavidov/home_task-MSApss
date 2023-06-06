export const SET_CARS = 'SET_CARS'

const initialState = {
    cars: [],
    cart: [],
    lastRemovedCar: null
}

export function carReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {
        case SET_CARS:
            newState = { ...state, cars: action.cars }
            break

        default:
    }
    return newState
}
