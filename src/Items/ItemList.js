import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const ItemList = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = () => {
            axios.get(`https://it-inventory-test.herokuapp.com/api/items`)
                .then(response => {
                    setItems(response.data)
                })
                .catch(error => {
                    console.log('Server Error', error)
                })
        }

        getItems();
    }, [])

    return (
        <div>
            {items.map(item => (
                <ItemDetails key={item.id} item={item} />
            ))}
        </div>
    )
}

function ItemDetails({ item }) {
    const { name, item_type } = item;
    
    return (
        <div>
            <Link to={`/items/${item.id}`}>
                <h2>{name}</h2>
            </Link>
            <p>{item_type}</p>
        </div>
    )
}

export default ItemList
