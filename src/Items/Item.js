import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';
import Spinner from 'react-bootstrap/Spinner';

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
        return (
            <div>
                <h1>Trouble Loading Item...</h1>
                <Spinner animation="border" variant="danger">
                    <span className="sr-only">Trouble Loading Item...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <div>
            <ItemCard item={item} />
        </div>
    )
}

export default Item
