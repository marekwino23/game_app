import { useState } from 'react';
import Game from './Game'
const Customize = () => {
    const [color,setColor] = useState()
    // const [text,setText] = useState("")
    const [board,setBoard] = useState(['','','','','','','','','']);
    const handleColor = () => {
        const table = document.getElementById("table")
        table.style.backgroundColor = color 
    }
    const handleChange = (e) => {
        setColor(e.target.value)
    }
    return(
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {board.map((el, index) => (
              <div id="table" key={index} style={{ backgroundColor: 'white', flexBasis: '25%', height: '30px', border: '2px solid black', color: 'red' }}>{el}</div>  
            ))}
        </div>
            <select value={color} onChange={handleChange}>
                <option></option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
            <button onClick={handleColor}>Change color</button>
        </div>
    )
}

export default Customize;