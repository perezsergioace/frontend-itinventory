import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const ItemCard = ({ item }) => {
    return (
        <div>
            <Jumbotron>
                <h1>{item.item_name}</h1>
                <h2>${item.price}</h2>
                <p>{item.comment}</p>
                <p>
                    <Button variant="primary">Edit Item</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default ItemCard
