import React from "react";
import { useState } from 'react';

export const Options = ({divisas}) => {
    const [select1, setSelection1] = useState(undefined)
    const [select2, setSelection2] = useState(undefined)

    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    

    const onChange = (e) => {
        if (e.target.name === 'data1'){
            setData1(e.target.value)
        }
        else if(e.target.name === 'data2'){
            setData2(e.target.value)
        }
    }


    const selection = (e) => {
        if (e.target.name === '1'){
            setSelection1(e.target.value)
        }

        if (e.target.name === '2'){
            setSelection2(e.target.value)
        }
    }


    console.log(select1)
    console.log(select2)
    console.log(data1)
    console.log(data2)
    
    return (
        <>
            <select onClick={selection} name="1">
                {divisas.map((divisa, index) => {
                    return <option key={index} value={divisa}>{divisa}</option>
                })}
            </select>
            <input type="text" name="data1" id="data1" onChange={onChange} />
            

            <select onClick={selection} name="2">
                {divisas.map((divisa, index) => {
                    return <option key={index}>{divisa}</option>
                })}
            </select>
            <input type="text" name="data2" id="data2" onChange={onChange} />
        </>
    )
}