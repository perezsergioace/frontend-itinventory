import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

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

    const removeItem = (id) => {
        let url = `https://it-inventory-test.herokuapp.com/api/items/${id}`

        axios.delete(url).then(response => {
            const del = items.filter(item => id !== item.id)
            setItems(del)
            console.log('res', response)
        })
    }

    if (items === undefined || items.length === 0) {
        return (
            <div style={{ width: '95%', margin: 'auto' }}>
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
                            <th className='text-center'>&#9881; Controls</th>
                        </tr>
                    </thead>
                </Table>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: 'auto' }}>
                    <h1>No items in the database... </h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: 'auto' }}>
                    <Spinner animation="border" variant="danger">
                        <span className="sr-only">Trouble Loading Item...</span>
                    </Spinner>
                </div>
            </div>
        )
    }

    return (
        <div style={{ width: '95%', margin: 'auto' }}>
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
                        <th className='text-center'>&#9881; Controls</th>
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
                            <td className='text-center'>
                                <Button style={{ margin: '10px 20px' }} variant='primary'>Edit</Button>
                                <Button variant='danger' onClick={() => removeItem(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ItemList
