import "./MainPage.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { task, cardHeader } from "../../taskData";
import { useState, useEffect } from "react";
import { API } from "../Api/Api";

export default function BasicCard() {
  return task.map((element) => {
    return (
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
    );
  });
}
