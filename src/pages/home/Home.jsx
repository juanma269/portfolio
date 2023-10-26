import { Box, Container, Grid, Typography } from "@mui/material";
import PlusButton from "../../components/plusButton/plusButton";
("../../components/plusButton/plusButton");
import "./Home.css";
const Home = () => {
  return (
    <Container maxWidth="fluid" id="homeApp">
      <Box className="sobreMi" id="sobreMi">
        <Typography variant="h4" className="titlePage">
          Hola! Soy Juanma!
        </Typography>

        <Grid container spacing={0}>
          <Grid lg={9} sm={3} item bgcolor={"#333"} className="grid1y2">
            <Typography variant="h4" className="sobremiDescripcion">
              Un programador frontend en crecimiento. Me gusta el crear, diseñar
              y aprender cosas nuevas.
            </Typography>
            <Grid lg={1} sm={1}></Grid>
            <PlusButton />
          </Grid>
          <Grid lg={3} sm={3} item bgcolor={"#3333"} className="grid1y2">
            <img src="../public/juan.png" alt="Juan" className="profileImage" />
          </Grid>
        </Grid>
      </Box>

      <Box className="proyectos" id="proyectos">
        <Typography variant="h4" className="titlePage">
          Proyectos
        </Typography>
      </Box>

      <Box className="contacto" id="contacto">
        <Typography variant="h4" className="titlePage">
          Contacto
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
