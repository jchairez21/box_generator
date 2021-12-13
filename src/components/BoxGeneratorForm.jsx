import React, { useState } from 'react'


const BoxGeneratorForm = (props) => {
    // State
    const [changeColor, setChangeColor] = useState("")


    // Functionality
    const subColor = (e) => {
        e.preventDefault();
        console.log(changeColor)

        const newBox = {
            color: changeColor
        }

        props.createBox(newBox)
        setChangeColor("")
    }



    // Form
    return (
        <div>
            <form onSubmit={subColor}>
                Color:
                <input type="text" onChange={e => setChangeColor(e.target.value)} value={changeColor} />
                <button>Add Color</button>
            </form>
        </div>
    )
}

export default BoxGeneratorForm
