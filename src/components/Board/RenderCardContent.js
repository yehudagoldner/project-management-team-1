import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// Render Card Content
const RenderCardContent = ({ headerName, setData, data }) => {
  const handleLeftArrow = ({ target }) => {
    const newTaskBoard = data.map((element) => {
      if (
        Number(target.id) === Number(element.id) &&
        element.status === "process"
      ) {
        console.log(element.status);
        element.status = "todo";
      } else if (
        Number(target.id) === Number(element.id) &&
        element.status === "done"
      ) {
        element.status = "process";
      }
      return element;
    });

    setData(newTaskBoard);
  };

  const handleRightArrow = ({ target }) => {
    const newTaskBoard = data.map((element) => {
      if (
        Number(target.id) === Number(element.id) &&
        element.status === "process"
      ) {
        console.log(element.status);
        element.status = "done";
      } else if (
        Number(target.id) === Number(element.id) &&
        element.status === "todo"
      ) {
        element.status = "process";
      }
      return element;
    });

    setData(newTaskBoard);
  };
  return data.map((element) => {
    return element.status === headerName.toLowerCase() ? (
      <div key={element.id}>
        <Card className="board-card-task">
          {element.status !== "todo" ? (
            <ChevronLeftIcon
              className="left-icon"
              onClick={handleLeftArrow}
              value={element.status}
              id={element.id}
            />
          ) : (
            ""
          )}
          <CardContent>
            <Typography variant="h5" component="div">
              {element.title}
            </Typography>
          </CardContent>
          {element.status !== "done" ? (
            <ChevronRightIcon
              className="right-icon"
              onClick={handleRightArrow}
              value={element.status}
              id={element.id}
            />
          ) : (
            ""
          )}
        </Card>
      </div>
    ) : (
      ""
    );
  });
};

export default RenderCardContent;
