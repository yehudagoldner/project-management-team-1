import "./MainPage.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { task, cardHeader } from "../../taskData";
import { useState, useEffect } from "react";
import { API } from "../Api/Api";
import MainHeader from "../MainHeader/MainHeader";

import { Link } from "react-router-dom";

export default function BasicCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProj = async () => {
      try {
        const { data } = await API.get("/projects/");
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchProj();
  }, []);

  return (
    <>
      <MainHeader />
      <h1 className="header">Projects</h1>
      {data.map((element) => {
        return (
          <Link key={element._id} to={`/board/${element._id}`} className="link">
            <div className="card-board">
              <Card className="card">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {element.id}
                  </Typography>
                  <Typography variant="body2">{element.title}</Typography>
                  <Typography variant="body2">{element.goal}</Typography>
                  <Typography variant="body2">{element.description}</Typography>
                </CardContent>
              </Card>
            </div>
          </Link>
        );
      })}
    </>
  );
}
