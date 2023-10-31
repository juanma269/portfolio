import { Button, ButtonGroup } from "@mui/material";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { green, indigo, red } from "@mui/material/colors";

const KnowledgeButtonGroup = () => {
  return (
    <ButtonGroup variant="outlined" size="large" color="primary">
      <Button
        className="htmlbutton"
        sx={{
          ":hover": {
            backgroundColor: indigo["100"],
          },
        }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <HtmlIcon fontSize="large" sx={{ color: indigo["900"] }} />
        </a>
      </Button>
      <Button
        className="cssbutton"
        sx={{
          ":hover": {
            backgroundColor: green["100"],
          },
        }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <CssIcon fontSize="large" sx={{ color: green["A700"] }} />
        </a>
      </Button>
      <Button
        className="jsbutton"
        sx={{
          ":hover": {
            backgroundColor: red["100"],
          },
        }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <JavascriptIcon fontSize="large" sx={{ color: red["600"] }} />
        </a>
      </Button>
    </ButtonGroup>
  );
};

export default KnowledgeButtonGroup;
