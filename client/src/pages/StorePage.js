import React from 'react'
import { Cart } from '../components/Cart'

export const StorePage = () => {

    const database = [
        {id: 1, name: 'Album 1', img: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/PRI_151201921.jpg?quality=90&strip=all&zoom=1&resize=964%2C895&ssl=1', price: 1012},
        {id: 2, name: 'Album 2', img: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/PRI_151201921.jpg?quality=90&strip=all&zoom=1&resize=964%2C895&ssl=1', price: 5534},
        {id: 3, name: 'Album 3', img: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/PRI_151201921.jpg?quality=90&strip=all&zoom=1&resize=964%2C895&ssl=1', price: 6235},
        {id: 4, name: 'Album 4', img: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/PRI_151201921.jpg?quality=90&strip=all&zoom=1&resize=964%2C895&ssl=1', price: 82347},
        {id: 5, name: 'Album 5', img: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/PRI_151201921.jpg?quality=90&strip=all&zoom=1&resize=964%2C895&ssl=1', price: 1232},
        {id: 6, name: 'Album 6', img: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/PRI_151201921.jpg?quality=90&strip=all&zoom=1&resize=964%2C895&ssl=1', price: 623},
    ]

    return(
        <>
            <h1 className = 'center'>Music</h1>
            <div className = 'row'>
                {
                    database.map(item => (
                        <Cart id = {item.id} name = {item.name} img = {item.img} price = {item.price} key = {item.id}/>
                    ))
                }
            </div>
        </>
    )
}