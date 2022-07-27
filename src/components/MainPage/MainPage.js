import "./MainPage.css";
import * as React from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { task, cardHeader } from "../../taskData";


export default function BasicCard() {

  return (
    task.map((element) => {
       return (
        <div className='card-board'>
        <Card className='card'>
        <CardContent>
        <Typography variant="h5" component="div">
        {element.id}
        </Typography>
        <Typography variant="body2">
        {element.title}
        </Typography>
      </CardContent>
    </Card>
    </div>
       ) 
    })
    
  );
}


