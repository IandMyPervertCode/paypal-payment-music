require('dotenv').config()
const cors = require('cors')
const express = require('express')
const paypal = require('paypal-rest-sdk')

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_SECRET_ID
})

const app = express()
const PORT = process.env.PORT || 5000

//middleware

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


//routes

app.post('/pay', (req, res) => {

    const cart = JSON.parse(req.body.cart)
    const items = cart.map(item => {
        return {
            "name": item.name,
            "sku": item.name,
            "price": item.price / 100,
            "currency": "USD",
            "quantity": 1
        }
    })
    const amount = cart.reduce((total, elem) => elem.price + total, 0) / 100

    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/store",
            "cancel_url": "http://localhost:3000/cart"
        },
        "transactions": [{
            "item_list": {
                "items": items
            },
            "amount": {
                "currency": "USD",
                "total": amount
            },
            "description": "This is the payment description."
        }]
    }

    paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
            throw error
        } else {
            for(let i = 0; i < payment.links.length; i++) {
                if(payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href)
                }
            }
        }
    })
    
})

//listen

const start = () => {
    try {
        app.listen(PORT, () => console.log(`listen port ${PORT}`))
    }catch(error){
        console.log('Server error:', error)
        process.exit(1)
    }
}

start()