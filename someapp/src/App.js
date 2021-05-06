import React, {useState} from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)
    const incByOne = ()=>setCounter(counter+1)
    const setToZero = ()=>setCounter(0)

    return (
        <>
            <div>{counter}</div>
            <button onClick={incByOne}>
                increase
            </button>
            <button onClick={setToZero}>
                zero
            </button>
        </>
    )
}
export default App