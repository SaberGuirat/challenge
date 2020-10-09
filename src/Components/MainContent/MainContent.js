import React from "react";
import { Button, Card } from "react-bootstrap";
import compteur from "../../Assets/compteur.jpg";
const MainContent = ({ hours, minutes, seconds, start,startClick,resetClick }) => (
  <div style={{display:"flex",justifyContent:"center"}}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={compteur} />
      <Card.Body>
        <Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>{hours}</h3>
            <h3>{minutes}</h3>
            <h3>{seconds}</h3>
          </div>
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="success" onClick={startClick}>{start}</Button>
          <Button variant="danger" onClick={resetClick}>reset</Button>
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default MainContent;
