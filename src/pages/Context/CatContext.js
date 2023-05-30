/* eslint-disable react-hooks/exhaustive-deps */
import { React, createContext, useState, useEffect } from 'react';
//import fetch from 'isomorphic-unfetch';

export const CatContext = createContext();

const CatContextProvider = ({ children }) => {

    const [catImageUrl, setCatImageUrl] = useState(null);
    const [catText, setCatText] = useState("");
    const [catjson, setCatjson] = useState("");


        const fetchCatImage = async () => {
          try {
            const response = await fetch("https://cataas.com/cat");
            if (!response.ok) {
              throw new Error("Error al obtener la imagen del gato");
            }
        
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setCatImageUrl(imageUrl);
          } catch (error) {
            console.error("Ocurrió un error al obtener la imagen del gato:", error);
            setCatImageUrl(null);
          }
        };

        const gifCat = async () => {
            try {
                const response = await fetch("https://cataas.com/cat/gif");
                if (!response.ok) {
                    throw new Error("Error al obtener la imagen del gato");
                }
                
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setCatImageUrl(imageUrl);
            } catch (error) {
                console.error("Ocurrió un error al obtener la imagen del gato:", error);
                setCatImageUrl(null);
            }
        };

        const handletext = (e) => {
            setCatText(e.target.value);
        };

        const catimgtext = async () => {
            try {
                const response = await fetch(`https://cataas.com/cat/says/${catText}`);
                if (!response.ok) {
                    throw new Error("Error al obtener la imagen del gato");
                }
                
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setCatImageUrl(imageUrl);
            } catch (error) {
                console.error("Ocurrió un error al obtener la imagen del gato:", error);
                setCatImageUrl(null);
            }
        };

        const catinfo = async () => {
            try {
                const response = await fetch(`https://cataas.com/cat/says/cat?json=true`);
                const data = await response.json();
                console.log(data);
                setCatjson(data);
                setCatImageUrl(null);
            } catch (error) {
                console.error("Ocurrió un error al obtener la imagen del gato:", error);
                setCatImageUrl(null);
            }
        };


        // const catTextFilter = async () => {
        //     try {
        //         const response = await fetch(`https://cataas.com/cat/says/${text}?filter=sepia`);
        //         if (!response.ok) {
        //             throw new Error("Error al obtener la imagen del gato");
        //         }
        useEffect(() => {
            fetchCatImage();
            console.log(catImageUrl);
        }, []);

const value = {
    fetchCatImage,
    catImageUrl,
    gifCat,
    handletext,
    catimgtext,
    catText, setCatText,
    catinfo,
    catjson,

}

    return (
        <CatContext.Provider value={value}>
            {children}
        </CatContext.Provider>
    )
}

export default CatContextProvider;