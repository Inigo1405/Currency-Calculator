import React from "react";

export const Instructions = ({divisas}) => {
    return (
        <>
            <p>Opciones disponibles para el cambio de divisas:</p>
            <ul>
                {divisas.map((divisa, index) => {
                    return <li key={index}>{divisa}</li>
                })}
            </ul>
        </>
    )
}