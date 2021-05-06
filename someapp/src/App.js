import React from 'react'
const App = ({notes}) => {
    return (
        <div>
            <ul>
                {notes.map(note=><li>{note.content}</li>)}
            </ul>
        </div>
    )

}
export default App