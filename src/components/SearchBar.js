import './SearchBar.css'
import {useState} from 'react'


const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  
  )
}

export default SearchBar