import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            }catch(err) {
                console.log(err);
            }

        };
        fetchAllBooks();

    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/books/${id}`)
            window.location.reload()
        }catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Alex bokshop</h1>
            <div className="books">
              {books.map((book) => (
                <div key={books.id} className='book'>
                    <img src={book.cover} alt="cover" className="profile-photo" />
                    <h3>{book.title}</h3>
                    <p>{book.about}</p>
                    <p>{book.price}kr</p>
                    <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
                    <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>
                </div>
              ))}
            </div>
            <button className='addHome'><Link to="/add">Add new book</Link></button>
        </div>
    )
}



export default Books
