import React from 'react'

const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    return (
        <div>
            <p>Hello World, It is now {now.toString()}</p>
            <p>
                {a} plus {b} is {a+b}
            </p>
        </div>
    )
}
export default App