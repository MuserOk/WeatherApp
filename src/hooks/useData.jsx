import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function useData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {

      try {
        setLoading(true)
        setError(null)
        const response = await axios.get(url);
        
        setData(response.data);
        /* setLoading(false); */
      } catch (error) {
        setError(error);
      }finally{
        setLoading(false);
      }
    };

    getData();
  }, [url]); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return { loading, data, error };
}
