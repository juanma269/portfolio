import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import CoffeeIcon from "@mui/icons-material/Coffee";
import AlbumIcon from "@mui/icons-material/Album";
import EmojiNatureTwoToneIcon from "@mui/icons-material/EmojiNatureTwoTone";
import {
  amber,
  brown,
  lightGreen,
  pink,
  purple,
  red,
} from "@mui/material/colors";
const actions = [
  {
    icon: <CatchingPokemonTwoToneIcon sx={{ color: red["A700"] }} />,
    name: "Pokémon",
  },
  {
    icon: <VideogameAssetOutlinedIcon sx={{ color: pink[500] }} />,
    name: "Videojuegos",
  },
  {
    icon: <PhotoCameraOutlinedIcon sx={{ color: purple[500] }} />,
    name: "Fotografia",
  },
  {
    icon: <EmojiNatureTwoToneIcon sx={{ color: lightGreen["A400"] }} />,
    name: "Animales",
  },
  { icon: <AlbumIcon sx={{ color: amber[500] }} />, name: "Música" },
  { icon: <CoffeeIcon sx={{ color: brown[900] }} />, name: "Café" },
];
const PlusButton = () => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "relative",
        bottom: "10px",
        top: "150px",
        right: "950px",
      }}
      direction="right"
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
};

export default PlusButton;
