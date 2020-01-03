import React, {useState} from 'react'

export default function Input() {
    const [text, setText] = useState("")
    const handleChange = (event) => setText(event.target.value)
    
    return (
        <div className="App-header">
            <input 
                value={text}
                onChange={handleChange}
            />
            <p>{text}</p>
        </div>
    )
}
