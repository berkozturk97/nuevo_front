import axios from 'axios';

//Kitap Cagirma
export const getBook = () => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "http://localhost:3001/book/get";
        axios.get(REQUEST_URL)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};



//Kitap Ekleme
export const addBook = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "http://localhost:3001/book/add";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};