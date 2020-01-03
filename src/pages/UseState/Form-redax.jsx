import React, {useState}  from 'react';
import {createStore} from 'redux';

const initialState = {count: 0}

export default function Form() {
    const [notes, setNotes] = useState(['a', 'b', 'c'])
    const [tasks, setTasks] = useState(['d', 'e', 'f'])
    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setNotes([...notes, text])
        setText("")
    }

    const handleDelete = (note) => {
       setNotes(notes.filter(el => el !== note))
    }

    return (
        <div className="App-header">
            <h3>План задач</h3>
            <form onSubmit={handleSubmit}>
                <p>{text}</p>
                <input 
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
            </form>
            <ol>
                {notes.map((note, index) => ( 
                    <li key={index} onClick={() => handleDelete(note)}>{note}</li> )
                )}
            </ol>
            <h3>Выполнено</h3>
            <ol>
                {tasks.map((task, index) => ( 
                    <li key={index}>{task}</li> )
                )}
            </ol>
        </div>
    )
}
