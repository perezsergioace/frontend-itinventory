import React from 'react'

const ItemCard = ({ item }) => {
    return (
        <div>
            <h1>{item.item_name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.item_added_date}</h1>
            <h1>{item.comment}</h1>
        </div>
    )
}

export default ItemCard
