import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const Filter = () => {


    const { productState: { byStock, byFastDelivery, sort, byRating, }, productDispatch } = CartState();

    console.log(sort);

    return (
        <div className='filters'>
            <span className='title'> Filter Products</span>
            <span>
                <Form.Check
                    type="radio"
                    name='group1'
                    id={`inline-1`}
                    label="Ascending"
                    onChange={() => productDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: "lowToHigh",
                    })}
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    type="radio"
                    name='group1'
                    id={`inline-2`}
                    label="Descending"
                    onChange={() => productDispatch({
                        type: 'SORT_BY_PRICE',
                        payload: "highToLow",
                    })}
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    type="checkbox"
                    name='group1'
                    id={`inline-3`}
                    label="Include Out of stock"
                    onChange={() => productDispatch({
                        type: 'FILTER_BY_STOCK',

                    })}
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    type="checkbox"
                    name='group1'
                    id={`inline-3`}
                    label="Fast Delivery only"
                    onChange={() => productDispatch({
                        type: 'FILTER_BY_DELIVERY',

                    })}
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating:</label>
                <Rating rating={byRating} onClick={(i) => productDispatch({
                    type: 'FILTER_BY_RATING',
                    payload: i + 1,
                })}
                    style={{ cursor: "pointer" }} />
            </span>
            <Button variant="light"
                onClick={() => productDispatch({
                    type: 'CLEAR_FILTERS'
                })}
            >Clear Filter</Button>
        </div>
    )
}

export default Filter