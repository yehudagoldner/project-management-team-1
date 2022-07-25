import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { task, cardHeader } from "../../taskData";

// Render Card Content
export const RenderCardContent = (data, headerName) => {
  return data.map((element) => {
    return element.status === headerName.toLowerCase() ? (
      <div key={element.id}>
        <Card className="board-card-task">
          <CardContent>
            <Typography variant="h5" component="div">
              {element.title}
            </Typography>
          </CardContent>
        </Card>
      </div>
    ) : (
      ""
    );
  });
};

// Render Card
export const RenderCard = () => {
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
        {RenderCardContent(task, header.name)}
      </Card>
    );
  });
};
