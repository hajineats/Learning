import React, {useState} from 'react'

const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);

    const incOne = (v, f) => ()=> f(v+1)

    return (
        <div>
            {left}
            <button onClick={incOne(left,setLeft)}>
                left
            </button>
            <button onClick={incOne(right,setRight)}>
                right
            </button>
            {right}

        </div>
    )
}
export default App