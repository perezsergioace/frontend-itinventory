import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

const ItemList = (props) => {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        setFilteredItems(
            items.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )
        )
    }, [search, items])

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
        <div style={{width: '95%', margin: 'auto'}}>
            <h1>Items</h1>
            <Form>
                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Search Items'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Form>
            <Table striped bordered hover responsive variant='dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Item Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <Link to={`items/${item.id}`}>{item.name}</Link>
                            </td>
                            <td>{item.item_type}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ItemList
