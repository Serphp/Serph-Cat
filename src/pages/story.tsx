import React from "react";
import Cat from "./api/ApiCat";

export default function Story() {
    return (
        <>
        <section className="contenedor">
            <h1> Probando </h1>
            <Mantenimiento/>
            <Cat/>
            </section>
        </>
    )
    }


export const Mantenimiento = () => {
    return <div>Mantenimiento</div>;
    }