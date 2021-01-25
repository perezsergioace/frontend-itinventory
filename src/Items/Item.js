import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

const Item = (props) => {
    const [item, setItem] = useState();

    useEffect(() => {
        const id = props.match.params.id;

        axios
            .get(`https://it-inventory-test.herokuapp.com/api/items/${id}`)
            .then(response => {
                setItem(response.data.item_info[0]);
            })
            .catch(error => {
                console.log(error)
            });
    }, [props.match.params.id]);

    if (!item) {
        return <div>Trouble Loading Item...</div>
    }

    // const { item_name, price, item_added_date, comment } = item;

    return (
        <div>
            {/* <h2>{item_name}</h2> */}
            {/* <p>{price}</p> */}
            {/* <p>{item_added_date}</p> */}
            {/* <p>{comment}</p> */}
            <ItemCard item={item} />
        </div>
    )
}

export default Item
