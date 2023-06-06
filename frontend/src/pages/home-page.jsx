import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCards } from '../store/cards.actions'

export function HomePage() {

    const isLoading = useSelector(storeState => storeState.systemModule.isLoading)
    const cards = useSelector(storeState => storeState.cardsModule.cards)

    const dispatch = useDispatch()

    useEffect(() => {
        loadCards()
    }, [])


    console.log(isLoading, cards);

    return (
        <section>
            {isLoading && 'LOADING'}

        </section >
    )
}