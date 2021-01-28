import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Tarjeta = ({ datos }) => {

  const classes = useStyles();
  return (
    <Card style={{ margin: "10px 10px", width: 200 }}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {datos.stations[0].source_id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {datos.stations[0].name}
        </Typography>
        <Typography variant="body2" component="p">
          lat: {datos.stations[0].location.lat}
          <br />
          lng: {datos.stations[0].location.lon}
        </Typography>
        <Typography variant="body2" component="p">
          Name: {datos.stations[0].name}
        </Typography>
      </CardContent>
    </Card>
  );
};
