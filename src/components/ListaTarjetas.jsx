import React from "react";
import { Tarjeta } from "./Tarjeta";
import Container from "@material-ui/core/Container";
import InfiniteScroll from 'react-infinite-scroller';

export const ListaTarjetas = ({ datos }) => {

  return (
    <>
        <div className="tarjetas">
          {datos.results?.map((datos) => {
            return <Tarjeta datos={datos} key={datos.id} />;
          })}
        </div>
    </>
  );
};
