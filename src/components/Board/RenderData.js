import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { cardHeader } from "../../taskData";

import RenderCardContent from "./RenderCardContent";
import "./Board.css";

// Render Card

const RenderCard = ({ data, setData }) => {
  return cardHeader.map((header) => {
    return (
      <Card
        className="board-card"
        style={{
          backgroundColor: "black",
          color: "#fff",
          borderRadius: "5%",
          overflow: "auto",
        }}
        key={header.id}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{ marginLeft: "1vw" }}
          >
            {header.name}
          </Typography>
        </CardContent>
        <RenderCardContent
          headerName={header.name}
          setData={setData}
          data={data}
        />
      </Card>
    );
  });
};
export default RenderCard;
