import { Button, ButtonGroup } from "@mui/material";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { blue, deepOrange, grey, yellow } from "@mui/material/colors";

const KnowledgeButtonGroup = () => {
  return (
    <ButtonGroup variant="outlined" size="large">
      <Button
        className="htmlbutton"
        sx={{
          ":hover": {
            backgroundColor: deepOrange["A400"],
          },
        }}
      >
        <HtmlIcon fontSize="large" sx={{ color: grey["A100"] }} />
      </Button>
      <Button
        className="cssbutton"
        sx={{
          ":hover": {
            backgroundColor: blue["900"],
          },
        }}
      >
        <CssIcon fontSize="large" sx={{ color: grey["A100"] }} />
      </Button>
      <Button
        className="jsbutton"
        sx={{
          ":hover": {
            backgroundColor: yellow["A200"],
          },
        }}
      >
        <JavascriptIcon fontSize="large" sx={{ color: grey["A100"] }} />
      </Button>
    </ButtonGroup>
  );
};

export default KnowledgeButtonGroup;
