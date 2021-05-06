import React, {useState} from 'react'

const Button = ({handler, name}) =>{
    return(
        <button onClick={handler}>
            {name}
        </button>
    )
}

const App = () => {
    const [allClicks, setAll] = useState([])

    const object = {
        left: 0,
        right: 0,
    }
    const [clicks, setClicks] = useState(object)


    const handleLeftClick = ()=>{
        setClicks({...clicks,left:clicks.left+1})
        setAll(allClicks.concat('L'))
    }
    const handleRightClick = ()=>{
        setClicks({...clicks,right:clicks.right+1})
        setAll(allClicks.concat('R'))
    }

    return (
        <>
            {clicks.left}
            <Button handler={handleLeftClick} name="left" />
            <Button handler={handleRightClick} name="right" />
            {clicks.right}
            <br />
            {allClicks.join(' ')}
        </>
    )
}
export default App