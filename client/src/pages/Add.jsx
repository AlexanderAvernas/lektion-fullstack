import axios from "axios"
import {useState} from 'react'
import { useNavigate, Link } from "react-router-dom"

const Add = () => {
    const [book, setBook] = useState({
    title: "",
    about: "",
    price: null,
    cover: ""
})
const {error, setError} = useState(false);

const navigate = useNavigate();

const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value}))

}
const handleClick = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8800/books', book);
        navigate('/');

    }catch (err) {
        console.log(err);
        setError(true)
    }
}
return (
    <div className="form">
        <h1>Add new book</h1>
        <input type="text" placeholder="Book title" name="title" onChange={handleChange}/>
        <input type="textarea" placeholder="Description" name="about" onChange={handleChange}/>
        <input type="number" placeholder="Price" name="price" onChange={handleChange}/>
        <input type="text" placeholder="Book cover" name="cover" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        {error && 'Something is wrong'}
        <Link to='/'>See all books</Link>
    </div>
)
}

export default Add
