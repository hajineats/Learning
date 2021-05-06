import React, {useState} from 'react'

const Button = ({handler, name}) =>{
    return(
        <button onClick={handler}>
            {name}
        </button>
    )
}

const App = () => {
    const [clicks, setClicks] = useState(
        {
            left: 0,
            right: 0,
        }
    )
    const handleLeftClick = ()=>
        setClicks({...clicks,left:clicks.left+1})
    const handleRightClick = ()=>
        setClicks({...clicks,right:clicks.right+1})


    return (
        <>
            {clicks.left}
            <Button handler={handleLeftClick} name="left" />
            <Button handler={handleRightClick} name="right" />
            {clicks.right}
        </>
    )
}
export default App