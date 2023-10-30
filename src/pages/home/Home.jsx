/* eslint-disable react/jsx-no-target-blank */
import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import PlusButton from "../../components/plusButton/plusButton";
import "./Home.css";
import ContactButtonGroup from "../../components/contactButtonGroup/ContactButtonGroup";
const Home = () => {
  return (
    <Container maxWidth="fluid" id="homeApp">
      <Box className="sobreMi" id="sobreMi">
        <Typography variant="h1" className="titlePage">
          Hola! Soy Juanma!
        </Typography>

        <Grid container spacing={0}>
          <Grid lg={9} sm={3} item bgcolor={"#333"} className="grid1y2">
            <Typography variant="h4" className="sobremiDescripcion">
              Un programador frontend en crecimiento. Me gusta crear, diseñar y
              aprender cosas nuevas.
            </Typography>
            <Tooltip title="Mas sobre mí" disableFocusListener>
              <PlusButton />
            </Tooltip>
          </Grid>
          <Grid lg={3} sm={3} item bgcolor={"#3333"} className="grid1y2">
            <img src="../public/juan.png" alt="Juan" className="profileImage" />
          </Grid>
        </Grid>
      </Box>

      <Box className="proyectos" id="proyectos">
        <Typography variant="h2" className="titlePage">
          Proyectos
        </Typography>
        <Grid container spacing={0}>
          <Grid lg={4} sm={4} item bgcolor={"#4333"}>
            <a href="https://juanarabfolk.com/" target="_blank">
              <img
                src="../public/icono.png"
                alt="arabfolc"
                className="proyimagen"
              />
            </a>
          </Grid>
          <Grid lg={4} sm={4} item bgcolor={"#4333"}>
            <img src="../public/robyx.png" alt="robyx" className="proyimagen" />
          </Grid>
          <Grid lg={4} sm={4} item bgcolor={"#4333"}>
            <img
              src="../public/encriptado.png"
              alt="encriptado"
              className="proyimagen"
            />
          </Grid>
        </Grid>
      </Box>

      <Box className="contacto" id="contacto">
        <Typography variant="h2" className="titlePage">
          Contacto
        </Typography>
        <Box>
          <ContactButtonGroup />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
