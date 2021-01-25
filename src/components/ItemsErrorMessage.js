import React from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'

const ItemsErrorMessage = () => {
    return (
        <div>
            <h1>Items</h1>
            <Form>
                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Search Items'
                    // onChange={(e) => setSearch(e.target.value)}
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

export default ItemsErrorMessage
