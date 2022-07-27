import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { API } from "../Api/Api";
const RenderCardContent = ({ headerName, setData, data }) => {
  const updateTasks = async (newObj) => {
    try {
      const { data } = await API.put(`/tasks/${newObj._id}`, newObj);
      // setData(data);
      console.log(data);
      // console.log(isLoading);
      // setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLeftArrow = ({ target }) => {
    const newTaskBoard = data.map((element) => {
      if (target.id === element._id && element.status === "IN_PROCESS") {
        element.status = "TODO";
        updateTasks(element);
      } else if (target.id === element._id && element.status === "DONE") {
        element.status = "IN_PROCESS";
        updateTasks(element);
      }
      return element;
    });
    setData(newTaskBoard);
  };

  const handleRightArrow = ({ target }) => {
    const newTaskBoard = data.map((element) => {
      if (target.id === element._id && element.status === "IN_PROCESS") {
        element.status = "DONE";
        updateTasks(element);
      } else if (target.id === element._id && element.status === "TODO") {
        element.status = "IN_PROCESS";
        updateTasks(element);
      }
      return element;
    });
    setData(newTaskBoard);
  };

  return data.map((element) => {
    return element.status === headerName ? (
      <div key={element.id}>
        <Card className="board-card-task">
          {element.status !== "TODO" ? (
            <ChevronLeftIcon
              className="left-icon"
              onClick={handleLeftArrow}
              value={element.status}
              id={element._id}
            />
          ) : (
            ""
          )}
          <CardContent>
            <Typography variant="h5" component="div">
              {element.title}
            </Typography>
          </CardContent>
          {element.status !== "DONE" ? (
            <ChevronRightIcon
              className="right-icon"
              onClick={handleRightArrow}
              value={element.status}
              id={element._id}
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
