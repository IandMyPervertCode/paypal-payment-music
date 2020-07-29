import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { StorePage } from './pages/StorePage'
import { CartPage } from './pages/CartPage'

export const useRoutes = () => {
    return(
        <Switch>
            <Route path = "/store" exact>
                <StorePage />
            </Route>
            <Route path = "/cart" exact>
                <CartPage />
            </Route>
            <Redirect to = "/store" />
        </Switch>
    )
}