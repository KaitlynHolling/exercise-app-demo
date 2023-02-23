import {useState} from 'react'

export default function RepetitionExercise({exercise, setMenuScreen}) {
    let [count, setCount] = useState(0)

    return <div>
    <p>{exercise.name}</p>
    <p style={{fontSize:"5em"}}>{count}</p>
    <button style={{fontSize:"2em"}} onClick={() => setCount(count=>count+1)}>Increment</button> 
    <br></br>
    <button style={{fontSize:"1em"}} onClick={() => setCount(0)}>Reset</button>
    <br></br>
    <button style={{fontSize:".5em"}} onClick={setMenuScreen}>Back to Menu</button>
    </div>
}
