import React from "react";
import { Button, Card } from "react-bootstrap";
import compteur from "../../Assets/compteur.jpg";
const MainContent = ({
  hours,
  minutes,
  seconds,
  start,
  startClick,
  resetClick,
}) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={compteur} />
      <Card.Body>
        <Card.Text style={{ display: "flex", justifyContent: "space-around" }}>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="success" onClick={startClick}>
            {start}
          </Button>
          <Button variant="danger" onClick={resetClick}>
            reset
          </Button>
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default MainContent;
