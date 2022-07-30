import MainHeader from "../MainHeader/MainHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { API } from "../Api/Api";
import "./About.css";
const About = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const { data } = await API.get("/projects/");
        setData(data);
        console.log(data);
        console.log(isLoading);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProject();
  }, []);

  return isLoading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <>
      <div className="main-page">
        <MainHeader />
        <div className="main-page-container">
          <Card
            className="about-card"
            style={{
              color: "black",
              borderRadius: "5%",
              overflow: "auto",
              // height: "40vh",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                className="project-card-title"
              >
                AppleSeedsTodo
              </Typography>
              <Typography component="div" className="project-card-content">
                When you have a great story about how your product or service
                was built to change lives, share it. The About Us page is a
                great place for it to live, too. Good stories humanize your
                brand, providing context and meaning for your product. What’s
                more, good stories are sticky — which means people are more
                likely to connect with them and pass them on.
              </Typography>
              <Typography component="div" className="project-card-content">
                Yellow Leaf Hammocks tells users about its product by describing
                how the hammocks empower artisan weavers and their families. The
                company breaks down different pieces of the story into sections
                that combine words and easily digestible graphics, painting a
                picture instead of big chunks of text. Yellow Leaf is clear
                about why its brand is different: "Not a Charity," the page
                reads. And then: "This is the basis for a brighter future, built
                on a hand up, not a handout."
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
