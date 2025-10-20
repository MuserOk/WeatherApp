import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function useData(url) {
    // inicializo mis estados que guardaran la informacion
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // consulta a la api
    useEffect(() => {
        // creo la funcion de búsqueda
        const getData = async() => {
            try {
                // limpio en cada búsqueda
                setLoading(true)
                setError(null)
                    // capturo todos los resultados de la petición 
                const response = await axios.get(url);

                // seteo data con la "data" de la api
                setData(response.data);



            } catch (error) {
                // seteo error en caso de haber
                setError(error);
            } finally {
                // seteo loading en caso de haber
                setLoading(false);
            }


        };

        // llamo a la funcion de búsqueda
        getData();
    }, [url]); // el hook se ejecuta cuando detecta cambios en la url (dependencia)

    // devuelvo los resultados de la peticion
    return { loading, data, error };
}