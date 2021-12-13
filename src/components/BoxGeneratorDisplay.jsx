import React from 'react';


const BoxGeneratorDisplay = ({ box }) => {
    console.log(box)
    return (
        <>
            <div style={{
                backgroundColor: box.color,
                height: "100px",
                width: "100px",
                display: "inline-block"
            }}>
                {box.color}
            </div>
        </>
    );


};

export default BoxGeneratorDisplay;

