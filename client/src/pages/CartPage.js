import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {

    const [cart, setCart] = useContext(CartContext)
    const removeFromCart = (id) => {
        setCart(curr => curr.filter(elem => elem.id !== id))
    }

    let amount = cart.reduce((total, elem) => elem.price + total, 0) / 100

    return(
        <>
            <table className="centered">
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    cart.map(item => (
                        <tr key = {item.id}>
                            <td><img src = {item.img} height = "50px" width = "50px" /></td>
                            <td>{item.name}</td>
                            <td>$ {item.price / 100}</td>
                            <td><button className = "btn red waves-effect waves-light" onClick = {() => {removeFromCart(item.id)}}>Remove</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <p style = {{display: "flex", justifyContent: "flex-end"}}><b>Total:</b>${amount}</p>
            <form action = "http://localhost:5000/pay" method = "POST" className = "center white-text">
                <input type = "hidden" name = "cart" value = {JSON.stringify(cart)}/>
                <button className = "btn-large teal darken-4 waves-effect waves-light" disabled = {!cart.length} type = "submit">Purchase</button>
            </form>


            
        </>

    )
}