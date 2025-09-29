import React, { useRef } from 'react'
const Sum = () => {
    const text1 = useRef(null);
    const show = () => {
        let txt1 = text1.current.value
        console.log(txt1);
    }
    return ( 
        // find leap year : current year is leap year/not leap year
        <div>
            <input ref={text1} 
            type='text' placeholder='Enter your name' /> 
            <br /><br />
            <button onClick={show}>Click</button>
        </div>
    )
}

export default Sum