import { useState } from 'react';
import Game from './Game'
const Customize = () => {
    const [color,setColor] = useState()
    const [text,setText] = useState("")
    const [board, setBoard] = useState(['','','','','','','','','']);
    const handleColor = () => {
    }
    const handleChange = (e) => {
        setColor(e.target.value)
    }
    return(
        <div>
            <Game></Game>
            <select value={color} onChange={handleChange}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
            <button onClick={handleColor}>Change color</button>
        </div>
    )
}

export default Customize;