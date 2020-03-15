import React, { useState, useEffect } from 'react';
import DetailedBookCard from '../Components/DetailedBookCard';
import { getSelectedBook } from '../API/BookAPI';


  
export default function DetailPage(props) {

    const [book, setBook] = useState([]);
    useEffect(() => {
        getItem()
    }, [])
    const getItem = async () => {
        console.log(props.location.state.item)
        let body = { _id: props.location.state.item._id }
        let responseData = await getSelectedBook({ body: body })
        if (responseData !== null || responseData !== undefined) {
            setBook(responseData)
            console.log(responseData)
        }
    }
    const renderBook = () => {
        return book.map((data, index) => {
            return <DetailedBookCard key={index} title={data.name} price={data.price} desc={data.description} author={data.author} publisher={data.publisher} photo={data.productPhoto} />
        })
    }
    return (
        <div>
                {renderBook()}
        </div>
    )
}