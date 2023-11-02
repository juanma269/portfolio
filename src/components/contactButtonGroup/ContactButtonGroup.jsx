import "./ContactButtonGroup.css";
import { Button, ButtonGroup } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { green, indigo, red } from "@mui/material/colors";

const ContactButtonGroup = () => {
  const email = "jmponceguajardoo@gmail.com";
  const emailSubject = "Asunto del correo"; // Puedes personalizar el asunto

  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}`;
  return (
    <ButtonGroup variant="outlined" size="large" color="primary">
      <Button
        className="linkedin"
        sx={{
          ":hover": {
            backgroundColor: indigo["100"],
          },
        }}
      >
        <a
          href="https://www.linkedin.com/in/juan-p-a90a0723a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" sx={{ color: indigo["900"] }} />
        </a>
      </Button>
      <Button
        className="whatsapp"
        sx={{
          ":hover": {
            backgroundColor: green["100"],
          },
        }}
      >
        <a
          href="https://api.whatsapp.com/message/OZR5GHOQSDF7A1?autoload=1&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon fontSize="large" sx={{ color: green["A700"] }} />
        </a>
      </Button>
      <Button
        className="gmail"
        sx={{
          ":hover": {
            backgroundColor: red["100"],
          },
        }}
      >
        <a href={emailLink} target="_blank" rel="noopener noreferrer">
          <EmailIcon fontSize="large" sx={{ color: red["600"] }} />
        </a>
      </Button>
    </ButtonGroup>
  );
};

export default ContactButtonGroup;
