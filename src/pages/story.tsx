import React from "react";

export default function Story() {
    return (
        <>
        <section className="contenedor">
            <h1> Probando </h1>
            <Mantenimiento/>
            </section>
        </>
    )
    }


export const Mantenimiento = () => {
    return <div>Mantenimiento</div>;
    }