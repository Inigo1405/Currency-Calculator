import React from "react";
var resultado = 0

const divisas = ['MXN','USD','EUR','BTC','ETH','DODGE']


export const ResultValue = ({op1, op2, data1}) => {
    

    if(op1 == op2){
        resultado = data1
    }

    if(op1 === 'MXN'){
        if(op2 === 'USD'){
            resultado = op1 * 0.055
        }
        // else if(op2 === 'EUR'){
        //     resultado = op1 * 
        // }
        // else if(op2 === 'EUR'){
        //     resultado = op1 * 
        // }
        // else if(op2 === 'BTC'){

        // }
        // else if(op2 === 'ETH'){

        // }
        else if(op2 === 'DODGE'){
            resultado = op1
        }
    }

    return (
        <>
            <p>Resultado del cambio: {resultado}</p>
        </>
    )
}