import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListaTarjetas } from "./ListaTarjetas";


export const Home = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.datos.gob.mx/v1/calidadAire")
      .then(( response ) => {
        setDatos( response?.data )
      })
      .catch((err) => console.log("Error al adquirir datos", err));
  }, []);

  return (
    <div>
      <div className="tarjeta">
        <ListaTarjetas datos={ datos } />
      </div>
    </div>
  );
};
