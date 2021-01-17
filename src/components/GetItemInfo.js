import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function GetItemInfo() {
    const [item, setItem] = useState([])
    const [id, setId] = useState(1)
    const [assigned, setAssigned] = useState({message: '', boolValue: 'false'})

    useEffect(() => {
        Axios.get(`https://it-inventory-test.herokuapp.com/api/items/${id}`)
            .then(response => {
                setItem(response.data.item_info[0])

                if (response.data.item_info[0].assigned_to === true) {
                    setAssigned({message: 'Assigned', boolValue: 'true'})
                } else {
                    setAssigned({message: 'Not Assigned', boolValue: 'false'})
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    return(
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <h2>{item.item_name}</h2>
            <p>{item.price}</p>
            <p>{item.purchased_date}</p>
            <p>{item.item_added_date}</p>
            <p>{item.comment}</p>
            <p className={assigned.boolValue}>{assigned.message}</p>
        </div>
    )
}

export default GetItemInfo
