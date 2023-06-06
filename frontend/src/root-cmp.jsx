import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { HomePage } from './pages/home-page'

export function RootCmp() {

    return (
        <div>
            <AppHeader />
            <main>

                <HomePage />

            </main>
            <AppFooter />
        </div>
    )
}


