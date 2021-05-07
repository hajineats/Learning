import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/notes'


const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('type note!')
    const [showAll, setShowAll] = useState(true)

    const hook = ()=>{
        console.log('effect')
        noteService
            .getAll()
            .then(response =>{
                console.log('promise fulfiled')
                setNotes(response.data)
            })
    }

    useEffect(hook,[])
    console.log('render', notes.length, 'notes')

    const handleSubmit = (event)=>{
        event.preventDefault()
        const noteObject = {
            id: notes.length+1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() <0.5,
        }
        noteService
            .create(noteObject)
            .then(response=>{
                setNotes(notes.concat(noteObject))
                setNewNote('')
            })
    }

    const handleInput = (event)=>{
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    const handleShowAllButton = (event)=>{
        setShowAll(!showAll)
    }
    const toggleImportanceOf = (id)=>{
        const note = notes.find(n=>n.id===id)
        const changedNote = {...note, important: !note.important}
        noteService
            .update(note.id,changedNote)
            .then(response=>{
            setNotes(notes.map(note => note.id !== id ? note : response.data))
        })
    }
    const noteToBeDisplayed = showAll?notes:notes.filter(note=>note.important===true)
    return(
        <div>
            <h1>Notes</h1>
            <button onClick={handleShowAllButton}>
                switch to {showAll?"show important":"show all"}
            </button>
            <ul>
                {noteToBeDisplayed.map(note=><Note
                    key={note.id}
                    note={note}
                    toggleImportance={()=>toggleImportanceOf(note.id)} />)}
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