import React, {useState} from 'react'
import Note from './components/Note'


const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('type note!')
    const handleSubmit = (event)=>{
        event.preventDefault()
        const noteObject = {
            id: notes.length+1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() <0.5,
        }
        setNotes(notes.concat(noteObject))
    }

    const handleInput = (event)=>{
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    return(
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note=><li key={note.id}>{note.content}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    value={newNote}
                    onChange={handleInput}/>
                <button type="submit">submit!</button>
            </form>
        </div>
    )


}
export default App