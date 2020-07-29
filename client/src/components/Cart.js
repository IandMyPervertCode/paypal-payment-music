import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = ({ id, name, img, price }) => {
    
    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {
        const localCart = {id, name, img, price}
        let check = 1
        cart.forEach(item => {
            if(item.id === id) {
                check = 0
            }
        })
        if(check){
            setCart(curr => [...curr, localCart])
        }

    }

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                <img src={img}/>
                <span className="card-title">{name}</span>
                </div>
                <div className="card-action" style = {{display: 'flex', justifyContent: 'space-between'}}>
                    <span>${price / 100}</span>
                    <button className="waves-effect waves-light btn teal darken-4" onClick = {addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}