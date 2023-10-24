import React from "react";
import { useState } from 'react';

export const Options = ({divisas}) => {
    const [select1, setSelection1] = useState('')
    const [select2, setSelection2] = useState('')

    const [data, setData] = useState('')
    const [result, setResult] = useState('')
    
    const selection = (e) => {
        var x = e.target.value
        
        console.log(x)
    }
    
    return (
        <>
            <select  onClick={selection}>
                {divisas.map((divisa, index) => {
                    return <option key={index} value={divisa}>{divisa}</option>
                })}
            </select>
            
            {/* <select>
                {divisas.map((divisa, index) => {
                    return <option key={index}>{divisa}</option>
                })}
            </select> */}
        </>
    )
}