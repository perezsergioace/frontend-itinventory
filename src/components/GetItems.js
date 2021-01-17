import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function GetItems() {
    const [items, setItems] = useState([])

    useEffect(() => {
        Axios.get('https://it-inventory-test.herokuapp.com/api/items')
            .then(response => {
                setItems(response.data)
            })
            .catch(error => {
                console.log(error)
            }) 
    }, [])

    return (
        <div>
            <ul>
                {items.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.item_type}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default GetItems 