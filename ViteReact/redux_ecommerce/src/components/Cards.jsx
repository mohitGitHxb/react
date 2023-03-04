import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {ADD} from "../store/actions/Action";
import { cartActions } from "../store/reducers/index";
import CardsData from "./CardsData";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  const dispatch = useDispatch()
  const send = (e)=>{
    console.log(e);
    dispatch(cartActions.ADD(e));
  }


  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((item, index) => {
          return (
            <Card
              style={{ width: "22rem", border: "none" }}
              key={index}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                className="mt-3"
                variant="top"
                style={{ height: "16rem" }}
                src={item.imgdata}
              />
              <Card.Body>
                <Card.Title>{item.rname}</Card.Title>
                <Card.Text>{`Price : ${item.price}`}</Card.Text>
                <div className="d-flex button_div justify-content-center">
                  <Button variant="primary"
                    onClick={()=>send(item)}
                  >Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
