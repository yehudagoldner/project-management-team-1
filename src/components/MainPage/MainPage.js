import "./MainPage.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { task, cardHeader } from "../../taskData";
import { useState, useEffect } from "react";
import { API } from "../Api/Api";
import { Link } from "react-router-dom";

export default function BasicCard() {

  return (
    <>
    <h1 className="header">Projects</h1>
    {task.map((element) => {
    return (
      
      <Link to={`/board/${element.id}`} className="link">
      <div className="card-board">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="div">
              {element.id}
            </Typography>
            <Typography variant="body2">{element.title}</Typography>
          </CardContent>
        </Card>
      </div>
      </Link>
    );
    
  })}
  </>)
}
