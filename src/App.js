import './css/App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';



function App() {
const [count, setCount] =useState(0);
const [students,setStudents] = useState(['Sven','Donovan','Tyler','Yasir','BT'])

const changeCounter = () =>{
  setCount(count +1)
}

function shuffleStudents() {
  let tempStudents = [...students]
  tempStudents.sort(() => Math.random()- 0.5)
  setStudents(tempStudents)

}

  return (
    <div className="App">
      <Navbar/>
      <h1 className='counter'>{count}</h1>
      <button onClick={changeCounter}>Change Count!</button>
      <h1 className='students'>{students}</h1>
      <button onClick={shuffleStudents}>Shuffle Students!</button>
    </div>
  );
}

export default App;
