import React, {useState} from 'react'

export const PrimerComponente = () => {

    //let nombre = "Gonzalo";
    let web = "Gonzaloavilabravo.es";

    const [nombre, setNombre] = useState("Gonzalo");

    let cursos = [
        "Posición 1 del array",
        "Posición 2 del array",
        "Posición 3 del array",
        "Posición 4 del array"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }
    return (
        <div>
            <h1>Mi primer componente</h1>
            <p>Este es un texto en mi componente</p>
            <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong> </p>
            <p>Mi web es: {web}</p>

            <input type="text" onChange={e => cambiarNombre(e.target.value)}placeholder="Cambia el nombre"/>
            <button onClick={ e => cambiarNombre("Gonzalo Ávila Bravo")}>Cambiar Nombre</button>
            <button onClick={e =>{
                console.log("El valor guardado en tu estado es: ",nombre);
            }}>Mostrar valor del resultado</button>

            <h2>Posiciones del array</h2>
            <ul>
                {
                    cursos.map( (curso, indice) =>{
                        return (<li key={indice}>
                            {curso}
                        </li>);
                    })
                }
            </ul>
        </div>
    )
}
