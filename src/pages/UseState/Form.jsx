import React, {useState, useEffect}  from 'react';
import close from './close.ico';

export default function Form() {
    const [notes, setNotes] = useState([])
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState("")
    const [dragNote, setDrag] = useState({})
    const [dropNote, setDrop] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1') 
            .then(data => data.json())
            .then(res => {
                console.log(res)
                setNotes(res)
            })
    }, [])

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(text.trim() !== "") {
            setNotes([...notes, text])
            setText("")
        }
    }

    const handleDone = (note) => {
        setNotes(notes.filter(el => el !== note))
        setTasks([...tasks, note])
    }

    const handleDelete = (task) => {
        setTasks(tasks.filter(el => el !== task))
    }

    const handleDrag = (note) => {
        setDrag(note)
    }

    const handleDrop = (note) => {
        setDrop(dragNote)
        setNotes([...notes, dragNote])
        setDrag({})
    }

    const handleDragOver = (event) => {
        event.preventDefault()
        setNotes(notes.filter(el => el !== dragNote))
    }

    const handleEdit = (event, text) => {
        event.stopPropagation()
       // setText(text)
        console.log(text)
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
                    <li key={index} onClick={() => handleDone(note)} 
                        draggable 
                        onDragStart={() => handleDrag(note)}
                        onDrop={() => handleDrop(note)}
                        onDragOver={event => handleDragOver(event)}
                    >{note.title}
                        <img className="edit" src="https://icon-icons.com/icons2/402/PNG/32/edit-validated_40458.png" alt="prop" style={{"height": "15", "width": "15px"}} 
                            onClick={(event) => handleEdit(event, note)}/>
                    </li> )
                )}
            </ol>
            <h3>Выполнено</h3>
            <ol>
                {tasks.map((task, index) => ( 
                    <li key={index}>
                        {task.title}
                        <button className="delete" onClick={() => handleDelete(task)}>
                            <img src="https://cdn.icon-icons.com/icons2/894/PNG/512/Close_Icon_Circle_icon-icons.com_69142.png" alt="prop" style={{"height": "15", "width": "15px"}}/>
                        </button>
                    </li>
                    )
                )}
            </ol>
        </div>
    )
}
