import { Container, Box, Grid, Typography } from "@mui/material";
import PlusButton from "../../components/plusButton/plusButton";
import "./Home.css";
import ContactButtonGroup from "../../components/contactButtonGroup/ContactButtonGroup";
import KnowledgeButtonGroup from "../../components/knowledgeButtonGroup/KnowledgeButtonGroup";

const Home = () => {
  return (
    <Container maxWidth="fluid" id="homeApp">
      {/* Secciones de Sobre Mí */}
      <Box className="sobreMi" id="sobreMi">
        <Typography variant="h2" className="titlePage">
          Hola! Soy Juanma!
        </Typography>
        <Box className="contenedorSobreMi">
          <Box bgcolor={"#10110c"} className="divDescripcion">
            <Typography variant="h3" className="sobremiDescripcion">
              Un programador frontend en crecimiento. Me gusta crear, diseñar y
              aprender cosas nuevas.
            </Typography>
            <Typography variant="h6" className="sobremiDescripcion2">
              Más sobre mí:
            </Typography>
            <PlusButton />
          </Box>
          <Box bgcolor={"#10110c"} className="sobreMiFotoDiv">
            <img src="../public/juan.png" alt="Juan" className="fotoPerfil" />
            <Box className="conocimientos">
              <KnowledgeButtonGroup />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Sección de Proyectos */}
      <Box className="proyectos" id="proyectos">
        <Typography variant="h2" className="titlePage">
          Proyectos
        </Typography>
        <Grid container spacing={2}>
          <Grid lg={4} sm={6} item>
            <a
              href="https://juanarabfolk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../public/icono.png"
                alt="arabfolc"
                className="proyimagen"
              />
            </a>
          </Grid>
          <Grid lg={4} sm={6} item>
            <img src="../public/robyx.png" alt="robyx" className="proyimagen" />
          </Grid>
          <Grid lg={4} sm={6} item>
            <img
              src="../public/encriptado.png"
              alt="encriptado"
              className="proyimagen"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Sección de Contacto */}
      <Box className="contacto" id="contacto">
        <Typography variant="h2" className="titlePage">
          Contacto
        </Typography>
        <Box className="divGrupoDeBotones">
          <ContactButtonGroup />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
