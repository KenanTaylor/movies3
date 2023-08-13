import './App.css';

function App() {
  return (
    <div className="App"> <h1>Movie Feed Back</h1>

       <div className='form'>
        <label>Movie Name</label>
        <input type='text' name='Moviename'/>
        <label>Review</label>
        <input type='text' name='Review'/>

        <button>Suubmit</button>
       </div>
  </div>
  );
}

export default App;
