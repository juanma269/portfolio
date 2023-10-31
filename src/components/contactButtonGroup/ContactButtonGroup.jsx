import "./ContactButtonGroup.css";
import { Button, ButtonGroup } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { green, indigo, red } from "@mui/material/colors";

const ContactButtonGroup = () => {
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
        <a href="http://" target="_blank" rel="noopener noreferrer">
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
        <a href="http://" target="_blank" rel="noopener noreferrer">
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
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <EmailIcon fontSize="large" sx={{ color: red["600"] }} />
        </a>
      </Button>
    </ButtonGroup>
  );
};

export default ContactButtonGroup;
