import React,{ useState, useEffect } from 'React';
import './App.css';
import Axios from 'axios'

function App() {

  const {movieName, setMovieName} = useState('');
  const {review, setReview} = useState('');

  const submitReview = () =>{
    Axios.post("http://localhost:3000/");
  };

  return (
    <div className="App"> <h1>Movie Feed Back</h1>

       <div className='form'>
        <label>Movie Name</label>
        <input type='text' name='Moviename' onChange={(e)=>{
               setMovieName(e.target.value);
        }}/>
        <label>Review</label>
        <input type='text' name='Review'onChange={(e)=>{
               setReview(e.target.value);
        }}/>

        <button onClick={submitReview}>Submit</button>
       </div>
  </div>
  );
}

export default App;
