import React from "react";
var resultado = 0

const divisas = ['MXN','USD','EUR','BTC','ETH','DODGE']


export const ResultValue = ({op1, op2, data1}) => {
    

    if(op1 == op2){
        resultado = data1
    }

    if(op1 === 'MXN'){
        if(op2 === 'USD'){
            resultado = data1 * 0.055
        }
        else if(op2 === 'EUR'){
            resultado = data1 * 0.052
        }
        else if(op2 === 'EUR'){
            resultado = data1 
        }
        else if(op2 === 'BTC'){
            resultado = data1
        }
        else if(op2 === 'ETH'){
            resultado = data1
        }
        else if(op2 === 'DODGE'){
            resultado = data1
        }
    }

    return (
        <>
            <p>Resultado del cambio: {resultado}</p>
        </>
    )
}